import React from 'react';
import styled from 'styled-components';

import PetitionsContentBlock from '../contentBlocks/petitionsContentBlock';
import { ContentContainerInformationFragment } from '../../../types/graphql-types';
import { fontStyles } from '../../style/fonts';

export interface PetitionsContentContainerProps {
  data: ContentContainerInformationFragment,
}

const ContainerHeadline = styled.h4`
  ${fontStyles.smallHeadline}
`;

const ModulesContainer = styled.div`
  margin: 0 auto;
  max-width: 1080px;
  padding: 0 20px;
`;

const PetitionsContentContainer = ({
  data
}: PetitionsContentContainerProps) => {
  return (
    <>
      <ContainerHeadline>{data.title}</ContainerHeadline>
      <ModulesContainer>
        {data.contentModules?.map(cm => (
          <PetitionsContentBlock data={cm!} />
        ))}
      </ModulesContainer>
    </>
  );
};

export default PetitionsContentContainer;
