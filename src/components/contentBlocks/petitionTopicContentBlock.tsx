import React, { FC } from 'react';

import { ContentBlockInformationFragment } from '../../../types/graphql-types';

interface PetitionTopicContentBlockProps {
  data: ContentBlockInformationFragment;
}

const PetitionTopicContentBlock: FC<PetitionTopicContentBlockProps> = ({ data }) => {
  return (
    <p>{data.title}</p>
  );
};

export default PetitionTopicContentBlock;
