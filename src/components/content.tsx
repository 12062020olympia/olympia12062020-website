import React, { FC } from 'react';
import { graphql } from 'gatsby';

import {
  ContentBlockInformationFragment,
  ContentContainerInformationFragment,
} from '../../types/graphql-types';
import ContentBlock from './contentBlocks/contentBlock';
import ContentContainer from './contentContainer';

interface Props {
  data: ContentBlockInformationFragment | ContentContainerInformationFragment;
}

const Content: FC<Props> = ({ data }) => {
  if (!data.internal) {
    return null;
  }
  return (
    <>
      {data.internal.type === 'ContentfulContentContainer' && (
        <ContentContainer data={data as ContentContainerInformationFragment} />
      )}
      {data.internal.type === 'ContentfulContentBlock' && (
        <ContentBlock data={data as ContentBlockInformationFragment} />
      )}
    </>
  );
};

export const query = graphql`
  fragment ContentInformation on ContentfulPage {
    contentModules {
      ... on ContentfulContentBlock {
        ...ContentBlockInformation
      }
      ... on ContentfulContentContainer {
        ...ContentContainerInformation
      }
    }
  }
`;

export default Content;
