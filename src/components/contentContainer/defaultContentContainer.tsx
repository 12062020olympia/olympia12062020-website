import React, { FC } from 'react';
import styled, { css } from 'styled-components';

import { ContentContainerInformationFragment } from '../../../types/graphql-types';
import * as colors from '../../style/colors';
import {
  applyMediaQueryMd,
  largeContentMaxWidth,
} from '../../style/dimensions';
import Title from '../elements/title';
import ContentBlock, { ContentBlockLayout } from '../contentBlocks/contentBlock';
import LayoutRow from '../contentBlocks/layoutRow';

interface DefaultContentContainerProps {
  data: ContentContainerInformationFragment;
}

const Container = styled.div<{ backgroundColor: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const TitleContainer = styled.div`
  margin: 0 auto 0 auto;
  max-width: ${largeContentMaxWidth};
  padding: 24px 0 0 0;

  ${applyMediaQueryMd(css`
    padding: 48px 0 0 0;
  `)}
`;

const DefaultContentContainer: FC<DefaultContentContainerProps> = ({
  data,
}) => {
  const backgroundColor = data.backgroundColor
    ? colors.contentColors[data.backgroundColor]
    : 'transparent';
  return (
    <Container backgroundColor={backgroundColor}>
      <LayoutRow layout={ContentBlockLayout.Left}>
        <TitleContainer>
          <Title id={data.slug ?? undefined} title={data.title || ''} type="h3" />
        </TitleContainer>
      </LayoutRow>
      {data.contentModules?.map((c, i) => (
        <ContentBlock key={c?.id ?? i} data={c!} />
      ))}
    </Container>
  );
};

export default DefaultContentContainer;
