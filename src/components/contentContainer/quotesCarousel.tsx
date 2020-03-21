import { graphql } from 'gatsby';
import React, { FC, useMemo } from 'react';
import styled, { css } from 'styled-components';

import { QuotesCarouselInformationFragment } from '../../../types/graphql-types';
import * as colors from '../../style/colors';
import {
  applyMediaQueryMd,
  applyMediaQueryLg,
  contentMargin,
} from '../../style/dimensions';
import QuoteSlide, {
  slideMarginRight,
  slideWidth,
} from '../contentBlocks/quotesSlide';
import Title from '../elements/title';
import Carousel from '../elements/carousel';

interface Props {
  data: QuotesCarouselInformationFragment;
}

const Container = styled.div<{
  backgroundColor?: string | null;
}>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? colors.contentColors[backgroundColor] : colors.White};
  padding: 76px 0 40px;

  ${applyMediaQueryMd(css`
    padding: 76px 0 102px;
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

const QuotesCarousel: FC<Props> = ({ data }) => {
  const slides = useMemo(
    () =>
      data.contentModules?.map((c, index) => (
        <QuoteSlide key={c?.id ?? index} data={c} />
      )) ?? [],
    [data]
  );

  return (
    <Container backgroundColor={data.backgroundColor}>
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
  fragment QuotesCarouselInformation on ContentfulContentContainer {
    backgroundColor
    contentModules {
      ... on ContentfulContentBlock {
        ...QuoteInformation
      }
    }
    title
  }
`;

export default QuotesCarousel;
