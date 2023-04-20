import React, { FC, memo } from 'react';
import { Product } from '../../../../types';
import { Container } from './styled';

type Props = {
  products: Product[];
  totalCost: number;
};

const Cart: FC<Props> = ({ products, totalCost }) => (
  <Container>
    <div>CART:</div>
    <div>{`quantity: ${products.length}`}</div>
    <div>{`total cost: ${totalCost} $`}</div>
  </Container>
);

export default memo(Cart);
