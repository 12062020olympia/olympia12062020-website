import React, { FC } from 'react';
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';

import {
  GatsbyContentfulFluidFragment,
  Maybe,
} from '../../types/graphql-types';
import * as colors from '../style/colors';
import { contentPadding, maxMobileWidth } from '../style/dimensions';
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

  @media (min-width: ${maxMobileWidth}) {
    min-height: ${pageTitleHeightWeb};
  }
`;

const TitleContainer = styled.div`
  background-color: ${colors.Secondary};
  bottom: ${bottomPadding};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  left: ${contentPadding};
  min-height: calc(${pageTitleHeight} - ${bottomPadding} - ${topPadding});
  position: relative;
  top: ${topPadding};
  width: calc(100% - 2 * ${contentPadding});

  > * {
    padding: 0 10px;
  }

  @media (min-width: ${maxMobileWidth}) {
    bottom: ${bottomPaddingWeb};
    min-height: calc(
      ${pageTitleHeightWeb} - ${bottomPaddingWeb} - ${topPaddingWeb}
    );
    top: ${topPaddingWeb};
  }
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
