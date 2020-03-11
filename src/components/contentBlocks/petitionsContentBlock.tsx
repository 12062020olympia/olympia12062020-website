import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';

import { DefaultContentBlockInformationFragment } from '../../../types/graphql-types';
import { formatDateRange } from '../../formatHelpers';
import PetitionStep from './petitionStep';

export interface PetitionsContentBlockProps {
  data: DefaultContentBlockInformationFragment;
}

const PetitionsContentBlock = ({ data }: PetitionsContentBlockProps) => {
  const intl = useIntl();
  return (
    <PetitionStep
      subtitle={formatDateRange(intl, data.startDate, data.endDate)}
      title={data.title || ''}
    />
  );
};

export default PetitionsContentBlock;
