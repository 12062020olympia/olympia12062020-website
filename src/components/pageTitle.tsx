import React, { FC } from 'react';
import BackgroundImage from 'gatsby-background-image';
import styled, { css } from 'styled-components';

import {
  GatsbyContentfulFluidFragment,
  Maybe,
} from '../../types/graphql-types';
import * as colors from '../style/colors';
import { applyMediaQueryMd, contentMargin } from '../style/dimensions';
import Title from './elements/title';

interface Props {
  title?: string | null;
  header?: string | null;
  backgroundPicture?: { fluid: Maybe<GatsbyContentfulFluidFragment> };
}

const bottomPadding = '60px';
const topPadding = '200px';
const pageTitleHeight = '500px';

const bottomPaddingWeb = '60px';
const topPaddingWeb = '120px';
const pageTitleHeightWeb = '760px';

const Container = styled(BackgroundImage)`
  min-height: ${pageTitleHeight};
  overflow: hidden;
  width: 100%;

  ${applyMediaQueryMd(css`
    min-height: ${pageTitleHeightWeb};
  `)}
`;

const TitleContainer = styled.div`
  background-color: ${colors.Secondary};
  bottom: ${bottomPadding};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  left: ${contentMargin.sm};
  min-height: calc(${pageTitleHeight} - ${bottomPadding} - ${topPadding});
  position: relative;
  top: ${topPadding};
  width: calc(100% - 2 * ${contentMargin.sm});

  > * {
    padding: 0 10px;
  }

  ${applyMediaQueryMd(css`
    bottom: ${bottomPaddingWeb};
    left: ${contentMargin.md};
    min-height: calc(
      ${pageTitleHeightWeb} - ${bottomPaddingWeb} - ${topPaddingWeb}
    );
    top: ${topPaddingWeb};
    width: calc(100% - 2 * ${contentMargin.md});
  `)}
`;

const PageTitle: FC<Props> = ({ backgroundPicture, title, header }) => (
  // @ts-ignore
  <Container fluid={backgroundPicture?.fluid ?? undefined}>
    <TitleContainer>
      <Title type="pageTitle" title={title!} />
      <Title type="pageHeader" title={header!} />
    </TitleContainer>
  </Container>
);

export default PageTitle;
