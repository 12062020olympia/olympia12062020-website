import { Link } from 'gatsby-plugin-intl';
import React from 'react';
import styled from 'styled-components';

import * as colors from '../../style/colors';
import { fontStyles } from '../../style/fonts';
import Burger from './burger';

interface Props {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const StyledHeader = styled.header`
  background-color: ${colors.White};
  display: flex;
  height: 56px;
  flex-direction: column;
  justify-content: center;
  left: 0;
  position: fixed;
  scroll-margin-top: 56px;
  top: 0;
  width: 100%;
`;

const PageTitle = styled.h1`
  ${fontStyles.pageTitle}
`;

const HeaderContent = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 0 20px;
  width: 90%;
`;

const Header: React.FC<Props> = ({ isMenuOpen, setIsMenuOpen }) => (
  <StyledHeader>
    <HeaderContent>
      <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
        <PageTitle style={{ margin: 0 }}>12062020</PageTitle>
      </Link>
      <Burger isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </HeaderContent>
  </StyledHeader>
);

export default Header;
