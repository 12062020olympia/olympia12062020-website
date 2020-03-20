import { graphql } from 'gatsby';
import React, { FC } from 'react';
import styled, { css } from 'styled-components';

import { DefaultContentBlockInformationFragment } from '../../../types/graphql-types';
import * as colors from '../../style/colors';
import { applyMediaQueryMd } from '../../style/dimensions';
import ContentfulRichText from '../contentfulRichText';
import Button, { ButtonType } from '../elements/button';
import Title from '../elements/title';
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

const ContentContainer = styled.div`
  & a {
    color: ${colors.Black};
    font-weight: bold;
  }
`;

const DefaultContentBlock: FC<Props> = ({ data }) => {
  const backgroundColor = data.backgroundColor
    ? colors.contentColors[data.backgroundColor]
    : 'transparent';
  return (
    <Container backgroundColor={backgroundColor}>
      <LayoutRow
        layout={
          (data.titleLayout as ContentBlockLayout) || ContentBlockLayout.Center
        }
      >
        <TitleContainer>
          <Title title={data.title!} type="h3" />
        </TitleContainer>
      </LayoutRow>
      <LayoutRow
        layout={
          (data.contentLayout as ContentBlockLayout) ||
          ContentBlockLayout.Center
        }
      >
        <ContentContainer>
          <ContentfulRichText document={data.richText && data.richText.json} />
          {data?.cfaButtonText && data.cfaButtonLink && (
            <Button
              href={data.cfaButtonLink}
              label={data.cfaButtonText}
              buttonType={data.cfaButtonType as ButtonType | undefined}
            />
          )}
        </ContentContainer>
      </LayoutRow>
    </Container>
  );
};

export const query = graphql`
  fragment DefaultContentBlockInformation on ContentfulContentBlock {
    appearance
    backgroundColor
    cfaButtonLink
    cfaButtonText
    cfaButtonType
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
