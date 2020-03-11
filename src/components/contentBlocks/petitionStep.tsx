import React from 'react';
import styled from 'styled-components';

import { fontStyles } from '../../style/fonts';

export interface PetitionStepProps {
  subtitle: string,
  title: string,
}

const Card = styled.div`
  display: flex;
  flex-direction: column;

  :not(:last-child) {
    margin-bottom: 8px;
  }
`;

const CardHeader = styled.div`
  display: flex;
`;

const TitleWithActionsContainer = styled.div`
  display: flex;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
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
