import { graphql } from 'gatsby';
import React, { FC } from 'react';
import { css } from 'styled-components';

import { ContentBlockInformationFragment } from '../../../types/graphql-types';
import { contentMaxWidth } from '../../style/dimensions';
import DefaultContentBlock from './defaultContentBlock';
import ExpandableContentBlock from './expandableContentBlock';
import ExpapandableColorful from './expandableColorfulBlock';
import PetitionTopicContentBlock from './petitionTopicContentBlock';

export enum ContentBlockAppearance {
  Expandable = 'expandable',
  ExpandableColorful = 'expandableColorful',
  PetitionTopic = 'petitionTopic',
}

export enum ContentBlockLayout {
  Left = 'left',
  Center = 'center',
  Hidden = 'hidden',
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

export function applyContentBlockLayout(layout: ContentBlockLayout) {
  switch (layout) {
    case ContentBlockLayout.Hidden:
      return css`
        display: none;
      `;
    case ContentBlockLayout.Center:
      return css`
        display: flex;
        justify-content: center;

        & > * {
          max-width: ${contentMaxWidth};
        }
      `;
  }
}
