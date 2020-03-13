import { graphql } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import { createGlobalStyle } from 'styled-components';

import { families, fontStyles } from '../style/fonts';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import PageContent from '../components/pageContent';

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    overflow-x: hidden;
  }

  html {
    ${fontStyles.normal}
  }

  button {
    font-family: ${families.default}, ${families.fallback};
  }

  h1 {
    ${fontStyles.h1}
  }

  h2 {
    ${fontStyles.h2}
  }

  h3 {
    ${fontStyles.h3}
  }

  h4 {
    ${fontStyles.h4}
  }

  h5 {
    ${fontStyles.h5}
  }

  p { 
    ${fontStyles.normal}
    word-break: break-word;
  }
`;

const Page = ({ data }) => {
  const intl = useIntl();
  return (
    <>
      <GlobalStyle />

      <Layout>
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
  }
`;

export default Page;
