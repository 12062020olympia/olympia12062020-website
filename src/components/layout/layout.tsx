import React, { PropsWithChildren } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { fontFaces, fontStyles } from '../../style/fonts';
import Header from './header';

const GlobalStyle = createGlobalStyle`
  ${fontFaces}

  body {
    margin: 0;
  }

  html {
    ${fontStyles.normal}
  }
`;

const Content = styled.div`
  margin: 0 auto;
  margin-top: 56px;
  max-width: 960px;
`;

const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Content>
        <main>{children}</main>
        <footer>©{new Date().getFullYear()}</footer>
      </Content>
    </>
  );
};

export default Layout;
