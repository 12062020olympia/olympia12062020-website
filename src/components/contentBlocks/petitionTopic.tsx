import _ from 'lodash';
import React, { FC } from 'react';
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

  ::before, ::after {
    background-color: ${colors.Grey200};
    bottom: 0;
    content: ' ';
    display: block;
    min-width: 20px;
    position: absolute;
    top: 0;
    width: calc(50vw - ${largeContentMaxWidth} / 2);
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

const HeroTitle = styled.h4`
  ${fontStyles.heroTitle}
  margin 0 -400px;
  padding: 5px 0 0 0;

  ${applyMediaQueryMd(css`
    padding: 11px 0 0 0;
  `)}
`;

const PetitionTopic: FC<PetitionTopicProps> = ({ title }) => {
  const repeatedTitle = _.repeat(`${title} `, 20);
  return (
    <Container>
      <HeroContainer>
        <HeroTitle>{repeatedTitle}</HeroTitle>
      </HeroContainer>
    </Container>
  );
};

export default PetitionTopic;
