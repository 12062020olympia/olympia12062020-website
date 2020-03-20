import React, { FC } from 'react';

import { ContentBlockInformationFragment } from '../../../types/graphql-types';
import * as colors from '../../style/colors';
import ContentfulRichText from '../contentfulRichText';
import PetitionTopic from './petitionTopic';

interface PetitionTopicContentBlockProps {
  data: ContentBlockInformationFragment;
}

const PetitionTopicContentBlock: FC<PetitionTopicContentBlockProps> = ({
  data,
}) => {
  const titleBackgroundColor = data.backgroundColor
    ? colors.contentColors[data.backgroundColor]
    : undefined;
  return (
    <PetitionTopic
      contentComponent={
        <ContentfulRichText document={data.richText && data.richText.json} />
      }
      title={data.title || ''}
      titleBackgroundColor={titleBackgroundColor}
    />
  );
};

export default PetitionTopicContentBlock;
