import React, { FC } from 'react';
import styled, { css } from 'styled-components';

import { ContentContainerInformationFragment } from '../../../types/graphql-types';
import * as colors from '../../style/colors';
import {
  contentMaxWidth,
  contentMargin,
  applyMediaQueryMd,
} from '../../style/dimensions';
import ContentBlock from '../contentBlocks/contentBlock';
import Title from '../elements/title';

interface Props {
  data: ContentContainerInformationFragment;
}

const Container = styled.div`
  margin-bottom: 60px;

  :first-child {
    margin-top: 40px;
  }

  > * {
    margin: 0 auto;
  }

  ${applyMediaQueryMd(css`
    :first-child {
      margin-top: 100px;
    }
  `)}
`;

const FaqTitle = styled(Title)`
  color: ${colors.Grey600};
  max-width: calc(${contentMaxWidth} + 160px);
  padding: 0 ${contentMargin.sm};
`;

const FaqContainer: FC<Props> = ({ data }) => {
  return (
    <Container>
      <FaqTitle type="h5" title={data.title!} />
      {data.contentModules?.map((c, i) => (
        <ContentBlock key={c?.id ?? i} data={c!} />
      ))}
    </Container>
  );
};

export default FaqContainer;
