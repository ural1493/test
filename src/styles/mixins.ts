import { css } from 'styled-components';

export const gapMixin = ({ attr, gap }: { attr: string; gap: string }) => css`
  & > *:not(:last-child) {
    ${attr}: ${gap};
  }
`;
