import { Component, computed, inject, input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AddressesService } from '../../../../../service/addresses.service';
import { Router, RouterLink } from '@angular/router';
import { PageMode } from '../../../../../model/enums.model';

@Component({
  selector: 'app-addresses-editor',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, RouterLink],
  templateUrl: './addresses-editor.component.html',
  styleUrl: './addresses-editor.component.scss',
})
export class AddressesEditorComponent implements OnInit {
  private _formBuilder = inject(FormBuilder);
  private _adressesService = inject(AddressesService);
  private _router = inject(Router);

  form: FormGroup = new FormGroup({});

  pageMode = input.required<PageMode>();
  id = input.required<string | undefined>();

  isEditor = computed(() => this.pageMode() !== PageMode.view);

  ngOnInit(): void {
    this._initForm();

    if (this.id()) this._prepareForm(+this.id()!);
  }

  private _initForm(): void {
    this.form = this._formBuilder.group({
      id: [Math.floor(Math.random() * 2228)],
      name: [{ value: '', disabled: !this.isEditor() }, [Validators.required]],
      street: [
        { value: '', disabled: !this.isEditor() },
        [Validators.required],
      ],
      building: [
        { value: '', disabled: !this.isEditor() },
        [Validators.required],
      ],
      apartmentNumber: [
        { value: '', disabled: !this.isEditor() },
        [Validators.required],
      ],
    });
  }
  private _prepareForm(id: number): void {
    const address = this._adressesService.addresses.find((e) => e.id === id);

    if (!address) return;

    this.form.patchValue(address);
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    this.pageMode() === PageMode.edit ? this._edit() : this._creat();
    this._router.navigateByUrl('/addresses');
  }

  private _edit(): void {
    const index = this._adressesService.addresses.findIndex(
      (e) => e.id === +this.id()!
    );

    if (index < 0) return;
    this._adressesService.addresses.splice(index, 1, this.form.getRawValue());
  }
  private _creat(): void {
    const form = this.form.getRawValue();

    this._adressesService.addresses.push(form);
  }
}
