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
import { ProductsService } from '../../../service/products.service';

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
  _productsService = inject(ProductsService);

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

  private _prepareForms(id: number): void {
    const product = this._menusService.menus.find((e) => e.id === id);

    if (!product) return;
    this.form.patchValue(product);
    this._productIds = product.productIds;
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
    const form = this.form.getRawValue();
    form.productIds = this._productIds;
    this._menusService.menus.splice(index, 1, form);
  }

  private _creat(): void {
    const form = this.form.getRawValue();
    form.productIds = this._productIds;
    this._menusService.menus.push(form);
  }

  private _productIds: number[] = [];

  productSelected(id: number) {
    const productId = this._productIds.find((e) => e === id);
    if (productId) this._productIds = this._productIds.filter((e) => e !== id);
    else this._productIds.push(id);
  }

  isCheckboxChecked(id: number) {
    return this._productIds.includes(id);
  }
}
