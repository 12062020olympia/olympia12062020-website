import React, { FC, ComponentType } from 'react';
import styled from 'styled-components';

import * as colors from '../../style/colors';

interface Props {
  ariaLabel?: string;
  className?: string;
  Icon: ComponentType<{ style?: any }>;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const StyledButton = styled.button`
  background-color: transparent;
  border: 1px solid transparent;
  color: ${colors.IconButtonColor};
  cursor: pointer;
  height: 32px;
  width: 32px;
  padding: 0;

  :hover {
    color: ${colors.IconButtonHoverColor};
  }

  :focus {
    outline: none;
  }

  :focus:not(:active) {
    border: 1px solid ${colors.IconButtonFocusBorderColor};
  }
`;

const IconButton: FC<Props> = ({ Icon, type = 'button', ...otherProps }) => {
  return (
    <StyledButton type={type} {...otherProps}>
      <Icon />
    </StyledButton>
  );
};

export default IconButton;
