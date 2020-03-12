import { graphql } from 'gatsby';
import React, { FC } from 'react';
import styled from 'styled-components';

import { ContentContainerInformationFragment } from '../../types/graphql-types';
import ContentBlock from './contentBlocks/contentBlock';
import Carousel from './contentContainer/carousel';
import Title from './elements/title';

interface Props {
  data: ContentContainerInformationFragment;
}

const Container = styled.div``;

const ContentContainer: FC<Props> = ({ data }) => {
  if (data.appearance === 'carousel') {
    return <Carousel data={data} />;
  }
  return (
    <>
      <Container>
        <Title type="h4" title={data.title!} />
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
    appearance
    contentModules {
      ...ContentBlockInformation
    }
  }
`;

export default ContentContainer;
