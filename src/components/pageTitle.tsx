import React, { FC } from 'react';
import BackgroundImage from 'gatsby-background-image';
import styled, { css } from 'styled-components';

import {
  GatsbyContentfulFluidFragment,
  Maybe,
} from '../../types/graphql-types';
import * as colors from '../style/colors';
import {
  applyMediaQueryMd,
  contentMargin,
  ScreenSize,
  applyMediaQueryLg,
} from '../style/dimensions';
import Title from './elements/title';

interface Props {
  title?: string | null;
  header?: string | null;
  backgroundPicture?: { fluid: Maybe<GatsbyContentfulFluidFragment> };
}

const titleHeigh: Record<ScreenSize, string> = {
  sm: '500px',
  md: '393px',
  lg: '760px',
};

const top: Record<ScreenSize, string> = {
  sm: '50px',
  md: '60px',
  lg: '70px',
};

const bottom: Record<ScreenSize, string> = {
  sm: '50px',
  md: '50px',
  lg: '70px',
};

const Container = styled(BackgroundImage)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: ${titleHeigh.sm};
  overflow-x: visible;
  overflow-y: hidden;
  width: 100%;

  ${applyMediaQueryMd(css`
    min-height: ${titleHeigh.md};
  `)}

  ${applyMediaQueryLg(css`
    min-height: ${titleHeigh.lg};
  `)}
`;

const TitleContainer = styled.div`
  background-color: ${colors.PageTitleBackground};
  margin: ${top.sm} ${contentMargin.sm} ${bottom.sm} ${contentMargin.sm};
  width: calc(100% - 2 * ${contentMargin.sm});

  ${applyMediaQueryMd(css`
    margin: ${top.md} ${contentMargin.md} ${bottom.md} ${contentMargin.md};
    width: min-content;
  `)}

  ${applyMediaQueryLg(css`
    margin: ${top.lg} ${contentMargin.lg} ${bottom.lg} ${contentMargin.lg};
  `)}
`;

const InnerContainer = styled.div`
  flex-direction: column;
  justify-content: flex-end;
  padding-top: 20px;
  padding-bottom: 15px;

  > * {
    padding: 0 10px;
  }

  ${applyMediaQueryMd(css`
    padding-top: 25px;
    padding-bottom: 25px;

    > * {
      padding: 0 30px;
    }
  `)}
`;

const PageTitle: FC<Props> = ({ backgroundPicture, title, header }) => (
  // @ts-ignore
  <Container fluid={backgroundPicture?.fluid ?? undefined}>
    <TitleContainer>
      <InnerContainer>
        <Title type="pageTitle" title={title!} />
        <Title type="h1" title={header!} />
      </InnerContainer>
    </TitleContainer>
  </Container>
);

export default PageTitle;
