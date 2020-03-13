import { graphql } from 'gatsby';
import React, { FC } from 'react';
import styled from 'styled-components';

import { ContentContainerInformationFragment } from '../../../types/graphql-types';
import * as colors from '../../style/colors';
import Title from '../elements/title';
import ContentBlock from '../contentBlocks/contentBlock';
import Carousel from './carousel';
import FaqContainer from './faqContainer';
import PetitionsContentContainer from './petitionsContentContainer';

export enum ContentContainerAppearance {
  Petitions = 'petitions',
  Carousel = 'carousel',
  FAQContainer = 'faqContainer',
}

interface Props {
  data: ContentContainerInformationFragment;
}

const Container = styled.div<{ backgroundColor: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const TitleContainer = styled.div``;

const ContentContainer: FC<Props> = ({ data }) => {
  if (data.appearance === ContentContainerAppearance.Carousel) {
    return <Carousel data={data} />;
  }

  if (data.appearance === ContentContainerAppearance.FAQContainer) {
    return <FaqContainer data={data} />;
  }

  if (data.appearance === ContentContainerAppearance.Petitions) {
    return <PetitionsContentContainer data={data} />;
  }

  const backgroundColor = data.backgroundColor
    ? colors.contentColors[data.backgroundColor]
    : 'transparent';
  return (
    <Container backgroundColor={backgroundColor}>
      <TitleContainer>
        <Title type="h4" title={data.title!} />
      </TitleContainer>
      {data.contentModules?.map(c => (
        <ContentBlock data={c!} />
      ))}
    </Container>
  );
};

export const query = graphql`
  fragment ContentContainerInformation on ContentfulContentContainer {
    title
    internal {
      type
    }
    appearance
    backgroundColor
    contentModules {
      ...ContentBlockInformation
    }
  }
`;

export default ContentContainer;
