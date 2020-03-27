import _ from 'lodash';
import React, { FC } from 'react';
import styled, { css } from 'styled-components';

import { getOngoingContentBlocks } from '../contentBlocks/contentBlockHelpers';
import PetitionsContentBlock from '../contentBlocks/petitionsContentBlock';
import { ContentBlockLayout } from '../contentBlocks/contentBlock';
import LayoutRow from '../contentBlocks/layoutRow';
import {
  ContentContainerInformationFragment,
  ContentBlockInformationFragment,
} from '../../../types/graphql-types';
import { applyMediaQueryMd } from '../../style/dimensions';
import Title from '../elements/title';

export interface PetitionsContentContainerProps {
  data: ContentContainerInformationFragment;
}

const TitleContainer = styled.div`
  padding: 32px 0;

  ${applyMediaQueryMd(css`
    padding: 60px 0;
  `)}
`;

const ModulesContainer = styled.div`
  padding: 0 0 38px 0;

  ${applyMediaQueryMd(css`
    padding: 0 0 80px 0;
  `)}
`;

const PetitionsContentContainer: FC<PetitionsContentContainerProps> = ({
  data,
}) => {
  const ongoingContentBlocks = getOngoingContentBlocks(
    (data.contentModules as Array<ContentBlockInformationFragment>) || []
  );
  const ongoingContentBlocksIds = ongoingContentBlocks.map(cb => cb.id);
  return (
    <LayoutRow layout={ContentBlockLayout.Left}>
      <TitleContainer>
        <Title title={data.title || ''} type="h3" />
      </TitleContainer>
      <ModulesContainer>
        {data.contentModules?.map(cm => (
          <PetitionsContentBlock
            data={cm! as ContentBlockInformationFragment}
            key={cm?.id}
            isOngoing={_.includes(ongoingContentBlocksIds, cm?.id)}
          />
        ))}
      </ModulesContainer>
    </LayoutRow>
  );
};

export default PetitionsContentContainer;
