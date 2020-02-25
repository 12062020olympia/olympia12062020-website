import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import * as colors from '../style/colors';
import { fontStyles } from '../style/fonts';

type Props = {};

const StyledHeader = styled.header`
  background-color: ${colors.Secondary};
  position: fixed;
  width: 100%;
`;

const PageTitle = styled.h1`
  ${fontStyles.pageTitle};
`;

const HeaderContent = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 960px;
  padding: 20px 0;
  justify-content: space-between;
`;

const Header: React.FC<Props> = () => (
  <StyledHeader>
    <HeaderContent>
      <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
        <PageTitle style={{ margin: 0 }}>12062020</PageTitle>
      </Link>
      <Link to="/faq">FAQ</Link>
    </HeaderContent>
  </StyledHeader>
);

export default Header;
