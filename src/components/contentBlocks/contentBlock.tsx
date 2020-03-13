import { graphql } from 'gatsby';
import React, { FC } from 'react';

import { ContentBlockInformationFragment } from '../../../types/graphql-types';
import DefaultContentBlock from './defaultContentBlock';
import ExpandableContentBlock from './expandableContentBlock';
import ExpapandableColorful from './expandableColorfulBlock';
import PetitionTopicContentBlock from './petitionTopicContentBlock';

export enum ContentBlockAppearance {
  Expandable = 'expandable',
  ExpandableColorful = 'expandableColorful',
  PetitionTopic = 'petitionTopic',
}

interface Props {
  data: ContentBlockInformationFragment;
}

const ContentBlock: FC<Props> = ({ data }) => {
  if (data.appearance === ContentBlockAppearance.Expandable) {
    return <ExpandableContentBlock data={data} />;
  }
  if (data.appearance === ContentBlockAppearance.ExpandableColorful) {
    return <ExpapandableColorful data={data} />;
  }
  if (data.appearance === ContentBlockAppearance.PetitionTopic) {
    return <PetitionTopicContentBlock data={data} />;
  }

  return <DefaultContentBlock data={data} />;
};

export const query = graphql`
  fragment ContentBlockInformation on ContentfulContentBlock {
    ...DefaultContentBlockInformation
    ...ExpandableContentBlockInformation
    ...ExpapandableColorfulInformation
    id
    internal {
      type
    }
    appearance
    cfaButtonLink
    cfaButtonText
    cfaButtonType
  }
`;

export default ContentBlock;
