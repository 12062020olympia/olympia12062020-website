import { graphql } from 'gatsby';
import React, { FC } from 'react';
import styled from 'styled-components';

import { ContentContainerInformationFragment } from '../../types/graphql-types';
import { fontStyles } from '../style/fonts';
import ContentBlock from './contentBlocks/contentBlock';

interface Props {
  data: ContentContainerInformationFragment;
}

const Container = styled.div``;

const CategoryHeadline = styled.h4`
  ${fontStyles.smallHeadline}
`;

const ContentContainer: FC<Props> = ({ data }) => {
  return (
    <>
      <Container>
        <CategoryHeadline>{data.title}</CategoryHeadline>
      </Container>
      {data.contentModules?.map(c => (
        <ContentBlock data={c!} />
      ))}
    </>
  );
};

export const query = graphql`
  fragment ContentContainerInformation on ContentfulContentContainer {
    title
    internal {
      type
    }
    contentModules {
      ...ContentBlockInformation
    }
  }
`;

export default ContentContainer;
