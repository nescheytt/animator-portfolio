import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #ffd7ce;
    font-family: 'Fira Sans', Helvetica, Sans-Serif;
    word-wrap: break-word;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span,
  div {
    font-family: 'Fira Sans', Helvetica, Sans-Serif;
    word-wrap: break-word
  }
`;
 
export default GlobalStyle;