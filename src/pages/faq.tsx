import { graphql } from 'gatsby';
import React, { FC } from 'react';

import { FaqPageQuery } from '../../types/graphql-types';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import PageContent from '../components/pageContent';

interface Props {
  data: FaqPageQuery;
}

const FAQPage: FC<Props> = ({ data }) => {
  return (
    <Layout>
      <SEO title="FAQ" />
      <PageContent data={data.contentfulPage!} />
    </Layout>
  );
};

export const query = graphql`
  query FaqPage {
    contentfulPage(slug: { eq: "faq" }) {
      ...pageInformation
    }
  }
`;

export default FAQPage;
