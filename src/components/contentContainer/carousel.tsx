import React, { FC, useState, Fragment, useMemo } from 'react';
import { useInterval } from 'react-use';
import styled, { css } from 'styled-components';

import { ContentContainerInformationFragment } from '../../../types/graphql-types';
import ContentfulRichText from '../contentfulRichText';
import ButtonLink from '../elements/buttonLink';
import Title from '../elements/title';
import ArrowLeft from '../../icons/icon-arrow-left.svg';
import ArrowRight from '../../icons/icon-arrow-right.svg';
import * as colors from '../../style/colors';
import {
  ScreenSize,
  applyMediaQueryMd,
  applyMediaQueryLg,
  contentMargin,
  contentMaxWidth,
} from '../../style/dimensions';

interface Props {
  data: ContentContainerInformationFragment;
}

const carouselHeight: Record<ScreenSize, string> = {
  sm: '335px',
  md: '380px',
  lg: '380px',
};

const paddingSides: Record<ScreenSize, string> = {
  sm: contentMargin.sm,
  md: '150px',
  lg: '180px',
};

const CarouselWrapper = styled.div`
  display: flex;
  height: calc(${carouselHeight.sm} + 90px);
  overflow: hidden;

  ${applyMediaQueryMd(css`
    height: calc(${carouselHeight.md} + 50px);
  `)}

  ${applyMediaQueryLg(css`
    height: calc(${carouselHeight.lg} + 50px);
  `)}
`;

const CarouselSlide = styled.div<{
  active?: boolean;
  backgroundColor?: string | null;
}>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? colors.contentColors[backgroundColor] : colors.White};
  flex: 0 0 auto;
  height: 100%;
  padding-top: 90px;
  padding-left: ${paddingSides.sm};
  padding-right: ${paddingSides.sm};
  opacity: ${({ active }) => (active ? 1 : 0)};
  transition: all 0.5s ease;
  width: calc(100vw - 2 * ${paddingSides.sm});

  > * {
    max-width: ${contentMaxWidth};
  }

  ${applyMediaQueryMd(css`
    padding-top: 50px;
    padding-left: ${paddingSides.md};
    padding-right: ${paddingSides.md};
    width: calc(100vw - 2 * ${paddingSides.md});
  `)}

  ${applyMediaQueryLg(css`
    padding-left: ${paddingSides.lg};
    padding-right: ${paddingSides.lg};
    width: calc(100vw - 2 * ${paddingSides.lg});
  `)}
`;

const SlidesContainer = styled.div<{ currentSlide: number }>`
  display: flex;
  ${({ currentSlide }) =>
    currentSlide &&
    css`
      transform: translateX(-${currentSlide * 100}vw);
    `};
  position: relative;
  transition: all 0.5s ease;
`;

const ArrowButton = styled.button<{ isLeft?: boolean }>`
  background-color: transparent;
  border: none;
  position: absolute;
  left: ${({ isLeft }) => (isLeft ? contentMargin.sm : 'unset')};
  margin-top: 10px;
  z-index: 1;
  right: ${({ isLeft }) => (!isLeft ? contentMargin.sm : 'unset')};

  :focus {
    outline: none;
  }

  ${applyMediaQueryMd(css`
    margin-top: calc(${carouselHeight.md} / 2 - 35px);
  `)}

  ${applyMediaQueryLg(css`
    margin-top: calc(${carouselHeight.lg} / 2 - 35px);
  `)}
`;

const Carousel: FC<Props> = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = useMemo(
    () =>
      data?.contentModules?.map((c, index) => (
        <CarouselSlide
          active={currentSlide === index}
          key={index}
          backgroundColor={c?.backgroundColor}
        >
          <Title type="pageTitle" title={data.title!} />
          <Title type="headline" title={c?.title!} />
          <ContentfulRichText document={c?.richText && c.richText.json} />
          {c?.cfaButtonText && c.cfaButtonLink && (
            <ButtonLink href={c.cfaButtonLink} label={c.cfaButtonText} />
          )}
        </CarouselSlide>
      )) ?? [],
    [currentSlide, data]
  );

  useInterval(() => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  }, 5000);

  return (
    <Fragment>
      <CarouselWrapper>
        <ArrowButton
          onClick={() => {
            setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
          }}
          isLeft
        >
          <ArrowLeft />
        </ArrowButton>
        <ArrowButton
          onClick={() => {
            setCurrentSlide((currentSlide + 1) % slides.length);
          }}
        >
          <ArrowRight />
        </ArrowButton>
        <SlidesContainer currentSlide={currentSlide}>{slides}</SlidesContainer>
      </CarouselWrapper>
    </Fragment>
  );
};

export default Carousel;
