import React from 'react';
import styled, { css } from 'styled-components';

import { applyMediaQueryMd } from '../../style/dimensions';
import { fontStyles } from '../../style/fonts';

export interface PetitionStepProps {
  subtitle: string,
  title: string,
}

const Card = styled.div`
  border: 1px solid #F5F5F5;
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
  margin: 0;
`;

const Title = styled.h5`
  ${fontStyles.cardTitle}
  margin: 0;
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
