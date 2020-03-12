import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import * as colors from '../../style/colors';

export type ButtonType = 'primary' | 'secondary';

interface Props {
  buttonType?: ButtonType;
  href: string;
  label: string;
}

const StyledLink = styled.a<{ buttonType: 'primary' | 'secondary' }>`
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
      color: ${colors.BrandPrimary500};

      :hover {
        background-color: ${colors.ButtonSecondaryHoverColor};
      }
    `}
`;

const ButtonLink: FC<Props> = ({ buttonType = 'primary', href, label }) => (
  <StyledLink buttonType={buttonType} href={href}>
    {label}
  </StyledLink>
);

export default ButtonLink;
