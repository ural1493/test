import { Order, Product, Sort } from '../../types';
import { DESCRIPTION_MAX_LENGTH } from '../../constants';

export const formatDescription = (description: string): string =>
  description.length > DESCRIPTION_MAX_LENGTH
    ? `${description.slice(0, DESCRIPTION_MAX_LENGTH - 3).trim()}...`
    : description;

export const sort: Sort<Product> = (data, field, direction = Order.asc) => {
  return [...data].sort(
    (a, b) =>
      (a[field] < b[field] ? 1 : -1) * (direction === Order.desc ? 1 : -1),
  );
};
