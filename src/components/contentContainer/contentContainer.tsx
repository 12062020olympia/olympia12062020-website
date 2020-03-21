import { graphql } from 'gatsby';
import React, { FC } from 'react';

import { ContentContainerInformationFragment } from '../../../types/graphql-types';
import DefaultContentContainer from './defaultContentContainer';
import FaqContainer from './faqContainer';
import PetitionsContentContainer from './petitionsContentContainer';
import PicturesContentContainer from './picturesContentContainer';
import NewsCarousel from './newsCarousel';
import QuotesCarousel from './quotesCarousel';

export enum ContentContainerAppearance {
  Carousel = 'carousel',
  FAQContainer = 'faqContainer',
  Petitions = 'petitions',
  Pictures = 'pictures',
  QuotesCarousel = 'quotesCarousel',
}

interface Props {
  data: ContentContainerInformationFragment;
}

const ContentContainer: FC<Props> = ({ data }) => {
  if (data.appearance === ContentContainerAppearance.Carousel) {
    return <NewsCarousel data={data} />;
  }
  if (data.appearance === ContentContainerAppearance.FAQContainer) {
    return <FaqContainer data={data} />;
  }
  if (data.appearance === ContentContainerAppearance.Petitions) {
    return <PetitionsContentContainer data={data} />;
  }
  if (data.appearance === ContentContainerAppearance.Pictures) {
    return <PicturesContentContainer data={data} />;
  }
  if (data.appearance === ContentContainerAppearance.QuotesCarousel) {
    return <QuotesCarousel data={data} />;
  }

  return <DefaultContentContainer data={data} />;
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
      ... on ContentfulContentBlock {
        ...ContentBlockInformation
      }
    }
    ...QuotesCarouselInformation
  }
`;

export default ContentContainer;
