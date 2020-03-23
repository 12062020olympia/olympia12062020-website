import { graphql } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';
import React, { FC } from 'react';
import styled, { css } from 'styled-components';

import { NewsSlideInformationFragment } from '../../../types/graphql-types';
import {
  applyMediaQueryMd,
  applyMediaQueryLg,
  ScreenSize,
} from '../../style/dimensions';
import ContentfulRichText from '../contentfulRichText';
import Button from '../elements/button';
import { CarouselSlide } from '../elements/carousel';
import Paragraph from '../elements/paragraph';
import Title from '../elements/title';
import { formatDateRange } from '../../formatHelpers';

interface Props {
  data?: NewsSlideInformationFragment | null;
}

const slideHeight: Record<ScreenSize, string> = {
  sm: '346px',
  md: '367px',
  lg: '336px',
};

export const slideWidth: Record<ScreenSize, number> = {
  sm: 310,
  md: 608,
  lg: 860,
};

export const slideMarginRight: Record<ScreenSize, number> = {
  sm: 10,
  md: 24,
  lg: 24,
};

const Slide = styled(CarouselSlide)`
  min-height: ${slideHeight.sm};

  ${applyMediaQueryMd(css`
    min-height: ${slideHeight.md};
  `)}

  ${applyMediaQueryLg(css`
    min-height: ${slideHeight.lg};
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

const NewsSlide: FC<Props> = ({ data }) => {
  const intl = useIntl();

  return (
    <Slide
      backgroundColor={data?.backgroundColor}
      slideMarginRight={slideMarginRight}
      slideWidth={slideWidth}
    >
      <SlideInner>
        <SlideDate type="small">
          {formatDateRange(intl, data?.startDate, data?.endDate)}
        </SlideDate>
        <Title type="h3" title={data?.title!} />
        <ContentfulRichText document={data?.richText?.json} />
        {data?.cfaButtonText && data?.cfaButtonLink && (
          <StyledButtonLink
            href={data?.cfaButtonLink}
            label={data?.cfaButtonText}
          />
        )}
      </SlideInner>
    </Slide>
  );
};

export const query = graphql`
  fragment NewsSlideInformation on ContentfulContentBlock {
    backgroundColor
    cfaButtonLink
    cfaButtonText
    cfaButtonType
    endDate
    id
    richText: content {
      json
    }
    title
    startDate
  }
`;

export default NewsSlide;
