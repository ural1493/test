import { createGlobalStyle } from 'styled-components';
import 'normalize.css/normalize.css';

interface ITheme {
  theme: {
    dark: string;
  };
}

export default createGlobalStyle<ITheme>`
  * {
    box-sizing: border-box;
  }
  p {
    margin: 0;
    padding: 0;
  }
`;
