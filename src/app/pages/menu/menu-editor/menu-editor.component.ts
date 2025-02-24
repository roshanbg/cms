import { Component, computed, inject, input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MenusService } from '../../../service/menus.service';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PageMode } from '../../../model/enums.model';

@Component({
  selector: 'app-menu-editor',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './menu-editor.component.html',
  styleUrl: './menu-editor.component.scss',
})
export class MenuEditorComponent implements OnInit {
  private _router = inject(Router);
  private _menusService = inject(MenusService);
  private _formBuilder = inject(FormBuilder);

  form: FormGroup = new FormGroup([]);

  pageMode = input.required<PageMode>();
  id = input.required();

  isEditor = computed(() => this.pageMode() !== PageMode.view);

  private _initForm(): void {
    this.form = this._formBuilder.group({
      id: [Math.floor(Math.random() * 228), [Validators.required]],
      name: [{ value: '', disabled: !this.isEditor() }, [Validators.required]],
    });
  }

  ngOnInit(): void {
    this._initForm();

    if (this.id()) this._prepareForms(+this.id()!);
  }

  // private _praperForm(id: number): void {
  //   const menu = this._menusService.menus.find((e) => e.id === id);

  //   if (!menu) return;

  //   this.form.patchValue(menu);
  // }

  // public onSubmit(): void {
  //   if (this.form.invalid) return;

  //   this.pageMode() === PageMode.edit ? this._edit : this._creat;

  //   this._router.navigateByUrl('/menus');
  // }

  // private _edit(): void {
  //   const index = this._menusService.menus.findIndex((e) => e.id === this.id());

  //   if (index < 0) return;

  //   this._menusService.menus.splice(index, 1, this.form.getRawValue());
  // }

  // private _creat(): void {
  //   const form = this.form.getRawValue();

  //   this._menusService.menus.push(form);
  // }
  private _prepareForms(id: number): void {
    const product = this._menusService.menus.find((e) => e.id === id);

    if (!product) return;
    this.form.patchValue(product);
  }

  public onSubmit(): void {
    if (this.form.invalid) return;

    this.pageMode() === PageMode.edit ? this._edit() : this._creat();

    this._router.navigateByUrl('/menus');
  }

  private _edit(): void {
    const index = this._menusService.menus.findIndex(
      (e) => e.id === +this.id()!
    );
    if (index < 0) return;
    this._menusService.menus.splice(index, 1, this.form.getRawValue());
  }

  private _creat(): void {
    const form = this.form.getRawValue();

    this._menusService.menus.push(form);
  }
}
