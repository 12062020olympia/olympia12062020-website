import { graphql } from 'gatsby';
import React, { FC } from 'react';

import { ContentContainerInformationFragment } from '../../../types/graphql-types';
import DefaultContentContainer from './defaultContentContainer';
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

  return <DefaultContentContainer data={data} />
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
