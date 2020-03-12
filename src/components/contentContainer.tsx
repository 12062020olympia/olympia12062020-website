import { graphql } from 'gatsby';
import React, { FC } from 'react';
import styled from 'styled-components';

import { ContentContainerInformationFragment } from '../../types/graphql-types';
import { fontStyles } from '../style/fonts';
import ContentBlock from './contentBlocks/contentBlock';
import Carousel from './contentContainer/carousel';
import PetitionsContentContainer from './contentContainer/petitionsContentContainer';

export enum ContentContainerAppearance {
  Petitions = 'petitions',
  Carousel = 'carousel',
}

interface Props {
  data: ContentContainerInformationFragment;
}

const Container = styled.div``;

const CategoryHeadline = styled.h4`
  ${fontStyles.smallHeadline}
`;

const ContentContainer: FC<Props> = ({ data }) => {
  if (data.appearance === ContentContainerAppearance.Petitions) {
    return <PetitionsContentContainer data={data} />;
  }

  if (data.appearance === ContentContainerAppearance.Carousel) {
    return <Carousel data={data} />;
  }

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
    appearance
    contentModules {
      ...ContentBlockInformation
    }
  }
`;

export default ContentContainer;
