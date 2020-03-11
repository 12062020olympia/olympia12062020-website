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

const PetitionsContentContainer = ({
  data
}: PetitionsContentContainerProps) => {
  return (
    <>
      <ContainerHeadline>{data.title}</ContainerHeadline>
      {data.contentModules?.map(() => (
        <PetitionsContentBlock />
      ))}
    </>
  );
};

export default PetitionsContentContainer;
