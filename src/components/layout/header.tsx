import { Link } from 'gatsby-plugin-intl';
import React from 'react';
import styled, { css } from 'styled-components';

import * as colors from '../../style/colors';
import {
  applyMediaQueryMd,
  applyMediaQueryLg,
  contentMargin,
  headerHeight,
} from '../../style/dimensions';
import Burger from './burger';
import Title from '../elements/title';

interface Props {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const StyledHeader = styled.header`
  background-color: ${colors.White};
  height: ${headerHeight.sm};
  left: 0;
  position: fixed;
  scroll-margin-top: ${headerHeight.sm};
  top: 0;
  width: 100%;
  z-index: 2;

  ${applyMediaQueryMd(css`
    height: ${headerHeight.md};
    scroll-margin-top: ${headerHeight.md};
  `)}

  ${applyMediaQueryLg(css`
    height: ${headerHeight.lg};
    scroll-margin-top: ${headerHeight.lg};
  `)}
`;

const HeaderContent = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  margin: 0 auto;

  > * {
    margin: 0 ${contentMargin.sm};
  }

  ${applyMediaQueryMd(css`
    > * {
      margin: 0 ${contentMargin.md};
    }
  `)}

  ${applyMediaQueryLg(css`
    > * {
      margin: 0 ${contentMargin.lg};
    }
  `)}
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
