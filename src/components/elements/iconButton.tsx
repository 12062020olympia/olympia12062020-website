import React, { FC, ComponentType } from 'react';
import styled from 'styled-components';

import * as colors from '../../style/colors';

interface Props {
  className?: string;
  Icon: ComponentType<{ style?: any }>;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${colors.IconButtonColor};
  cursor: pointer;

  :hover {
    color: ${colors.IconButtonHoverColor};
  }

  :focus {
    border: 1px solid ${colors.IconButtonFocusBorderColor};
    outline: none;
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
