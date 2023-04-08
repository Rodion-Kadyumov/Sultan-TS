export type CatalogPropsType = {
  id?: number
  url?: string
  weight?: string
  title?: string
  code?: number
  manufacturer?:string
  brand?: string
  price?: number
  description?:string
};

export type DetailPropsType = {
  id: number
  url: string
  weight: string
  title: string
  code: number
  manufacturer:string
  brand: string
  price: number
  description:string
};

export type CardPropsType = {
  id: number
  url: string
  weight: string
  title: string
  code: number
  manufacturer:string
  brand: string
  price: number
  description:string
};

export type ChoisePropsType = {
  id: number,
  url: string
  weight: string
  title: string
  description:string
  price: number
};

export type PaginationType = {
  currentPage: number;
  onChangePage: (page: number) => void;
};