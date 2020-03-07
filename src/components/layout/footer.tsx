import { graphql, useStaticQuery } from 'gatsby';
import {
  IntlContextConsumer,
  changeLocale,
  useIntl,
  Link,
} from 'gatsby-plugin-intl';
import styled from 'styled-components';
import React, { FC } from 'react';
import { Container, Row, Col } from 'react-awesome-styled-grid';

import { contentMaxWidth } from '../../style/dimensions';
import Title from '../elements/title';
import Flex from '../elements/flex';

interface Props {}

interface MenuQuery {
  pages: Array<{
    slug: string;
    title: string;
  }>;
}

const FooterContainer = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  max-width: 1300px;
`;

const LanguageContainer = styled.div`
  display: flex;

  > * {
    margin-left: 16px;
  }
`;

const LanguageLink = styled.a`
  cursor: pointer;
  text-transform: uppercase;
`;

const Footer: FC<Props> = () => {
  const intl = useIntl();
  const { footerMenu, siteMap } = useStaticQuery<{
    siteMap: MenuQuery;
    footerMenu: MenuQuery;
  }>(query);

  const siteMapPages = siteMap.pages;
  const siteMapHalfLength = Math.ceil(siteMapPages.length / 2);
  const [leftSiteMapPages, rightSiteMapPages] = [
    siteMapPages.slice(0, siteMapHalfLength),
    siteMapPages.slice(siteMapHalfLength, siteMapPages.length),
  ];

  return (
    <FooterContainer>
      <Container>
        <Row>
          <Col xs={12} sm={5} md={5}>
            <Title type="smallHeadline" title="12062020"></Title>
          </Col>
          <Col xs={12} sm={3} md={2}>
            {leftSiteMapPages.map(page => (
              <Link to={`/${page.slug}`}>{page.title}</Link>
            ))}
          </Col>
          <Col xs={12} sm={4} md={5}>
            {rightSiteMapPages.map(page => (
              <Link to={`/${page.slug}`}>{page.title}</Link>
            ))}
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={8} md={10}>
            <LanguageContainer>
              {intl.formatMessage({ id: 'footer.language' })}
              <IntlContextConsumer>
                {({ languages }: { languages: string[] }) =>
                  languages.map(language => (
                    <LanguageLink
                      key={language}
                      onClick={() => changeLocale(language)}
                    >
                      {language}
                    </LanguageLink>
                  ))
                }
              </IntlContextConsumer>
            </LanguageContainer>
          </Col>
          <Col xs={12} sm={4} md={2}>
            Social Media
          </Col>
        </Row>
        <Row>
          <Col>
            <Flex flexDirection="row">
              {footerMenu.pages.map(page => (
                <Link to={`/${page.slug}`}>{page.title}</Link>
              ))}
            </Flex>
          </Col>
        </Row>
      </Container>
    </FooterContainer>
  );
};

const query = graphql`
  query SiteMap($locale: String) {
    siteMap: contentfulMenu(
      slug: { eq: "main" }
      node_locale: { eq: $locale }
    ) {
      pages {
        slug
        title
      }
    }
    footerMenu: contentfulMenu(
      slug: { eq: "footer" }
      node_locale: { eq: $locale }
    ) {
      pages {
        slug
        title
      }
    }
  }
`;

export default Footer;
