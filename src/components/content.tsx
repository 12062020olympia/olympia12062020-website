import React, { FC } from 'react';
import { graphql } from 'gatsby';

import {
  ContentBlockInformationFragment,
  ContentContainerInformationFragment,
  SpecialContentInformationFragment,
} from '../../types/graphql-types';
import ContentBlock from './contentBlocks/contentBlock';
import ContentContainer from './contentContainer';
import SpecialContent from './contentBlocks/specialContent';

interface Props {
  data:
    | ContentBlockInformationFragment
    | ContentContainerInformationFragment
    | SpecialContentInformationFragment;
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
      {data.internal.type === 'ContentfulSpecialContent' && (
        <SpecialContent data={data as SpecialContentInformationFragment} />
      )}
    </>
  );
};

export const query = graphql`
  fragment ContentInformation on ContentfulPage {
    contentModules {
      ... on ContentfulContentBlock {
        id
        ...ContentBlockInformation
      }
      ... on ContentfulContentContainer {
        id
        ...ContentContainerInformation
      }
      ... on ContentfulSpecialContent {
        id
        ...SpecialContentInformation
      }
    }
  }
`;

export default Content;
