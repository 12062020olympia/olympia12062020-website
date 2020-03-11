import { graphql } from 'gatsby';
import React, { FC } from 'react';

import { ContentBlockInformationFragment } from '../../../types/graphql-types';
import DefaultContentBlock from './defaultContentBlock';
import ExpandableContentBlock from './expandableContentBlock';
import ExpapandableColorful from './expandableColorfulBlock';

interface Props {
  data: ContentBlockInformationFragment;
}

const ContentBlock: FC<Props> = ({ data }) => {
  if (data.appearance === 'expandable') {
    return <ExpandableContentBlock data={data} />;
  }

  if (data.appearance === 'expandableColorful') {
    return <ExpapandableColorful data={data} />;
  }

  return <DefaultContentBlock data={data} />;
};

export const query = graphql`
  fragment ContentBlockInformation on ContentfulContentBlock {
    ...DefaultContentBlockInformation
    ...ExpandableContentBlockInformation
    ...ExpapandableColorfulInformation
    internal {
      type
    }
    appearance
    cfaButtonLink
    cfaButtonText
  }
`;

export default ContentBlock;
