import styled, { css } from 'styled-components';
import { gapMixin } from '../../../../styles/mixins';

const boldText = css`
  font-size: 16px;
  font-weight: bold;
  white-space: nowrap;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0 250px;
  max-width: 300px;
  text-align: center;
  padding: 20px;
  border: 1px transparent solid;
  border-radius: 10px;
  -webkit-box-shadow: ${({ theme }) => theme.boxShadow};
  -moz-box-shadow: ${({ theme }) => theme.boxShadow};
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: transform 0.2s;

  ${gapMixin({ attr: 'margin-bottom', gap: '8px' })}

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

export const Title = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

export const Description = styled.p`
  display: flex;
  font-size: 14px;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const Category = styled.p`
  ${boldText}
`;

export const Price = styled.span`
  ${boldText}
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
`;
