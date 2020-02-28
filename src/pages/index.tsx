import React from 'react';

import { HomePageQuery } from '../../types/graphql-types';
import Layout from '../components/layout/layout';
import PageContent from '../components/pageContent';
import SEO from '../components/seo';
import { graphql } from 'gatsby';

interface Props {
  data: HomePageQuery;
}

const IndexPage: React.FC<Props> = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <PageContent data={data.contentfulPage!} />
  </Layout>
);

export const query = graphql`
  query HomePage($locale: String) {
    contentfulPage(slug: { eq: "home" }, node_locale: { eq: $locale }) {
      ...pageInformation
    }
  }
`;

export default IndexPage;
