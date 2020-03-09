import { graphql } from 'gatsby';
import React, { FC } from 'react';
import styled, { css } from 'styled-components';

import { DefaultContentBlockInformationFragment } from '../../../types/graphql-types';
import * as colors from '../../style/colors';
import ContentfulRichText from '../contentfulRichText';
import Title from '../elements/title';
import {
  contentMargin,
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
  margin-top: 40px;

  ${applyMediaQueryMd(css`
    padding: 20px ${contentMargin.md};
  `)}

  ${applyMediaQueryLg(css`
    padding: 20px ${contentMargin.lg};
  `)}
`;

const DefaultContentBlock: FC<Props> = ({ data }) => {
  return (
    <Container backgroundColor={data.backgroundColor}>
      <Title title={data.title!} type="headline" />
      <ContentfulRichText document={data.richText && data.richText.json} />
    </Container>
  );
};

export const query = graphql`
  fragment DefaultContentBlockInformation on ContentfulContentBlock {
    title
    slug
    appearance
    backgroundColor
    richText: content {
      json
    }
  }
`;

export default DefaultContentBlock;
