import React, { FC } from 'react';
import styled from 'styled-components';

import { fontStyles } from '../style/fonts';
import { ContentCopyInformationFragment } from '../../types/graphql-types';
import { graphql } from 'gatsby';
import ContentfulRichText from './contentfulRichText';

interface Props {
  data: ContentCopyInformationFragment;
}

const Container = styled.div`
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.11);
  padding: 48px 0 15px 0;
`;

const Headline = styled.h4`
  ${fontStyles.smallHeadline}
`;

const ContentCopy: FC<Props> = ({ data }) => {
  return (
    <Container>
      <Headline>{data.title}</Headline>
      <ContentfulRichText document={data.content && data.content.json} />
    </Container>
  );
};

export const query = graphql`
  fragment ContentCopyInformation on ContentfulContentCopy {
    id
    internal {
      type
    }
    title
    content {
      json
    }
  }
`;

export default ContentCopy;
