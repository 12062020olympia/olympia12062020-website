import { graphql } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';
import React, { FC } from 'react';

import { ImprintPageQuery } from '../../types/graphql-types';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import PageContent from '../components/pageContent';

interface Props {
  data: ImprintPageQuery;
}

const ImprintPage: FC<Props> = ({ data }) => {
  const intl = useIntl();
  return (
    <Layout>
      <SEO
        title={data.contentfulPage?.title!}
        description={data.contentfulPage?.seoDescription ?? undefined}
        lang={intl.locale}
      />
      <PageContent data={data.contentfulPage!} />
    </Layout>
  );
};

export const query = graphql`
  query ImprintPage($locale: String) {
    contentfulPage(slug: { eq: "imprint" }, node_locale: { eq: $locale }) {
      ...pageInformation
      title
      seoDescription
    }
  }
`;

export default ImprintPage;
