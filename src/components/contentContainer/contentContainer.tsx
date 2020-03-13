import { graphql } from 'gatsby';
import React, { FC } from 'react';
import styled from 'styled-components';

import { ContentContainerInformationFragment } from '../../../types/graphql-types';
import Title from '../elements/title';
import ContentBlock from '../contentBlocks/contentBlock';
import Carousel from './carousel';
import PetitionsContentContainer from './petitionsContentContainer';

export enum ContentContainerAppearance {
  Petitions = 'petitions',
  Carousel = 'carousel',
}

interface Props {
  data: ContentContainerInformationFragment;
}

const Container = styled.div``;

const ContentContainer: FC<Props> = ({ data }) => {
  if (data.appearance === ContentContainerAppearance.Carousel) {
    return <Carousel data={data} />;
  }
  if (data.appearance === ContentContainerAppearance.Petitions) {
    return <PetitionsContentContainer data={data} />;
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
