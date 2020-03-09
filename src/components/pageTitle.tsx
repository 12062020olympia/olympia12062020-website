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
  sm: '285px',
  md: '60px',
  lg: '407px',
};

const bottom: Record<ScreenSize, string> = {
  sm: '50px',
  md: '50px',
  lg: '70px',
};

const Container = styled(BackgroundImage)`
  min-height: ${titleHeigh.sm};
  overflow: hidden;
  width: 100%;

  ${applyMediaQueryMd(css`
    min-height: ${titleHeigh.md};
  `)}

  ${applyMediaQueryLg(css`
    min-height: ${titleHeigh.lg};
  `)}
`;

const TitleContainer = styled.div`
  background-color: ${colors.Secondary};
  display: inline-block;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  left: ${contentMargin.sm};
  margin-bottom: ${bottom.sm};
  min-height: 165px;
  padding-top: 20px;
  position: relative;
  width: calc(100% - 2 * ${contentMargin.sm});
  top: ${top.sm};

  > * {
    padding: 0 10px;
  }

  ${applyMediaQueryMd(css`
    left: ${contentMargin.md};
    margin-bottom: ${bottom.md}
    min-height: 283px;
    min-width: 545px;
    top: ${top.md};
    width: min-content;
    padding-top: 25px;

    > * {
      padding: 0 20px;
    }
  `)}

  ${applyMediaQueryLg(css`
    left: ${contentMargin.lg};
    margin-bottom: ${bottom.lg}
    min-height: 283px;
    min-width: 545px;
    top: ${top.lg};
    width: min-content;
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
