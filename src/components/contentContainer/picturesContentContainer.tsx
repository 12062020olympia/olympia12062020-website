import React, { FC } from 'react';
import styled from 'styled-components';

import { ContentContainerInformationFragment } from '../../../types/graphql-types';
import { ContentBlockLayout } from '../contentBlocks/contentBlock';
import LayoutRow from '../contentBlocks/layoutRow';
import PictureContentBlock from '../contentBlocks/pictureContentBlock';
import Title from '../elements/title';

interface Props {
  data: ContentContainerInformationFragment;
}

const Container = styled.div``;
const TitleContainer = styled.div``;
const ModulesContainer = styled.div``;

const PicturesContentContainer: FC<Props> = ({ data }) => {
  return (
    <Container>
      <LayoutRow layout={ContentBlockLayout.Center}>
        <TitleContainer>
          <Title title={data.title!} type="h3" />
        </TitleContainer>
      </LayoutRow>
      <LayoutRow layout={ContentBlockLayout.Center}>
        <ModulesContainer>
          {data.contentModules?.map(cm => (
            <PictureContentBlock
              data={cm!}
              key={cm?.id}
            />
          ))}
        </ModulesContainer>
      </LayoutRow>
    </Container>
  );
};

export default PicturesContentContainer;
