import { OFFSET } from '../constants';

class Api {
  static getProducts = (page = 0) =>
    fetch(
      `https://api.escuelajs.co/api/v1/products?offset=${page}&limit=${OFFSET}`,
    ).then((res) => res.json());
}

export default Api;
