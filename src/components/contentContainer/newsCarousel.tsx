import { graphql } from 'gatsby';
import React, { FC, useMemo } from 'react';
import styled, { css } from 'styled-components';

import { NewsCarouselInformationFragment } from '../../../types/graphql-types';
import Carousel from '../elements/carousel';
import { applyMediaQueryMd } from '../../style/dimensions';
import NewsSlide, {
  slideMarginRight,
  slideWidth,
} from '../contentBlocks/newsSlide';

interface Props {
  data: NewsCarouselInformationFragment;
}

const Container = styled.div`
  margin: 70px 0;

  ${applyMediaQueryMd(css`
    margin: 170px 0;
  `)}
`;

const NewsCarousel: FC<Props> = ({ data }) => {
  const slides = useMemo(
    () =>
      data?.contentModules?.map((c, index) => (
        <NewsSlide key={c?.id ?? index} data={c} />
      )) ?? [],
    [data]
  );

  return (
    <Container>
      <Carousel
        slides={slides}
        slideMarginRight={slideMarginRight}
        slideWidth={slideWidth}
        title={data.title}
      />
    </Container>
  );
};

export const query = graphql`
  fragment NewsCarouselInformation on ContentfulContentContainer {
    backgroundColor
    contentModules {
      ... on ContentfulContentBlock {
        ...NewsSlideInformation
      }
    }
    title
  }
`;

export default NewsCarousel;
