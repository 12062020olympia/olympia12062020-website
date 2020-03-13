import _ from 'lodash';
import React, { FC, ReactNode, useMemo } from 'react';
import styled, { css } from 'styled-components';

import * as colors from '../../style/colors';
import { applyMediaQueryMd, contentMaxWidth, largeContentMaxWidth } from '../../style/dimensions';
import { fontSizes, fontSizesDesktop, fontStyles } from '../../style/fonts';

interface PetitionTopicProps {
  contentComponent: ReactNode;
  title: string;
}

const Container = styled.div`
  background-color: ${colors.Grey200};
  padding-bottom: 24px;

  &:last-of-type {
    padding-bottom: 80px;

    ${applyMediaQueryMd(css`
      padding-bottom: 180px;
    `)}
  }
`;

const ContentContainer = styled.div`
  margin: 0 auto;
  max-width: ${largeContentMaxWidth};
  padding-top: ${5 * fontSizes['heroTitle'] * 0.75}px;

  ${applyMediaQueryMd(css`
    padding-left: 20px;
    padding-right: 20px;
    padding-top: ${3 * fontSizesDesktop['heroTitle'] * 0.75}px;
  `)}
`;

const ContentBackgroundContainer = styled.div`
  background-color: ${colors.White};
`;

const Content = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: ${contentMaxWidth};
  padding: 0 20px 16px 20px;

  ${applyMediaQueryMd(css`
    padding: 0 20px 32px 20px;
  `)}
`;

const HeroContainer = styled.div`
  background-color: ${colors.GreenDark};
  height: ${5 * fontSizes['heroTitle'] * 0.75}px;
  overflow: hidden;
  position: absolute;
  width: 100vw;

  ::before, ::after {
    background-color: ${colors.Grey200};
    bottom: 0;
    content: ' ';
    display: block;
    min-width: 20px;
    position: absolute;
    top: 0;
    width: calc(50vw - ${largeContentMaxWidth} / 2);
    z-index: 1;
  }

  ::before {
    left: 0;
  }

  ::after {
    right: 0;
  }

  ${applyMediaQueryMd(css`
    height: ${3 * fontSizesDesktop['heroTitle'] * 0.75}px;
  `)}
`;

const HeroTitleLine = styled.span<{ lineOffset: number }>`
  ${fontStyles.heroTitle}
  display: block;
  height: ${fontSizes['heroTitle'] * 0.75}px;
  margin ${({ lineOffset }) => `0 0 0 -${lineOffset}px`};
  transform: translateY(5px);
  white-space: nowrap;

  ${applyMediaQueryMd(css`
    height: ${fontSizesDesktop['heroTitle'] * 0.75}px;
    transform: translateY(11px);
  `)}
`;

const PetitionTopic: FC<PetitionTopicProps> = ({ contentComponent, title }) => {
  const HEADER_MAX_LINES = 5;
  const repeatedTitle = _.repeat(`${title} `, 10);
  const titleLineOffsets = useMemo(() => _.range(HEADER_MAX_LINES).map(() => _.random(0, 500)), []);
  return (
    <Container>
      <HeroContainer>
        {_.range(HEADER_MAX_LINES).map((i:number) => (
          <HeroTitleLine
            aria-hidden
            lineOffset={titleLineOffsets[i]}
            key={i}
          >
            {repeatedTitle}
          </HeroTitleLine>
        ))}
      </HeroContainer>
      <ContentContainer>
        <ContentBackgroundContainer>
          <Content>
            {contentComponent}
          </Content>
        </ContentBackgroundContainer>
      </ContentContainer>
    </Container>
  );
};

export default PetitionTopic;
