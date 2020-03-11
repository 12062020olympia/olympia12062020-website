import React from 'react';
import styled, { css } from 'styled-components';

import * as colors from '../../style/colors';
import { applyMediaQueryMd } from '../../style/dimensions';
import { fontStyles } from '../../style/fonts';

export interface PetitionStepProps {
  subtitle: string,
  title: string,
}

const Card = styled.div`
  border: 1px solid ${colors.Grey200};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  margin-left: 5px;

  :not(:last-child) {
    margin-bottom: 8px;
  }
`;

const CardHeader = styled.div`
  box-sizing: border-box;
  display: flex;
  min-height: 112px;
`;

const TitleWithActionsContainer = styled.div`
  display: flex;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 0 18px 28px;

  ${applyMediaQueryMd(css`
    padding: 15px 0 19px 88px;
  `)}
`;

const Subtitle = styled.p`
  ${fontStyles.cardSubtitle}
  color: ${colors.Grey600};
  margin-block-end: 0;
  margin-block-start: 0;
`;

const Title = styled.h5`
  ${fontStyles.cardTitle}
  color: ${colors.Grey600};
  margin-block-end: 0;
  margin-block-start: 0;
`;

const PetitionStep = ({
  subtitle,
  title,
}: PetitionStepProps) => {
  return (
    <Card>
      <CardHeader>
        <TitleWithActionsContainer>
          <TitleContainer>
            <Subtitle>{subtitle}</Subtitle>
            <Title>{title}</Title>
          </TitleContainer>
        </TitleWithActionsContainer>
      </CardHeader>
    </Card>
  )
}

export default PetitionStep;
