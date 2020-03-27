import { graphql } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import PageContent from '../components/pageContent';
import GlobalStyle from '../style/globalStyle';

const Page = ({ data }) => {
  const intl = useIntl();
  return (
    <>
      <GlobalStyle />

      <Layout
        mainMenu={data.mainMenu}
        footerMenu={data.footerMenu}
        headerMenu={data.headerMenu}
      >
        <SEO
          title={data.contentfulPage.title}
          description={data.contentfulPage?.seoDescription ?? undefined}
          lang={intl.locale}
        />
        <PageContent data={data.contentfulPage} />
      </Layout>
    </>
  );
};

export const query = graphql`
  query PageQuery($slug: String, $locale: String) {
    contentfulPage(slug: { eq: $slug }, node_locale: { eq: $locale }) {
      ...pageInformation
      title
      seoDescription
      node_locale
    }
    mainMenu: contentfulMenu(
      slug: { eq: "main" }
      node_locale: { eq: $locale }
    ) {
      ...MenuInformation
    }
    footerMenu: contentfulMenu(
      slug: { eq: "footer" }
      node_locale: { eq: $locale }
    ) {
      ...MenuInformation
    }
    headerMenu: contentfulMenu(
      slug: { eq: "header-short" }
      node_locale: { eq: $locale }
    ) {
      ...MenuInformation
    }
  }
`;

export default Page;
