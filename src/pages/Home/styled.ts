import styled from 'styled-components';
import { gapMixin } from '../../styles/mixins';

export const MainContainer = styled.main`
  max-width: 1920px;
  margin: 0 auto;
  padding: 20px;

  ${gapMixin({ attr: 'margin-bottom', gap: '24px' })}
`;

export const Container = styled.div`
  & .infinite-scroll-component {
    padding: 16px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  gap: 8px;

  & label {
    display: flex;
    white-space: nowrap;
  }

  & input,
  & select {
    margin-left: 8px;
    border: 2px gray solid;
    border-radius: 5px;
  }

  ${gapMixin({ attr: 'margin-right', gap: '24px' })}
`;
