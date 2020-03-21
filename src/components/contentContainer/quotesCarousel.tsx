import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import React, { FC, useMemo } from 'react';
import styled, { css } from 'styled-components';

import {
  ContentContainerInformationFragment,
  QuotesCarouselInformationFragment,
} from '../../../types/graphql-types';
import ContentfulRichText from '../contentfulRichText';
import Flex from '../elements/flex';
import Paragraph from '../elements/paragraph';
import Title from '../elements/title';
import * as colors from '../../style/colors';
import {
  ScreenSize,
  applyMediaQueryMd,
  applyMediaQueryLg,
  contentMargin,
} from '../../style/dimensions';
import Carousel from '../elements/carousel';

interface Props {
  data: ContentContainerInformationFragment & QuotesCarouselInformationFragment;
}

const slideWidth: Record<ScreenSize, number> = {
  sm: 310,
  md: 530,
  lg: 530,
};

const slideMarginRight: Record<ScreenSize, number> = {
  sm: 10,
  md: 24,
  lg: 24,
};

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

const CarouselSlide = styled.div<{
  backgroundColor?: string | null;
}>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? colors.contentColors[backgroundColor] : colors.White};
  flex: 0 0 auto;
  transition: all 0.5s ease;
  height: fit-content;
  width: ${slideWidth.sm}px;

  :not(:last-child) {
    margin-right: ${slideMarginRight.sm}px;
  }

  ${applyMediaQueryMd(css`
    width: ${slideWidth.md}px;

    :not(:last-child) {
      margin-right: ${slideMarginRight.md}px;
    }
  `)}

  ${applyMediaQueryLg(css`
    width: ${slideWidth.lg}px;

    :not(:last-child) {
      margin-right: ${slideMarginRight.lg}px;
    }
  `)}
`;

const SlideInner = styled.div`
  margin: 20px;

  ${applyMediaQueryMd(css`
    margin: 30px;
  `)}
`;

const AuthorImage = styled(Image)`
  height: 64px;
  margin-right: 13px;
  min-width: 64px;
  width: 64px;

  ${applyMediaQueryMd(css`
    flex-basis: 71px;
    height: 71px;
    margin-right: 20px;
    min-width: 71px;
    width: 71px;
  `)}
`;

const QuotesCarousel: FC<Props> = ({ data }) => {
  const slides = useMemo(
    () =>
      data?.contentModules?.map((c, index) => (
        <CarouselSlide key={index} backgroundColor={c?.backgroundColor}>
          <SlideInner>
            <ContentfulRichText document={c?.richText && c.richText.json} />
            <Flex flexDirection="row" alignItems="center">
              <AuthorImage fluid={(c as any).picture?.fluid} />
              <Paragraph type="small">{c?.title!} </Paragraph>
            </Flex>
          </SlideInner>
        </CarouselSlide>
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
        ...ContentBlockInformation
        picture {
          fluid(maxWidth: 71) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`;

export default QuotesCarousel;
