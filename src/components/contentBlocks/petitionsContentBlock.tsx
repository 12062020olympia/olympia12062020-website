import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';

import { DefaultContentBlockInformationFragment } from '../../../types/graphql-types';
import { formatDateRange } from '../../formatHelpers';
import ContentfulRichText from '../contentfulRichText';
import PetitionStep from './petitionStep';

export interface PetitionsContentBlockProps {
  data: DefaultContentBlockInformationFragment;
  isOngoing: boolean;
}

const PetitionsContentBlock = ({ data, isOngoing }: PetitionsContentBlockProps) => {
  const intl = useIntl();
  return (
    <PetitionStep
      contentComponent={<ContentfulRichText document={data.richText && data.richText.json} />}
      isHighlighted={isOngoing}
      isExpanded={isOngoing}
      subtitle={formatDateRange(intl, data.startDate, data.endDate)}
      title={data.title || ''}
    />
  );
};

export default PetitionsContentBlock;
