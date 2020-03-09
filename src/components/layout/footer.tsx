import { graphql, useStaticQuery } from 'gatsby';
import {
  IntlContextConsumer,
  changeLocale,
  useIntl,
  Link,
} from 'gatsby-plugin-intl';
import React, { FC } from 'react';
import { Container, Row, Col } from 'react-awesome-styled-grid';
import styled, { css } from 'styled-components';

import * as colors from '../../style/colors';
import Title from '../elements/title';
import Flex from '../elements/flex';
import SocialMediaIcon from '../elements/socialMediaIcon';
import {
  contentMargin,
  applyMediaQueryMd,
  applyMediaQueryLg,
} from '../../style/dimensions';

interface Props {
  setDisplayCookieBanner: (display: boolean) => void;
}

interface MenuQuery {
  pages: Array<{
    slug: string;
    title: string;
  }>;
}

const FooterContainer = styled.div`
  margin: 0 auto;
  max-width: 1300px;
  padding: 20px ${contentMargin.md};

  ${applyMediaQueryMd(css`
    padding: 0 ${contentMargin.md};
  `)}

  ${applyMediaQueryLg(css`
    padding: 0 ${contentMargin.lg};
  `)}
`;

const Divider = styled.hr`
  border-style: solid;
  color: ${colors.Grey300};
  margin: 60px 0;
`;

const FooterTitle = styled(Title)`
  margin-bottom: 40px;
`;

const SiteMapLink = styled(Link)`
  color: ${colors.DefaultFontColor};
  font-size: 21px;
  padding-bottom: 20px;
  text-decoration: none;

  :hover {
    color: ${colors.Grey700};
  }
`;

const LanguageDivider = styled.hr`
  border-style: solid;
  color: ${colors.Grey300};
  margin: 55px 0 40px;
`;

const LanguageContainer = styled.div`
  display: flex;
  font-size: 16px;
  margin-bottom: 25px;

  > * {
    margin-left: 16px;
  }
`;

const LanguageLink = styled.a`
  cursor: pointer;
  text-transform: uppercase;
`;

const FooterLink = styled(Link)`
  color: ${colors.Grey600};
  font-size: 14px;
  line-height: 150%;
  text-decoration: none;

  ::after {
    content: ' · ';
    white-space: pre;
  }

  :last-child::after {
    content: '';
  }
`;

const FooterButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${colors.Grey600};
  font-size: 14px;
  line-height: 150%;
  padding: 0;
  text-decoration: none;

  ::after {
    content: ' · ';
    white-space: pre;
  }
`;

const Footer: FC<Props> = ({ setDisplayCookieBanner }) => {
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
          <Col noGutter xs={12}>
            <Divider />
          </Col>
        </Row>
        <Row>
          <Col noGutter xs={12} sm={5} md={5}>
            <FooterTitle type="footerTitle" title="12062020" />
          </Col>
          <Col noGutter xs={12} sm={3} md={2}>
            {leftSiteMapPages.map(page => (
              <SiteMapLink
                key={page.slug}
                to={`/${page.slug !== 'home' ? page.slug : '/'}`}
              >
                {page.title}
              </SiteMapLink>
            ))}
          </Col>
          <Col noGutter xs={12} sm={4} md={5}>
            {rightSiteMapPages.map(page => (
              <SiteMapLink key={page.slug} to={`/${page.slug}`}>
                {page.title}
              </SiteMapLink>
            ))}
          </Col>
        </Row>
        <Row>
          <Col noGutter xs={12}>
            <LanguageDivider />
          </Col>
        </Row>
        <Row>
          <Col noGutter xs={12} sm={8} md={10}>
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
          <Col noGutter xs={12} sm={4} md={2} align={{ sm: 'flex-end' }}>
            <Flex flexDirection="row" style={{ marginBottom: '35px' }}>
              <SocialMediaIcon network="facebook" type="footer" />
              <SocialMediaIcon network="instagram" type="footer" />
              <SocialMediaIcon network="youtube" type="footer" />
            </Flex>
          </Col>
        </Row>
        <Row>
          <Col noGutter>
            <Flex flexDirection="row" style={{ marginBottom: '40px' }}>
              <FooterButton onClick={() => setDisplayCookieBanner(true)}>
                {intl.formatMessage({ id: 'footer.cookieSettings' })}
              </FooterButton>
              {footerMenu.pages.map(page => (
                <FooterLink key={page.slug} to={`/${page.slug}`}>
                  {page.title}
                </FooterLink>
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
