import React, { FC } from 'react';
import styled from 'styled-components';

import { DefaultContentBlockInformationFragment } from '../../../types/graphql-types';
import { fontStyles } from '../../style/fonts';
import { graphql } from 'gatsby';
import ContentfulRichText from '../contentfulRichText';

interface Props {
  data: DefaultContentBlockInformationFragment;
}

const Container = styled.div`
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.11);
  padding: 48px 0 15px 0;
`;

const Headline = styled.h4`
  ${fontStyles.smallHeadline}
`;

const DefaultContentBlock: FC<Props> = ({ data }) => {
  return (
    <Container>
      <Headline>{data.title}</Headline>
      <ContentfulRichText document={data.richText && data.richText.json} />
    </Container>
  );
};

export const query = graphql`
  fragment DefaultContentBlockInformation on ContentfulContentBlock {
    title
    slug
    appearance
    richText: content {
      json
    }
  }
`;

export default DefaultContentBlock;
