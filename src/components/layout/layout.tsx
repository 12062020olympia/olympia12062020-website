import React, { PropsWithChildren, useState } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';

import { MenuInformationFragment } from '../../../types/graphql-types';
import { hasSeenCookieNotice } from '../../cookie';
import {
  applyMediaQueryLg,
  applyMediaQueryMd,
  footerHeight,
  headerHeight,
} from '../../style/dimensions';
import CookieBanner from '../cookies/cookieBanner';
import Footer from './footer';
import Header from './header';
import Menu from './menu';
import { PageProvider } from '../pageContext';

interface Props {
  mainMenu?: MenuInformationFragment;
  footerMenu?: MenuInformationFragment;
  headerMenu?: MenuInformationFragment;
}

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

const Layout: React.FC<PropsWithChildren<Props>> = ({
  children,
  footerMenu,
  headerMenu,
  mainMenu,
}) => {
  return (
    <PageProvider>
      <ThemeProvider theme={{ awesomegrid: awesomegridConf }}>
        <>
          <Header headerMenu={headerMenu} />
          <Menu menu={mainMenu} />
          <Content>{children}</Content>
          <Footer footerMenu={footerMenu} siteMap={mainMenu} />
          <CookieBanner />
        </>
      </ThemeProvider>
    </PageProvider>
  );
};

export default Layout;
