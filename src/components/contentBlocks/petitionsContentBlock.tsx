import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';

import { ContentBlockInformationFragment } from '../../../types/graphql-types';
import { formatDateRange } from '../../formatHelpers';
import ContentfulRichText from '../contentfulRichText';
import { ButtonType } from '../elements/buttonLink';
import PetitionStep from './petitionStep';

export interface PetitionsContentBlockProps {
  data: ContentBlockInformationFragment;
  isOngoing: boolean;
}

const PetitionsContentBlock = ({
  data,
  isOngoing,
}: PetitionsContentBlockProps) => {
  const intl = useIntl();
  return (
    <PetitionStep
      buttonLabel={data.cfaButtonText || undefined}
      buttonLink={data.cfaButtonLink || undefined}
      buttonType={(data.cfaButtonType as ButtonType) || undefined}
      contentComponent={
        <ContentfulRichText document={data.richText && data.richText.json} />
      }
      isHighlighted={isOngoing}
      isExpanded={isOngoing}
      subtitle={formatDateRange(intl, data.startDate, data.endDate)}
      title={data.title || ''}
    />
  );
};

export default PetitionsContentBlock;
