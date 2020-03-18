import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';

import { ContentBlockInformationFragment } from '../../../types/graphql-types';
import { formatDateRange } from '../../formatHelpers';
import ContentfulRichText from '../contentfulRichText';
import { ButtonType } from '../elements/button';
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
  const buttonType = (data.cfaButtonType as ButtonType) || undefined;
  const buttonLabel =
    buttonType === 'primary' && !isOngoing
      ? undefined
      : data.cfaButtonText || undefined;
  const buttonLink =
    buttonType === 'primary' && !isOngoing
      ? undefined
      : data.cfaButtonLink || undefined;
  return (
    <PetitionStep
      buttonLabel={buttonLabel}
      buttonLink={buttonLink}
      buttonType={buttonType}
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
