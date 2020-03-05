import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'gatsby-plugin-intl';
import styled from 'styled-components';
import React, { FC } from 'react';

import * as colors from '../../style/colors';
import { maxMobileWidth } from '../../style/dimensions';

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
  position: absolute;
  right: 0;
  top: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  width: 100%;

  @media (min-width: ${maxMobileWidth}) {
    width: 400px;
  }
`;

const Menu: FC<Props> = ({ isMenuOpen }) => {
  const { contentfulMenu: menu } = useStaticQuery<MenuQuery>(query);
  return (
    <Container open={isMenuOpen}>
      {menu.pages.map(page => (
        <Link to={`/${page.slug}`}>{page.title}</Link>
      ))}
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
