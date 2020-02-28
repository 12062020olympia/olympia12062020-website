import React, { PropsWithChildren, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { fontFaces, fontStyles } from '../../style/fonts';
import Footer from './footer';
import Header from './header';
import Menu from './menu';

const GlobalStyle = createGlobalStyle`
  ${fontFaces}

  body {
    margin: 0;
  }

  html {
    ${fontStyles.normal}
  }
`;

const Content = styled.main`
  margin: 0 auto;
  // 100% - header height - footer height
  min-height: calc(100vh - 56px - 100px);
  margin-top: 56px;
  max-width: 960px;
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
