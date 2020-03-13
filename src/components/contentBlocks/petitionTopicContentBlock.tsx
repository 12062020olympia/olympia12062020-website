import React, { FC } from 'react';

import { ContentBlockInformationFragment } from '../../../types/graphql-types';
import PetitionTopic from './petitionTopic';

interface PetitionTopicContentBlockProps {
  data: ContentBlockInformationFragment;
}

const PetitionTopicContentBlock: FC<PetitionTopicContentBlockProps> = ({ data }) => {
  return (
    <PetitionTopic title={data.title || ''} />
  );
};

export default PetitionTopicContentBlock;
