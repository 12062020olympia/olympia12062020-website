import _ from 'lodash';
import React, { FC } from 'react';
import styled, { css } from 'styled-components';

import { getOngoingContentBlocks } from '../contentBlocks/contentBlockHelpers';
import PetitionsContentBlock from '../contentBlocks/petitionsContentBlock';
import { ContentContainerInformationFragment } from '../../../types/graphql-types';
import { applyMediaQueryMd, largeContentMaxWidth } from '../../style/dimensions';
import Title from '../elements/title';

export interface PetitionsContentContainerProps {
  data: ContentContainerInformationFragment;
}

const Container = styled.div`
  margin: 0 auto;
  max-width: ${largeContentMaxWidth};
  padding: 0 20px;
`;

const TitleContainer = styled.div`
  padding: 0 0 24px 0;

  ${applyMediaQueryMd(css`
    padding: 0 0 60px 0;
  `)}
`;

const ModulesContainer = styled.div`
  padding: 0 0 38px 0;

  ${applyMediaQueryMd(css`
    padding: 0 0 80px 0;
  `)}
`;

const PetitionsContentContainer: FC<PetitionsContentContainerProps> = ({ data }) => {
  const ongoingContentBlocks = getOngoingContentBlocks(
    data.contentModules || []
  );
  const ongoingContentBlocksIds = ongoingContentBlocks.map(cb => cb.id);
  return (
    <Container>
      <TitleContainer>
        <Title title={data.title || ''} type="h3" />
      </TitleContainer>
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
