import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import React, { FC } from 'react';
import styled, { css } from 'styled-components';

import { PictureContentBlockInformationFragment } from '../../../types/graphql-types';
import { applyMediaQueryMd } from '../../style/dimensions';
import { fontSizes, fontSizesDesktop } from '../../style/fonts';
import ContentfulRichText from '../contentfulRichText';
import Title from '../elements/title';

interface Props {
  data: PictureContentBlockInformationFragment;
}

const Container = styled.div`
  width: 260px;
  margin: 0 auto 20px auto;
  padding: 0 20px;

  ${applyMediaQueryMd(css`
    width: calc((100% - 200px) / 2);
    margin: 0 100px 28px 0;
    padding: 0;
  `)}
`;

const TitleContainer = styled.div`
  margin: 16px 0 -8px 0;
`;

const ContentContainer = styled.div`
  & p {
    font-size: ${fontSizes.pictureDescription}px;
  }

  ${applyMediaQueryMd(css`
    & p {
      font-size: ${fontSizesDesktop.pictureDescription}px;
    }
  `)}
`;

const PictureContentBlock: FC<Props> = ({ data }) => {
  const fluid = (data as any).picture.fluid;
  return (
    <Container>
      <Image fluid={fluid} />
      <TitleContainer>
        <Title title={data.title!} type="pictureTitle" />
      </TitleContainer>
      <ContentContainer>
        <ContentfulRichText document={data.richText && data.richText.json} />
      </ContentContainer>
    </Container>
  );
};

export const query = graphql`
  fragment PictureContentBlockInformation on ContentfulContentBlock {
    richText: content {
      json
    }
    slug
    title
    pictureW260: picture {
      fluid(maxWidth: 260) {
        ...GatsbyContentfulFluid
      }
    }
  }
`;

export default PictureContentBlock;
