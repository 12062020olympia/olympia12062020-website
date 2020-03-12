import _ from 'lodash';
import React from 'react';
import styled from 'styled-components';

import { getOngoingContentBlocks } from '../contentBlocks/contentBlockHelpers';
import PetitionsContentBlock from '../contentBlocks/petitionsContentBlock';
import { ContentContainerInformationFragment } from '../../../types/graphql-types';
import { fontStyles } from '../../style/fonts';

export interface PetitionsContentContainerProps {
  data: ContentContainerInformationFragment;
}

const Container = styled.div`
  margin: 0 auto;
  max-width: 1080px;
  padding: 0 20px;
`;

const Headline = styled.h4`
  ${fontStyles.smallHeadline}
`;

const ModulesContainer = styled.div``;

const PetitionsContentContainer = ({
  data,
}: PetitionsContentContainerProps) => {
  const ongoingContentBlocks = getOngoingContentBlocks(
    data.contentModules || []
  );
  const ongoingContentBlocksIds = ongoingContentBlocks.map(cb => cb.id);
  return (
    <Container>
      {data.title && <Headline>{data.title}</Headline>}
      <ModulesContainer>
        {data.contentModules?.map(cm => (
          <PetitionsContentBlock
            data={cm!}
            key={cm?.id}
            isOngoing={_.includes(ongoingContentBlocksIds, cm?.id)}
          />
        ))}
      </ModulesContainer>
    </Container>
  );
};

export default PetitionsContentContainer;
