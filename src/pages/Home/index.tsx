import React, {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import Card from './components/Card';
import Cart from './components/Cart';
import Api from '../../api';
import { sort } from './utils';
import { Product, Order } from '../../types';
import { OFFSET } from '../../constants';
import { Container, Header, MainContainer, SearchContainer } from './styled';

const Home: FC = () => {
  const [data, setData] = useState<null | Product[]>(null);
  const [dataToShow, setDataToShow] = useState<null | Product[]>(null);
  const [offset, setOffset] = useState<number>(0);
  const [searchValue, setSearchValue] = useState<string>('');
  const [cart, setCart] = useState<Product[]>([]);

  const fetchData = useCallback(async () => {
    try {
      const products = await Api.getProducts(offset);

      setData((prevData) => (prevData ? prevData.concat(products) : products));
      setOffset((currentOffset) => currentOffset + OFFSET);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  }, [offset]);

  useEffect(() => {
    (async () => {
      await fetchData();
    })();
  }, []);

  useEffect(() => {
    if (!data) return;

    const filtered = searchValue
      ? data.filter((item) =>
          item.title.toLowerCase().startsWith(searchValue.toLowerCase()),
        )
      : data;

    setDataToShow(filtered);
  }, [data, searchValue]);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }, []);

  const handleSort = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setData(
      (prevData) =>
        prevData && sort(prevData, 'price', e.target.value as Order),
    );
  }, []);

  const handleAddToCart = useCallback(
    (product: Product) => {
      setCart([...cart, product]);
    },
    [cart],
  );

  const totalCost = useMemo(
    () =>
      cart.reduce((sum, { price }) => {
        sum += price;
        return sum;
      }, 0),
    [cart],
  );

  const fallback = dataToShow?.length ? <h4>Loading...</h4> : <h4>No match</h4>;

  return (
    <MainContainer>
      <Header>
        <SearchContainer>
          <label htmlFor="search">
            <input
              id="search"
              name="search"
              type="text"
              placeholder="search"
              value={searchValue}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="select">
            {`sort by price `}
            <select onChange={handleSort} id="select">
              <option value="desc">desc</option>
              <option value="asc">asc</option>
            </select>
          </label>
        </SearchContainer>
        <Cart products={cart} totalCost={totalCost} />
      </Header>

      <Container>
        {dataToShow && (
          <InfiniteScroll
            dataLength={dataToShow.length}
            next={fetchData}
            hasMore
            loader={fallback}
          >
            {dataToShow &&
              dataToShow.map((item) => (
                <Card key={item.id} card={item} onAddToCart={handleAddToCart} />
              ))}
          </InfiniteScroll>
        )}
      </Container>
    </MainContainer>
  );
};

export default Home;
