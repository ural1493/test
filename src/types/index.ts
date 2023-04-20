export type Category = {
  id: number;
  name: string;
  image: string;
  creationAt: string;
  updatedAt: string;
};

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: string;
  updatedAt: string;
  category: Category;
};

export enum Order {
  asc = 'asc',
  desc = 'desc',
}

export type Sort<T> = (data: T[], field: keyof T, direction: Order) => T[];
