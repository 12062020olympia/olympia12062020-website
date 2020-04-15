import { createGlobalStyle } from 'styled-components';

import { contentMaxWidth, contentMargin } from '../style/dimensions';
import { families, fontStyles } from '../style/fonts';

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    overflow-x: hidden;
  }

  html {
    ${fontStyles.normal}
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button {
    font-family: ${families.default}, ${families.fallback};
  }

  h1 {
    ${fontStyles.h1}
  }

  h2 {
    ${fontStyles.h2}
  }

  h3 {
    ${fontStyles.h3}
  }

  h4 {
    ${fontStyles.h4}
  }

  h5 {
    ${fontStyles.h5}
  }

  p { 
    ${fontStyles.normal}
    word-break: break-word;
  }

  .lightwidget-widget {
    align-items: center;
    display: flex;
    flex-direction: row;
    height: calc(100vw - 2 * ${contentMargin.sm});
    max-height: ${contentMaxWidth};
  }
`;

export default GlobalStyle;
