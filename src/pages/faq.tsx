import { graphql } from 'gatsby';
import React, { FC } from 'react';

import { FaqPagesQueryQuery } from '../../types/graphql-types';
import Layout from '../components/layout';
import SEO from '../components/seo';

type Props = {
  data: FaqPagesQueryQuery;
};

const FAQPage: FC<Props> = () => {
  return (
    <Layout>
      <SEO title="FAQ" />

      <h1>Test</h1>
    </Layout>
  );
};

export const query = graphql`
  query FAQPagesQuery {
    allContentfulFaq {
      edges {
        node {
          id
          question
          updatedAt
        }
      }
    }
  }
`;

export default FAQPage;
