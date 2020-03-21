import React, { FC, useState } from 'react';
import { useInterval } from 'react-use';
import styled, { css } from 'styled-components';
import {
  ScreenSize,
  applyMediaQueryMd,
  applyMediaQueryLg,
  contentMargin,
} from '../../style/dimensions';

interface Props {
  slides: Array<JSX.Element>;
  slideMarginRight: Record<ScreenSize, number>;
  slideWidth: Record<ScreenSize, number>;
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

const Carousel: FC<Props> = ({ slides, slideMarginRight, slideWidth }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useInterval(() => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  }, 5000);

  return (
    <CarouselWrapper>
      <SlidesContainer
        currentSlide={currentSlide}
        slideMarginRight={slideMarginRight}
        slideWidth={slideWidth}
      >
        {slides}
      </SlidesContainer>
    </CarouselWrapper>
  );
};

export default Carousel;
