import { graphql, useStaticQuery } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import { useIntl } from 'gatsby-plugin-intl';
import React, { FC, useMemo } from 'react';
import { Container, Row, Col } from 'react-awesome-styled-grid';

import { RecentNewsQueryQuery } from '../../../types/graphql-types';
import NewsTeaser from '../elements/newsTeaser';
import styled from 'styled-components';
import { largeContentMaxWidth } from '../../style/dimensions';

interface Props {}

const Grid = styled(Container)`
  margin: 0 auto;
  margin-top: 100px;
  max-width: ${largeContentMaxWidth};
`;

const NewsPostOverview: FC<Props> = () => {
  const intl = useIntl();

  const {
    allContentfulNewsPost: { edges: allNewsPosts },
  } = useStaticQuery<RecentNewsQueryQuery>(query);

  const languageNewsPosts = useMemo(
    () => allNewsPosts.filter(post => post.node.node_locale === intl.locale),
    [allNewsPosts, intl.locale]
  );

  const highlightedPosts = useMemo(() => languageNewsPosts.slice(0, 2), [
    languageNewsPosts,
  ]);
  const remainingPosts = useMemo(() => languageNewsPosts.slice(2), [
    languageNewsPosts,
  ]);

  return (
    <Grid>
      <Row>
        {highlightedPosts.map(({ node: post }) => (
          <Col key={post.id} xs={12} sm={6} md={6}>
            <NewsTeaser
              author={post.author}
              id={post.id}
              publishDate={post.publishDate}
              teaserPicture={post.teaserPicture?.fluid as FluidObject}
              title={post.title}
            />
          </Col>
        ))}
      </Row>
      <Row>
        {remainingPosts.map(({ node: post }) => (
          <Col key={post.id} xs={12} sm={6} md={4}>
            <NewsTeaser
              author={post.author}
              id={post.id}
              publishDate={post.publishDate}
              teaserPicture={post.teaserPicture?.fluid as FluidObject}
              title={post.title}
            />
          </Col>
        ))}
      </Row>
    </Grid>
  );
};

const query = graphql`
  query AllNewsQuery {
    allContentfulNewsPost(sort: { fields: publishDate, order: DESC }) {
      edges {
        node {
          author
          id
          node_locale
          teaserPicture {
            fluid(maxWidth: 676) {
              ...GatsbyContentfulFluid
            }
          }
          publishDate
          title
        }
      }
    }
  }
`;

export default NewsPostOverview;
