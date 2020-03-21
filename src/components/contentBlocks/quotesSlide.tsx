import { graphql } from 'gatsby';
import Image, { FluidObject } from 'gatsby-image';
import React, { FC } from 'react';
import styled, { css } from 'styled-components';

import { QuoteInformationFragment } from '../../../types/graphql-types';
import { applyMediaQueryMd, ScreenSize } from '../../style/dimensions';
import ContentfulRichText from '../contentfulRichText';
import { CarouselSlide } from '../elements/carousel';
import Flex from '../elements/flex';
import Paragraph from '../elements/paragraph';

interface Props {
  data?: QuoteInformationFragment | null;
}

export const slideWidth: Record<ScreenSize, number> = {
  sm: 310,
  md: 530,
  lg: 530,
};

export const slideMarginRight: Record<ScreenSize, number> = {
  sm: 10,
  md: 24,
  lg: 24,
};

const Slide = styled(CarouselSlide)`
  height: fit-content;
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

const QuoteSlide: FC<Props> = ({ data }) => {
  return (
    <Slide
      backgroundColor={data?.backgroundColor}
      slideMarginRight={slideMarginRight}
      slideWidth={slideWidth}
    >
      <SlideInner>
        <ContentfulRichText document={data?.richText?.json} />
        <Flex flexDirection="row" alignItems="center">
          <AuthorImage fluid={data?.quotePicture?.fluid as FluidObject} />
          <Paragraph type="small">{data?.title!} </Paragraph>
        </Flex>
      </SlideInner>
    </Slide>
  );
};

export const query = graphql`
  fragment QuoteInformation on ContentfulContentBlock {
    backgroundColor
    id
    quotePicture: picture {
      fluid(maxWidth: 71) {
        ...GatsbyContentfulFluid
      }
    }
    richText: content {
      json
    }
    title
  }
`;

export default QuoteSlide;
