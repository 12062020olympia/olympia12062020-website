import { graphql } from 'gatsby';
import React, { FC, useMemo } from 'react';
import styled, { css } from 'styled-components';

import { QuotesCarouselInformationFragment } from '../../../types/graphql-types';
import * as colors from '../../style/colors';
import { applyMediaQueryMd } from '../../style/dimensions';
import QuoteSlide, {
  slideMarginRight,
  slideWidth,
} from '../contentBlocks/quotesSlide';
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
