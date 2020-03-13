import React, { PropsWithChildren, useState } from 'react';
import styled, {
  createGlobalStyle,
  css,
  ThemeProvider,
} from 'styled-components';

import { families, fontFaces, fontStyles } from '../../style/fonts';
import Footer from './footer';
import Header from './header';
import Menu from './menu';
import {
  applyMediaQueryLg,
  applyMediaQueryMd,
  footerHeight,
  headerHeight,
} from '../../style/dimensions';
import CookieBanner from '../cookies/cookieBanner';
import { hasSeenCookieNotice } from '../../cookie';

const GlobalStyle = createGlobalStyle`
  ${fontFaces}

  body {
    margin: 0;
    overflow-x: hidden;
  }

  html {
    ${fontStyles.normal}
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
  const [displayCookieBanner, setDisplayCookieBanner] = useState(
    !hasSeenCookieNotice()
  );
  return (
    <ThemeProvider theme={{ awesomegrid: awesomegridConf }}>
      <>
        <GlobalStyle />
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Content>{children}</Content>
        <Footer setDisplayCookieBanner={setDisplayCookieBanner} />
        <CookieBanner
          displayCookieBanner={displayCookieBanner}
          setDisplayCookieBanner={setDisplayCookieBanner}
        />
      </>
    </ThemeProvider>
  );
};

export default Layout;
