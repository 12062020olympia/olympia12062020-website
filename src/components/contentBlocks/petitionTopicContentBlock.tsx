import React, { FC } from 'react';

import { ContentBlockInformationFragment } from '../../../types/graphql-types';
import ContentfulRichText from '../contentfulRichText';
import PetitionTopic from './petitionTopic';

interface PetitionTopicContentBlockProps {
  data: ContentBlockInformationFragment;
}

const PetitionTopicContentBlock: FC<PetitionTopicContentBlockProps> = ({ data }) => {
  return (
    <PetitionTopic
      contentComponent={
        <ContentfulRichText document={data.richText && data.richText.json} />
      }
      title={data.title || ''}
    />
  );
};

export default PetitionTopicContentBlock;
