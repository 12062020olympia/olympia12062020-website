import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';

import { DefaultContentBlockInformationFragment } from '../../../types/graphql-types';
import { formatDateRange } from '../../formatHelpers';
import ContentfulRichText from '../contentfulRichText';
import PetitionStep from './petitionStep';

export interface PetitionsContentBlockProps {
  data: DefaultContentBlockInformationFragment;
}

const PetitionsContentBlock = ({ data }: PetitionsContentBlockProps) => {
  const intl = useIntl();
  return (
    <PetitionStep
      contentComponent={
        <ContentfulRichText document={data.richText && data.richText.json} />
      }
      subtitle={formatDateRange(intl, data.startDate, data.endDate)}
      title={data.title || ''}
    />
  );
};

export default PetitionsContentBlock;
