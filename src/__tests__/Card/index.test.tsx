import React from 'react';
import { render } from '@testing-library/react';

import Card from '../../pages/Home/components/Card';

const MockCardItem = {
  id: 2,
  title: 'SOPORTA ',
  price: 10000,
  description: 'new description sjsjajshjshshshs',
  images: ['https://i.imgur.com/4KSJS2c.jpeg'],
  creationAt: '2023-04-19T10:32:15.000Z',
  updatedAt: '2023-04-20T06:21:56.000Z',
  category: {
    id: 1,
    name: 'Clothes',
    image: 'https://picsum.photos/640/640?r=6880',
    creationAt: '2023-04-19T10:32:15.000Z',
    updatedAt: '2023-04-19T10:32:15.000Z',
  },
};

describe('<Card />', () => {
  test('should render Card with description', async () => {
    const { findByTestId } = render(
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      <Card card={MockCardItem} onAddToCart={() => {}} />,
    );

    const description = await findByTestId('description');
    expect(description.innerHTML).toBe(MockCardItem.description);
  });
});
