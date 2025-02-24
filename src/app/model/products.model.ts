export interface Product {
  id: number;
  imageUrl: string;
  name: string;
  countity: number;
  expDate: number;
  unitPrice: number;
}

export interface CheckOut {
  id: number;
  name: string;
  total: number;
}
