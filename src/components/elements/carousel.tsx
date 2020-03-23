import React, { FC, useState, useCallback } from 'react';
import { useInterval } from 'react-use';
import styled, { css } from 'styled-components';

import ArrowLeft from '../../icons/icon-arrow-left.svg';
import ArrowRight from '../../icons/icon-arrow-right.svg';
import * as colors from '../../style/colors';
import {
  ScreenSize,
  applyMediaQueryMd,
  applyMediaQueryLg,
  contentMargin,
} from '../../style/dimensions';
import Flex from './flex';
import IconButton from './iconButton';
import Title from './title';

interface Props {
  slides: Array<JSX.Element>;
  slideMarginRight: Record<ScreenSize, number>;
  slideWidth: Record<ScreenSize, number>;
  title?: string | null;
}

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

const TitleContainer = styled(Flex)`
  padding: 0 ${contentMargin.sm};

  ${applyMediaQueryMd(css`
    padding: 0 ${contentMargin.md};
  `)}

  ${applyMediaQueryLg(css`
    padding: 0 ${contentMargin.lg};
  `)}
`;

interface SlidesContainerProps {
  currentSlide: number;
  slideMarginRight: Record<ScreenSize, number>;
  slideWidth: Record<ScreenSize, number>;
}

const SlidesContainer = styled.div<SlidesContainerProps>`
  display: flex;
  ${({ currentSlide, slideWidth, slideMarginRight }) =>
    css`
      transform: translateX(
        calc(-${currentSlide * (slideWidth.sm + slideMarginRight.sm)}px)
      );
    `};
  position: relative;
  transition: all 0.5s ease;

  ${applyMediaQueryMd(css<SlidesContainerProps>`
    ${({ currentSlide, slideWidth, slideMarginRight }) =>
      css`
        transform: translateX(
          calc(-${currentSlide * (slideWidth.md + slideMarginRight.md)}px)
        );
      `};
  `)}

  ${applyMediaQueryLg(css<SlidesContainerProps>`
    ${({ currentSlide, slideWidth, slideMarginRight }) =>
      css`
        transform: translateX(
          calc(-${currentSlide * (slideWidth.lg + slideMarginRight.lg)}px)
        );
      `};
  `)}
`;

interface CarouselSlideProps {
  backgroundColor?: string | null;
  slideMarginRight: Record<ScreenSize, number>;
  slideWidth: Record<ScreenSize, number>;
}

export const CarouselSlide = styled.div<CarouselSlideProps>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? colors.contentColors[backgroundColor] : colors.White};
  flex: 0 0 auto;
  transition: all 0.5s ease;
  width: ${({ slideWidth }) => slideWidth.sm}px;

  :not(:last-child) {
    margin-right: ${({ slideMarginRight }) => slideMarginRight.sm}px;
  }

  ${applyMediaQueryMd(css<CarouselSlideProps>`
    width: ${({ slideWidth }) => slideWidth.md}px;

    :not(:last-child) {
      margin-right: ${({ slideMarginRight }) => slideMarginRight.md}px;
    }
  `)}

  ${applyMediaQueryLg(css<CarouselSlideProps>`
    width: ${({ slideWidth }) => slideWidth.lg}px;

    :not(:last-child) {
      margin-right: ${({ slideMarginRight }) => slideMarginRight.lg}px;
    }
  `)}
`;

const ArrowButton = styled(IconButton)`
  height: 50px;
  width: 50px;

  svg {
    height: 50px;
    width: 50px;
  }

  ${applyMediaQueryMd(css`
    height: 71px;
    width: 78px;

    svg {
      height: 71px;
      width: 78px;
    }
  `)}
`;

const Carousel: FC<Props> = ({
  slides,
  slideMarginRight,
  slideWidth,
  title,
}) => {
  const [moveAutomatic, setMoveAutomatic] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const moveToNextSlide = useCallback(() => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, slides.length]);

  const moveToPreviousSlide = useCallback(() => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, slides.length]);

  const handleButtonClick = useCallback(
    (moveToNext: boolean) => {
      setMoveAutomatic(false);
      moveToNext ? moveToNextSlide() : moveToPreviousSlide();
    },
    [moveToNextSlide, moveToPreviousSlide]
  );

  useInterval(() => {
    if (moveAutomatic) {
      moveToNextSlide();
    }
  }, 5000);

  return (
    <>
      <TitleContainer alignItems="center" justifyContent="space-between">
        {title && <Title type="h3" title={title} />}
        <div>
          <ArrowButton
            Icon={ArrowLeft}
            onClick={() => handleButtonClick(false)}
          />
          <ArrowButton
            Icon={ArrowRight}
            onClick={() => handleButtonClick(true)}
          />
        </div>
      </TitleContainer>
      <CarouselWrapper>
        <SlidesContainer
          currentSlide={currentSlide}
          slideMarginRight={slideMarginRight}
          slideWidth={slideWidth}
        >
          {slides}
        </SlidesContainer>
      </CarouselWrapper>
    </>
  );
};

export default Carousel;
