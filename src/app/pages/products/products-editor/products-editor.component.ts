import { Component, computed, inject, input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PageMode } from '../../../model/enums.model';
import { ProductsService } from '../../../service/products.service';

@Component({
  selector: 'app-products-editor',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './products-editor.component.html',
  styleUrl: './products-editor.component.scss',
})
export class ProductsEditorComponent implements OnInit {
  private _router = inject(Router);
  private _formBuilder = inject(FormBuilder);
  private _productsService = inject(ProductsService);

  pageMode = input.required<PageMode>();
  id = input.required<string | undefined>();

  isEditor = computed(() => this.pageMode() !== PageMode.view);

  form: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      id: [Math.floor(Math.random() * 228), [Validators.required]],
      name: [{ value: '', disabled: !this.isEditor() }, [Validators.required]],
      countity: [
        { value: '', disabled: !this.isEditor() },
        [Validators.required],
      ],
      exp_Date: [
        { value: '', disabled: !this.isEditor() },
        [Validators.required],
      ],
      unitPrice: [
        { value: '', disabled: !this.isEditor() },
        [Validators.required],
      ],
    });

    if (this.id()) this._prepareForms(+this.id()!);
  }

  private _prepareForms(id: number): void {
    const products = this._productsService.products.find(
      (e) => e.id === +this.id()!
    );
    if (!products) return;
    this.form.patchValue(products);
  }
  public onSubmit(): void {
    if (this.form.invalid) return;

    this.pageMode() === PageMode.edit ? this._edit() : this._creat();

    this._router.navigateByUrl('/products');
  }

  private _edit(): void {
    const index = this._productsService.products.findIndex(
      (e) => e.id === +this.id()!
    );
    if (index < 0) return;
    this._productsService.products.splice(index, 1, this.form.getRawValue());
  }

  private _creat(): void {
    this._productsService.products.push(this.form.getRawValue());
  }
}
