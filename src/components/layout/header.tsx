import { Link } from 'gatsby-plugin-intl';
import React from 'react';
import styled from 'styled-components';

import * as colors from '../../style/colors';
import {
  headerHeight,
  contentMaxWidth,
  contentPadding,
} from '../../style/dimensions';
import { fontStyles } from '../../style/fonts';
import Burger from './burger';

interface Props {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const StyledHeader = styled.header`
  background-color: ${colors.White};
  height: ${headerHeight};
  left: 0;
  position: fixed;
  scroll-margin-top: ${headerHeight};
  top: 0;
  width: 100%;
`;

const PageTitle = styled.h1`
  ${fontStyles.pageTitle}
`;

const HeaderContent = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${contentMaxWidth};

  > * {
    margin: 0 ${contentPadding};
  }
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
