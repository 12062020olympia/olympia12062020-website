import { graphql } from 'gatsby';
import React, { FC } from 'react';

import { FaqPageQuery } from '../../types/graphql-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PageTitle from '../components/pageTitle';

type Props = {
  data: FaqPageQuery;
};

const FAQPage: FC<Props> = ({ data }) => {
  const { title, headline, subheader } = data.contentfulPage!;
  return (
    <Layout>
      <SEO title="FAQ" />
      <PageTitle title={title} header={headline} subheader={subheader} />
    </Layout>
  );
};

export const query = graphql`
  query FaqPage {
    contentfulPage(slug: { eq: "faq" }) {
      headline
      title
      subheader
    }
  }
`;

export default FAQPage;
