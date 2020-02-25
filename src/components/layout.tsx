/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { PropsWithChildren } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from './header';
import './layout.css';

const Content = styled.div`
  margin: 0 auto;
  margin-top: 56px;
  max-width: 960px;
`;

const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <Header />
      <Content>
        <main>{children}</main>
        <footer>©{new Date().getFullYear()}</footer>
      </Content>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
