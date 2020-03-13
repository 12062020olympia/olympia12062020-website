import { graphql } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import PageContent from '../components/pageContent';

const Page = ({ data }) => {
  console.log(data.contentfulPage.node_locale);
  const intl = useIntl();
  return (
    <Layout>
      <SEO
        title={data.contentfulPage.title}
        description={data.contentfulPage?.seoDescription ?? undefined}
        lang={intl.locale}
      />
      <PageContent data={data.contentfulPage} />
    </Layout>
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
