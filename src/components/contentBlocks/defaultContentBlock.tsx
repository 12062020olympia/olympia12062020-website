import { graphql } from 'gatsby';
import React, { FC } from 'react';
import styled, { css } from 'styled-components';

import { DefaultContentBlockInformationFragment } from '../../../types/graphql-types';
import * as colors from '../../style/colors';
import ContentfulRichText from '../contentfulRichText';
import Title from '../elements/title';
import {
  contentMargin,
  contentMaxWidth,
  applyMediaQueryMd,
  applyMediaQueryLg,
} from '../../style/dimensions';

interface Props {
  data: DefaultContentBlockInformationFragment;
}

const Container = styled.div<{ backgroundColor: string | null | undefined }>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? colors.contentColors[backgroundColor] : colors.White};
  padding: 20px ${contentMargin.sm};

  ${applyMediaQueryMd(css`
    padding: 20px ${contentMargin.md};
  `)}

  ${applyMediaQueryLg(css`
    padding: 20px ${contentMargin.lg};
  `)}
`;

const InnerContainer = styled.div`
  margin: 0 auto 20px 0;
  max-width: ${contentMaxWidth};

  ${applyMediaQueryMd(css`
    margin: 48px auto 70px auto;
  `)}
`;

const DefaultContentBlock: FC<Props> = ({ data }) => {
  return (
    <Container backgroundColor={data.backgroundColor}>
      <InnerContainer>
        <Title title={data.title!} type="h3" />
        <ContentfulRichText document={data.richText && data.richText.json} />
      </InnerContainer>
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
  }
`;

export default DefaultContentBlock;
