export interface CategoriesContentProps {
  id: number;
  a_codigo: number;
  a_descr: string;
  a_grupoagru: number;
  company_id: number;
}

export interface CategoriesContextProps {
  categories: Array<CategoriesContentProps>;
}
