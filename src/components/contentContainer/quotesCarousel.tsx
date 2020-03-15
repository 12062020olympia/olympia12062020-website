import React, { FC, useState, useMemo } from 'react';
import { useInterval } from 'react-use';
import styled, { css } from 'styled-components';

import { ContentContainerInformationFragment } from '../../../types/graphql-types';
import ContentfulRichText from '../contentfulRichText';
import Title from '../elements/title';
import * as colors from '../../style/colors';
import {
  ScreenSize,
  applyMediaQueryMd,
  applyMediaQueryLg,
  contentMargin,
} from '../../style/dimensions';
import { graphql } from 'gatsby';
import Paragraph from '../elements/paragraph';

interface Props {
  data: ContentContainerInformationFragment;
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

const CarouselWrapper = styled.div`
  display: flex;
  overflow: hidden;
  padding: 0 ${contentMargin.sm};

  ${applyMediaQueryMd(css`
    padding: 0 ${contentMargin.md};
  `)}

  ${applyMediaQueryLg(css`
    padding: 0 ${contentMargin.lg};
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

const SlidesContainer = styled.div<{ currentSlide: number }>`
  display: flex;
  ${({ currentSlide }) =>
    currentSlide &&
    css`
      transform: translateX(
        calc(-${currentSlide * (slideWidth.sm + slideMarginRight.sm)}px)
      );
    `};
  position: relative;
  transition: all 0.5s ease;

  ${applyMediaQueryMd(css<{ currentSlide: number }>`
    ${({ currentSlide }) =>
      currentSlide &&
      css`
        transform: translateX(
          calc(-${currentSlide * (slideWidth.md + slideMarginRight.md)}px)
        );
      `};
  `)}

  ${applyMediaQueryLg(css<{ currentSlide: number }>`
    ${({ currentSlide }) =>
      currentSlide &&
      css`
        transform: translateX(
          calc(-${currentSlide * (slideWidth.lg + slideMarginRight.lg)}px)
        );
      `};
  `)}
`;

const QuotesCarousel: FC<Props> = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = useMemo(
    () =>
      data?.contentModules?.map((c, index) => (
        <CarouselSlide key={index} backgroundColor={c?.backgroundColor}>
          <SlideInner>
            <ContentfulRichText document={c?.richText && c.richText.json} />
            <Paragraph type="small">{c?.title!} </Paragraph>
          </SlideInner>
        </CarouselSlide>
      )) ?? [],
    [data]
  );

  useInterval(() => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  }, 5000);

  return (
    <Container backgroundColor={data.backgroundColor}>
      <CarouselTitle type="h3" title={data.title!} />
      <CarouselWrapper>
        <SlidesContainer currentSlide={currentSlide}>{slides}</SlidesContainer>
      </CarouselWrapper>
    </Container>
  );
};

export const query = graphql`
  fragment QuotesCarouselInformation on ContentfulContentContainer {
    backgroundColor
    contentModules {
      ...ContentBlockInformation
    }
  }
`;

export default QuotesCarousel;
