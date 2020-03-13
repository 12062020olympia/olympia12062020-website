import _ from 'lodash';
import React, { FC, useMemo } from 'react';
import styled, { css } from 'styled-components';

import * as colors from '../../style/colors';
import { applyMediaQueryMd, largeContentMaxWidth } from '../../style/dimensions';
import { fontSizes, fontSizesDesktop, fontStyles } from '../../style/fonts';

interface PetitionTopicProps {
  title: string;
}

const Container = styled.div``;

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

const HeroTitleLine = styled.span<{ offset: number }>`
  ${fontStyles.heroTitle}
  display: block;
  height: ${fontSizes['heroTitle'] * 0.75}px;
  margin ${({ offset }) => `0 0 0 -${offset}px`};
  transform: translateY(5px);
  white-space: nowrap;

  ${applyMediaQueryMd(css`
    height: ${fontSizesDesktop['heroTitle'] * 0.75}px;
    transform: translateY(11px);
  `)}
`;

const PetitionTopic: FC<PetitionTopicProps> = ({ title }) => {
  const HEADER_MAX_LINES = 5;
  const repeatedTitle = _.repeat(`${title} `, 10);
  const titleLineOffsets = useMemo(() => _.range(HEADER_MAX_LINES).map(() => _.random(0, 500)), []);
  return (
    <Container>
      <HeroContainer>
        {_.range(HEADER_MAX_LINES).map((i:number) => (
          <HeroTitleLine
            aria-hidden
            offset={titleLineOffsets[i]}
            key={i}
          >
            {repeatedTitle}
          </HeroTitleLine>
        ))}
      </HeroContainer>
    </Container>
  );
};

export default PetitionTopic;