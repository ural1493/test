import React, { FC, memo } from 'react';

import {
  CardContainer,
  Category,
  Container,
  Description,
  Image,
  Price,
  Title,
} from './styled';
import { Product } from '../../../../types';
import { formatDescription } from '../../utils';

type Props = {
  card: Product;
  onAddToCart: (card: Product) => void;
};

const Card: FC<Props> = ({ card, onAddToCart }) => {
  const {
    title,
    description: descriptionText,
    images,
    category: { name: category },
    price,
  } = card;

  const description = formatDescription(descriptionText);

  const handleAddToCart = () => onAddToCart(card);

  return (
    <CardContainer>
      <Image width={150} height={150} src={images[0]} alt={title} />
      <Title>{title}</Title>
      <Container>
        <Category>{`Category: ${category}`}</Category>
        <Price>{`Price: ${price} $`}</Price>
      </Container>
      <Description data-testid="description">{description}</Description>
      <button type="button" onClick={handleAddToCart}>
        add to cart
      </button>
    </CardContainer>
  );
};

export default memo(Card);
