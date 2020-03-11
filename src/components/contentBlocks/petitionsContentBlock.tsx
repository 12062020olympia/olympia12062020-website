import React from 'react';

import { DefaultContentBlockInformationFragment } from '../../../types/graphql-types';
import PetitionStep from './petitionStep';

export interface PetitionsContentBlockProps {
  data: DefaultContentBlockInformationFragment;
}

const PetitionsContentBlock = ({
  data,
}: PetitionsContentBlockProps) => {
  return (
    <PetitionStep
      subtitle="13.03.2020 - 10.04.2020"
      title={data.title || ''}
    />
  );
}

export default PetitionsContentBlock;
