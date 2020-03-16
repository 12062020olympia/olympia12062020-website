import React, { FC } from 'react';
import styled, { css } from 'styled-components';

import { ContentContainerInformationFragment } from '../../../types/graphql-types';
import * as colors from '../../style/colors';
import { applyMediaQueryMd, largeContentMaxWidth } from '../../style/dimensions';
import Title from '../elements/title';
import ContentBlock from '../contentBlocks/contentBlock';

interface DefaultContentContainerProps {
  data: ContentContainerInformationFragment;
}

const Container = styled.div<{ backgroundColor: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const TitleContainer = styled.div`
  margin: 0 auto 0 auto;
  max-width: ${largeContentMaxWidth};
  padding: 24px 20px 0 20px;

  ${applyMediaQueryMd(css`
    padding: 48px 20px 0 20px;
  `)}
`;

const DefaultContentContainer: FC<DefaultContentContainerProps> = ({ data }) => {
  const backgroundColor = data.backgroundColor
    ? colors.contentColors[data.backgroundColor]
    : 'transparent';
  return (
    <Container backgroundColor={backgroundColor}>
      <TitleContainer>
        <Title title={data.title || ''} type="h3" />
      </TitleContainer>
      {data.contentModules?.map(c => (
        <ContentBlock key={c?.id} data={c!} />
      ))}
    </Container>
  );
};

export default DefaultContentContainer;
