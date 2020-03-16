import { graphql } from 'gatsby';
import React, { FC } from 'react';
import styled, { css } from 'styled-components';

import { DefaultContentBlockInformationFragment } from '../../../types/graphql-types';
import * as colors from '../../style/colors';
import ContentfulRichText from '../contentfulRichText';
import Title from '../elements/title';
import { applyMediaQueryMd } from '../../style/dimensions';
import { ContentBlockLayout } from './contentBlock';
import LayoutRow from './layoutRow';

interface Props {
  data: DefaultContentBlockInformationFragment;
}

const Container = styled.div<{ backgroundColor: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 20px 0;

  ${applyMediaQueryMd(css`
    padding: 40px 0;
  `)}
`;

const TitleContainer = styled.div`
  padding: 8px 0 0 0;

  ${applyMediaQueryMd(css`
    padding: 20px 0 8px 0;
  `)}
`;

const DefaultContentBlock: FC<Props> = ({ data }) => {
  const backgroundColor = data.backgroundColor
    ? colors.contentColors[data.backgroundColor]
    : 'transparent';
  return (
    <Container backgroundColor={backgroundColor}>
      <LayoutRow layout={(data.titleLayout as ContentBlockLayout) || ContentBlockLayout.Center}>
        <TitleContainer>
          <Title title={data.title!} type="h3" />
        </TitleContainer>
      </LayoutRow>
      <LayoutRow layout={(data.contentLayout as ContentBlockLayout) || ContentBlockLayout.Center}>
        <ContentfulRichText document={data.richText && data.richText.json} />
      </LayoutRow>
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
