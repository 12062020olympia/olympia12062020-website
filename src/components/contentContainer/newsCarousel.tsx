import React, { FC, useMemo } from 'react';
import styled, { css } from 'styled-components';

import { ContentContainerInformationFragment } from '../../../types/graphql-types';
import ContentfulRichText from '../contentfulRichText';
import Button from '../elements/button';
import Carousel from '../elements/carousel';
import Title from '../elements/title';
import * as colors from '../../style/colors';
import {
  ScreenSize,
  applyMediaQueryMd,
  applyMediaQueryLg,
  contentMargin,
} from '../../style/dimensions';
import Paragraph from '../elements/paragraph';
import { formatDateRange } from '../../formatHelpers';
import { useIntl } from 'gatsby-plugin-intl';

interface Props {
  data: ContentContainerInformationFragment;
}

const slideHeight: Record<ScreenSize, string> = {
  sm: '346px',
  md: '367px',
  lg: '336px',
};

const slideWidth: Record<ScreenSize, number> = {
  sm: 310,
  md: 608,
  lg: 860,
};

const slideMarginRight: Record<ScreenSize, number> = {
  sm: 10,
  md: 24,
  lg: 24,
};

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

const CarouselSlide = styled.div<{
  backgroundColor?: string | null;
}>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? colors.contentColors[backgroundColor] : colors.White};
  flex: 0 0 auto;
  min-height: ${slideHeight.sm};
  transition: all 0.5s ease;
  width: ${slideWidth.sm}px;

  :not(:last-child) {
    margin-right: ${slideMarginRight.sm}px;
  }

  ${applyMediaQueryMd(css`
    min-height: ${slideHeight.md};
    width: ${slideWidth.md}px;

    :not(:last-child) {
      margin-right: ${slideMarginRight.md}px;
    }
  `)}

  ${applyMediaQueryLg(css`
    min-height: ${slideHeight.lg};
    width: ${slideWidth.lg}px;

    :not(:last-child) {
      margin-right: ${slideMarginRight.lg}px;
    }
  `)}
`;

const SlideInner = styled.div`
  margin: 20px;
`;

const SlideDate = styled(Paragraph)`
  text-transform: uppercase;
  margin: 0;
`;

const StyledButtonLink = styled(Button)`
  display: inline-block;
  margin-top: 20px;
`;

const NewsCarousel: FC<Props> = ({ data }) => {
  const intl = useIntl();
  const slides = useMemo(
    () =>
      data?.contentModules?.map((c, index) => (
        <CarouselSlide key={index} backgroundColor={c?.backgroundColor}>
          <SlideInner>
            <SlideDate type="small">
              {formatDateRange(intl, c?.startDate, c?.endDate)}
            </SlideDate>
            <Title type="h3" title={c?.title!} />
            <ContentfulRichText document={c?.richText && c.richText.json} />
            {c?.cfaButtonText && c.cfaButtonLink && (
              <StyledButtonLink
                href={c.cfaButtonLink}
                label={c.cfaButtonText}
              />
            )}
          </SlideInner>
        </CarouselSlide>
      )) ?? [],
    [data, intl]
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

export default NewsCarousel;
