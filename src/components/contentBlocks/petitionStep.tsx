import React, { ReactNode, useState } from 'react';
import styled, { css } from 'styled-components';

import ExpandIcon from '../../icons/icon-expand.svg';
import * as colors from '../../style/colors';
import { applyMediaQueryMd } from '../../style/dimensions';
import { fontStyles } from '../../style/fonts';
import IconButton from '../elements/iconButton';
import Title from '../elements/title';

export interface PetitionStepProps {
  contentComponent: ReactNode;
  isHighlighted?: boolean;
  subtitle: string;
  title: string;
}

const CardLine = styled.div`
  border-left: 4px dotted #ffffff;
  bottom: 0;
  left: 2px;
  position: absolute;
  top: 0;
`;

const OuterContainer = styled.div<{ isExpanded: boolean }>`
  position: relative;

  :not(:last-child) {
    padding-bottom: ${({ isExpanded }) => (isExpanded ? '16px' : '8px')};
  }

  :first-child > ${CardLine} {
    top: 50px;
  }

  :last-child > ${CardLine} {
    height: 50px;
  }
`;

const CardDot = styled.div`
  background-color: ${colors.Grey700};
  border-radius: 50% 50%;
  height: 10px;
  left: -1px;
  position: absolute;
  top: 50px;
  width: 10px;
`;

const Card = styled.div`
  border: 1px solid ${colors.Grey200};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  margin-left: 5px;
`;

const CardHeader = styled.div`
  box-sizing: border-box;
  display: flex;
  min-height: 112px;
`;

const CardContent = styled.div`
  background-color: ${colors.Grey200};
  display: flex;
  padding: 16px 20px 24px 20px;

  ${applyMediaQueryMd(css`
    padding: 16px 88px 24px 88px;
  `)}

  & p {
    margin-block-end: 0;
    margin-block-start: 0;
  }
`;

const TitleWithActionsContainer = styled.div`
  display: flex;
  flex: 1;
`;

const TitleContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 15px 0 18px 28px;

  ${applyMediaQueryMd(css`
    padding: 15px 0 19px 88px;
  `)}
`;

const CardExpandContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 34px 0 0 0;
  width: 48px;

  ${applyMediaQueryMd(css`
    padding: 38px 0 0 0;
    width: 88px;
  `)}
`;

const Subtitle = styled.p<{ isHighlighted: boolean }>`
  ${fontStyles.cardSubtitle}
  color: ${({ isHighlighted }) =>
    isHighlighted ? colors.Grey900 : colors.Grey600};
  margin-block-end: 0;
  margin-block-start: 0;
`;

const CardTitle = styled(Title)<{ isHighlighted: boolean }>`
  color: ${({ isHighlighted }) =>
    isHighlighted ? colors.Grey900 : colors.Grey600};
`;

const ExpandButton = styled(IconButton)<{ isExpanded: boolean }>`
  & svg {
    transform: rotate(${({ isExpanded }) => (isExpanded ? '-180deg' : '0deg')});
    transition: transform 0.2s ease-out;
    will-change: transform;
  }
`;

const PetitionStep = ({
  contentComponent,
  isHighlighted = false,
  subtitle,
  title,
}: PetitionStepProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <OuterContainer isExpanded={isExpanded}>
      <CardLine />
      <CardDot />
      <Card>
        <CardHeader>
          <TitleWithActionsContainer>
            <TitleContainer>
              <Subtitle isHighlighted={isHighlighted}>{subtitle}</Subtitle>
              <CardTitle
                type="h4"
                isHighlighted={isHighlighted}
                title={title}
              />
            </TitleContainer>
          </TitleWithActionsContainer>
          <CardExpandContainer>
            <ExpandButton
              Icon={ExpandIcon}
              isExpanded={isExpanded}
              onClick={() => {
                setIsExpanded(!isExpanded);
              }}
            />
          </CardExpandContainer>
        </CardHeader>
        {isExpanded && <CardContent>{contentComponent}</CardContent>}
      </Card>
    </OuterContainer>
  );
};

export default PetitionStep;
