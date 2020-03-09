import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'gatsby-plugin-intl';
import styled from 'styled-components';
import React, { FC } from 'react';

import * as colors from '../../style/colors';
import { maxMobileWidth } from '../../style/dimensions';
import Flex from '../elements/flex';
import SocialMediaIcon from '../elements/socialMediaIcon';

interface Props {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

interface MenuQuery {
  contentfulMenu: {
    pages: Array<{
      slug: string;
      title: string;
    }>;
  };
}

const Container = styled.nav<{ open: boolean }>`
  align-items: center;
  background-color: ${colors.Pink};
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: flex-start;
  padding-top: 100px;
  position: fixed;
  right: 0;
  top: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  width: 100%;
  z-index: 100;

  @media (min-width: ${maxMobileWidth}) {
    width: 400px;
  }
`;

const SocialMediaIconContainer = styled(Flex)`
  margin-top: 60px;
`;

const Menu: FC<Props> = ({ isMenuOpen }) => {
  const { contentfulMenu: menu } = useStaticQuery<MenuQuery>(query);
  return (
    <Container open={isMenuOpen}>
      {menu.pages.map(page => (
        <Link key={page.slug} to={`/${page.slug}`}>
          {page.title}
        </Link>
      ))}
      <SocialMediaIconContainer dir="row">
        <SocialMediaIcon network="facebook" type="menu" />
        <SocialMediaIcon network="instagram" type="menu" />
        <SocialMediaIcon network="youtube" type="menu" />
      </SocialMediaIconContainer>
    </Container>
  );
};

const query = graphql`
  query Menu($locale: String) {
    contentfulMenu(slug: { eq: "main" }, node_locale: { eq: $locale }) {
      pages {
        slug
        title
      }
    }
  }
`;

export default Menu;
