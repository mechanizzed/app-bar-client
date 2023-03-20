export interface ProductsContentProps {
  id: number;
  pro_descr: string;
  pro_venda: number;
  pro_cod: number;
  pro_index: number;
  pro_codret: number;
}

export interface ProductsContextProps {
  products: Array<ProductsContentProps>;
}
