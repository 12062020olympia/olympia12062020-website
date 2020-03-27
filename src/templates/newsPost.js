import { graphql } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import PageTitle from '../components/pageTitle';
import LayoutRow from '../components/contentBlocks/layoutRow';
import { ContentBlockLayout } from '../components/contentBlocks/contentBlock';
import ContentfulRichText from '../components/contentfulRichText';
import GlobalStyle from '../style/globalStyle';
import RecentNews from '../components/contentBlocks/recentNews';

const NewsPost = ({ data }) => {
  const intl = useIntl();
  return (
    <>
      <GlobalStyle />

      <Layout
        mainMenu={data.mainMenu}
        footerMenu={data.footerMenu}
        headerMenu={data.headerMenu}
      >
        <SEO title={data.contentfulNewsPost.title} lang={intl.locale} />
        <PageTitle
          title={`${intl.formatDate(data.contentfulNewsPost.publishDate)} · ${
            data.contentfulNewsPost.author
          }`}
          header={data.contentfulNewsPost.title}
          backgroundPicture={data.contentfulNewsPost.headerPicture}
        />
        <LayoutRow layout={ContentBlockLayout.Center}>
          <ContentfulRichText document={data.contentfulNewsPost.content.json} />
        </LayoutRow>
        <RecentNews />
      </Layout>
    </>
  );
};

export const query = graphql`
  query NewsPostQuery($id: String, $locale: String) {
    contentfulNewsPost(id: { eq: $id }, node_locale: { eq: $locale }) {
      author
      id
      title
      publishDate
      content {
        json
      }
      headerPicture {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
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

export default NewsPost;
