import React, { PropsWithChildren, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { fontFaces, fontStyles } from '../../style/fonts';
import Footer from './footer';
import Header from './header';
import Menu from './menu';
import {
  footerHeight,
  footerHeightWeb,
  headerHeight,
  maxMobileWidth,
} from '../../style/dimensions';

const GlobalStyle = createGlobalStyle`
  ${fontFaces}

  body {
    margin: 0;
    overflow-x: hidden;
  }

  html {
    ${fontStyles.normal}
  }
`;

const Content = styled.main`
  margin: 0 auto;
  min-height: calc(100vh - ${headerHeight} - ${footerHeight});
  margin-top: ${headerHeight};

  @media (min-width: ${maxMobileWidth}) {
    min-height: calc(100vh - ${headerHeight} - ${footerHeightWeb});
  }
`;

const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <GlobalStyle />
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Content>{children}</Content>
      <Footer />
    </>
  );
};

export default Layout;
