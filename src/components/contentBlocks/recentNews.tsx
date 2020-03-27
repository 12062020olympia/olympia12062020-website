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
  max-width: ${largeContentMaxWidth};
`;

const RecentNews: FC<Props> = () => {
  const intl = useIntl();

  const {
    allContentfulNewsPost: { edges: allNewsPosts },
  } = useStaticQuery<RecentNewsQueryQuery>(query);

  const languageNewsPosts = useMemo(
    () => allNewsPosts.filter(post => post.node.node_locale === intl.locale),
    [allNewsPosts, intl.locale]
  );
  return (
    <Grid>
      <Row>
        {languageNewsPosts.map(({ node: post }) => (
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
  query RecentNewsQuery {
    allContentfulNewsPost(
      sort: { fields: publishDate, order: DESC }
      limit: 12
    ) {
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

export default RecentNews;
