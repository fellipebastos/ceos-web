import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    color: ${(p) => p.theme.color.grayDark};
    font-size: ${(p) => p.theme.font.size.normal};
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: ${(p) => p.theme.font.weight.bold};
  }

  button {
    cursor: pointer;
  }
`;
