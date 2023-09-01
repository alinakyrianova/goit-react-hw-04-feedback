import 'modern-normalize';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Helvetica Neue', sans-serif;
    background: #f5f5f5;
    color: #333;
  }

  ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  #root {
    margin-top: 20px;
    background-color: #fff;
    width: 80%;
    margin: 20px auto;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;