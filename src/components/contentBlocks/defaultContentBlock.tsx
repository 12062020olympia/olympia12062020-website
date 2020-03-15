import { graphql } from 'gatsby';
import React, { FC } from 'react';
import styled, { css } from 'styled-components';

import { DefaultContentBlockInformationFragment } from '../../../types/graphql-types';
import * as colors from '../../style/colors';
import ContentfulRichText from '../contentfulRichText';
import Title from '../elements/title';
import {
  contentMargin,
  largeContentMaxWidth,
  applyMediaQueryMd,
  applyMediaQueryLg,
} from '../../style/dimensions';
import { ContentBlockLayout, applyContentBlockLayout } from './contentBlock';

interface Props {
  data: DefaultContentBlockInformationFragment;
}

const Container = styled.div<{ backgroundColor: string | null | undefined }>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? colors.contentColors[backgroundColor] : 'transparent'};
  padding: 20px ${contentMargin.sm} 24px ${contentMargin.sm};
  margin: 20px auto 0 auto;
  max-width: ${largeContentMaxWidth};

  ${applyMediaQueryMd(css`
    padding: 20px ${contentMargin.md} 40px ${contentMargin.md};
  `)}

  ${applyMediaQueryLg(css`
    padding: 20px ${contentMargin.lg} 40px ${contentMargin.lg};
  `)}
`;

const TitleContainer = styled.div<{ layout: ContentBlockLayout }>`
  ${({ layout }) => applyContentBlockLayout(layout)}
`;

const ContentContainer = styled.div<{ layout: ContentBlockLayout }>`
  ${({ layout }) => applyContentBlockLayout(layout)}
`;

const DefaultContentBlock: FC<Props> = ({ data }) => {
  return (
    <Container backgroundColor={data.backgroundColor}>
      <TitleContainer layout={(data.titleLayout as ContentBlockLayout) || ContentBlockLayout.Center}>
        <Title title={data.title!} type="h3" />
      </TitleContainer>
      <ContentContainer layout={(data.contentLayout as ContentBlockLayout) || ContentBlockLayout.Center}>
        <ContentfulRichText document={data.richText && data.richText.json} />
      </ContentContainer>
    </Container>
  );
};

export const query = graphql`
  fragment DefaultContentBlockInformation on ContentfulContentBlock {
    appearance
    backgroundColor
    endDate
    richText: content {
      json
    }
    slug
    startDate
    title
    titleLayout
    contentLayout
  }
`;

export default DefaultContentBlock;
