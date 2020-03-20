import { graphql } from 'gatsby';
import { Link, useIntl } from 'gatsby-plugin-intl';
import styled, { css } from 'styled-components';
import React, { FC, useContext } from 'react';

import { MenuInformationFragment } from '../../../types/graphql-types';
import CloseIcon from '../../icons/icon-close.svg';
import * as colors from '../../style/colors';
import { applyMediaQueryMd } from '../../style/dimensions';
import Flex from '../elements/flex';
import SocialMediaIcon from '../elements/socialMediaIcon';
import IconButton from '../elements/iconButton';
import PageContext from '../pageContext';

interface Props {
  menu?: MenuInformationFragment;
}

const Container = styled.nav<{ open: boolean }>`
  align-items: start;
  background-color: ${colors.MenuBackground};
  display: flex;
  flex-direction: column;
  height: calc(100vh - 100px);
  justify-content: space-between;
  padding-left: 30px;
  padding-top: 100px;
  position: fixed;
  right: 0;
  top: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  width: calc(100vw - 30px);
  z-index: 100;

  ${applyMediaQueryMd(css`
    height: calc(100vh);
    justify-content: flex-start;
    width: 400px;
  `)}
`;

const MenuLink = styled(Link)`
  color: ${colors.Grey900};
  font-size: 28px;
  text-decoration: none;

  :not(:last-child) {
    padding-bottom: 20px;
  }

  :hover {
    color: ${colors.Grey800};
  }
`;

const CloseButton = styled(IconButton)`
  position: absolute;
  top: 30px;
  right: 30px;
`;

const SocialMediaIconContainer = styled(Flex)`
  margin-bottom: 20px;
  margin-top: 20px;

  ${applyMediaQueryMd(css`
    margin-top: 60px;
  `)}
`;

const Menu: FC<Props> = ({ menu }) => {
  const intl = useIntl();
  const { isMenuOpen, setIsMenuOpen } = useContext(PageContext);
  return (
    <Container open={isMenuOpen} aria-hidden={!isMenuOpen}>
      <CloseButton
        ariaLabel={intl.formatMessage({ id: 'iconButton.closeMenu' })}
        Icon={CloseIcon}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      <Flex flexDirection="column">
        {menu?.pages?.map((page, index) => (
          <MenuLink
            key={page?.slug ?? index}
            to={`/${page?.slug !== 'home' ? page?.slug : ''}`}
          >
            {page?.title}
          </MenuLink>
        ))}
      </Flex>
      <SocialMediaIconContainer dir="row">
        <SocialMediaIcon network="facebook" type="menu" />
        <SocialMediaIcon network="instagram" type="menu" />
        <SocialMediaIcon network="youtube" type="menu" />
      </SocialMediaIconContainer>
    </Container>
  );
};

export const query = graphql`
  fragment MenuInformation on ContentfulMenu {
    pages {
      slug
      title
    }
  }
`;

export default Menu;
