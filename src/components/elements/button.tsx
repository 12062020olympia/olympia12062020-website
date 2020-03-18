import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import * as colors from '../../style/colors';

interface Props {
  buttonType?: ButtonType;
  className?: string;
  href?: string;
  onClick?: () => void;
  label: string;
  type?: 'submit' | 'button';
}

export type ButtonType = 'primary' | 'secondary' | 'complementary';

const StyledButton = styled.button<{
  buttonType: ButtonType;
}>`
  background-color: ${colors.ButtonColor};
  border: 1px solid ${colors.ButtonColor};
  font-size: 18px;
  font-weight: bold;
  color: ${colors.DefaultFontColor};
  padding: 9px 13px;
  text-decoration: none;

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
      border-color: ${colors.Grey700};
      color: ${colors.Grey900};

      :hover {
        background-color: ${colors.ButtonSecondaryHoverColor};
      }
    `}

  ${({ buttonType }) =>
    buttonType === 'complementary' &&
    css`
      background-color: ${colors.ButtonComplementaryColor};
      color: ${colors.BrandPrimary500};

      :hover {
        background-color: ${colors.ButtonComplementaryHoverColor};
      }
    `}
`;

const StyledLink = StyledButton.withComponent('a');

const Button: FC<Props> = ({
  buttonType = 'primary',
  className,
  href,
  label,
  onClick,
  type = 'button',
}) => {
  if (href) {
    return (
      <StyledLink
        buttonType={buttonType}
        className={className}
        href={href}
        type={type}
      >
        {label}
      </StyledLink>
    );
  }
  return (
    <StyledButton
      buttonType={buttonType}
      className={className}
      onClick={onClick}
      type={type}
    >
      {label}
    </StyledButton>
  );
};

export default Button;
