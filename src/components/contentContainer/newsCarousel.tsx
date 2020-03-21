import { graphql } from 'gatsby';
import React, { FC, useMemo } from 'react';
import styled, { css } from 'styled-components';

import { NewsCarouselInformationFragment } from '../../../types/graphql-types';
import Carousel from '../elements/carousel';
import Title from '../elements/title';
import {
  applyMediaQueryMd,
  applyMediaQueryLg,
  contentMargin,
} from '../../style/dimensions';
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

const CarouselTitle = styled(Title)`
  padding: 0 ${contentMargin.sm} 15px;

  ${applyMediaQueryMd(css`
    padding: 0 ${contentMargin.md} 34px;
  `)}

  ${applyMediaQueryLg(css`
    padding: 0 ${contentMargin.lg} 34px;
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
      <CarouselTitle type="h3" title={data.title!} />
      <Carousel
        slides={slides}
        slideMarginRight={slideMarginRight}
        slideWidth={slideWidth}
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
