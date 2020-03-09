import React, { PropsWithChildren, useState } from 'react';
import styled, {
  createGlobalStyle,
  css,
  ThemeProvider,
} from 'styled-components';

import { fontFaces, fontStyles } from '../../style/fonts';
import Footer from './footer';
import Header from './header';
import Menu from './menu';
import {
  applyMediaQueryLg,
  applyMediaQueryMd,
  footerHeight,
  headerHeight,
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
  min-height: calc(100vh - ${headerHeight.sm} - ${footerHeight.sm});
  margin-top: ${headerHeight.sm};

  ${applyMediaQueryMd(css`
    min-height: calc(100vh - ${headerHeight.md} - ${footerHeight.md});
    margin-top: ${headerHeight.md};
  `)}

  ${applyMediaQueryLg(css`
    min-height: calc(100vh - ${headerHeight.lg} - ${footerHeight.lg});
    margin-top: ${headerHeight.lg};
  `)}
`;

const awesomegridConf = {
  columns: {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 12,
  },
};

const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <ThemeProvider theme={{ awesomegrid: awesomegridConf }}>
      <>
        <GlobalStyle />
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Content>{children}</Content>
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default Layout;
