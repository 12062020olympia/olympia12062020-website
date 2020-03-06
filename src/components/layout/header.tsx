import { Link } from 'gatsby-plugin-intl';
import React from 'react';
import styled from 'styled-components';

import * as colors from '../../style/colors';
import {
  contentPadding,
  contentPaddingWeb,
  headerHeight,
  headerHeightWeb,
  maxMobileWidth,
} from '../../style/dimensions';
import Burger from './burger';
import Title from '../elements/title';

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
  z-index: 2;

  @media (min-width: ${maxMobileWidth}) {
    height: ${headerHeightWeb};
    scroll-margin-top: ${headerHeightWeb};
  }
`;

const HeaderContent = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  margin: 0 auto;

  > * {
    margin: 0 ${contentPadding};
  }

  @media (min-width: ${maxMobileWidth}) {
    > * {
      margin: 0 ${contentPaddingWeb};
    }
  }
`;

const Header: React.FC<Props> = ({ isMenuOpen, setIsMenuOpen }) => (
  <StyledHeader>
    <HeaderContent>
      <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
        <Title type="navTitle" title="12062020" />
      </Link>
      <Burger isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </HeaderContent>
  </StyledHeader>
);

export default Header;
