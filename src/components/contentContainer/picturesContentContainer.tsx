import React, { FC } from 'react';
import styled, { css } from 'styled-components';

import {
  ContentContainerInformationFragment,
  ContentBlockInformationFragment,
} from '../../../types/graphql-types';
import { applyMediaQueryMd } from '../../style/dimensions';
import { ContentBlockLayout } from '../contentBlocks/contentBlock';
import LayoutRow from '../contentBlocks/layoutRow';
import PictureContentBlock from '../contentBlocks/pictureContentBlock';
import Title from '../elements/title';

interface Props {
  data: ContentContainerInformationFragment;
}

const Container = styled.div``;

const TitleContainer = styled.div`
  padding: 0 0 16px 0;

  ${applyMediaQueryMd(css`
    padding: 8px 0 40px 0;
  `)}
`;

const ModulesContainer = styled.div``;

const ModulesInnerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${applyMediaQueryMd(css`
    display: flex;
    justify-content: flex-start;
  `)}
`;

const PicturesContentContainer: FC<Props> = ({ data }) => {
  return (
    <Container>
      <LayoutRow layout={ContentBlockLayout.Center}>
        <TitleContainer>
          <Title title={data.title!} type="h4" />
        </TitleContainer>
      </LayoutRow>
      <LayoutRow layout={ContentBlockLayout.Center}>
        <ModulesContainer>
          <ModulesInnerContainer>
            {data.contentModules?.map(cm => (
              <PictureContentBlock
                data={cm! as ContentBlockInformationFragment}
                key={cm?.id}
              />
            ))}
          </ModulesInnerContainer>
        </ModulesContainer>
      </LayoutRow>
    </Container>
  );
};

export default PicturesContentContainer;
