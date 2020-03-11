import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import * as colors from '../../style/colors';

interface Props {
  buttonType?: 'primary' | 'secondary';
  onClick?: () => void;
  label: string;
  type?: 'submit' | 'button';
}

const StyledButton = styled.button<{ buttonType: 'primary' | 'secondary' }>`
  background-color: ${colors.ButtonColor};
  border: 1px solid ${colors.ButtonColor};
  font-size: 18px;
  font-weight: bold;
  color: ${colors.DefaultFontColor};
  padding: 9px 13px;

  :hover {
    background-color: ${colors.ButtonHoverColor};
  }

  :focus {
    outline: none;
  }

  :focus:not(:active) {
    border: 2px solid ${colors.ButtonFocusBorderColor};
  }

  ${({ buttonType }) =>
    buttonType === 'secondary' &&
    css`
      background-color: ${colors.ButtonSecondaryColor};
      color: ${colors.BrandPrimary500};

      :hover {
        background-color: ${colors.ButtonSecondaryHoverColor};
      }
    `}
`;

const Button: FC<Props> = ({
  buttonType = 'primary',
  label,
  onClick,
  type = 'button',
}) => (
  <StyledButton buttonType={buttonType} onClick={onClick} type={type}>
    {label}
  </StyledButton>
);

export default Button;
