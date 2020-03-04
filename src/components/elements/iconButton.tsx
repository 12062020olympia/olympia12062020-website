import React, { FC, ComponentType } from 'react';
import styled from 'styled-components';

import * as colors from '../../style/colors';

interface Props {
  Icon: ComponentType<{ style?: any }>;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${colors.Grey900};
  cursor: pointer;

  :hover {
    color: ${colors.Grey500};
  }
`;

const IconButton: FC<Props> = ({ Icon, onClick, type = 'button' }) => {
  return (
    <StyledButton onClick={onClick} type={type}>
      <Icon />
    </StyledButton>
  );
};

export default IconButton;
