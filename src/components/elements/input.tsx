import styled from 'styled-components';
import React, { FC } from 'react';

import * as colors from '../../style/colors';
import Flex from './flex';

interface Props {
  label: string;
  name: string;
  type?: string;
}

const Label = styled.label`
  font-weight: bold;
`;

const InputField = styled.input`
  background-color: ${colors.White};
  color: ${colors.DefaultFontColor};
  font-size: 16px;
  line-height: 120%;
  border: 1px solid ${colors.InputBorderColor};
  padding: 15px 11px;

  ::placeholder {
    color: ${colors.InputPlaceholderColor};
  }

  :focus {
    border: 1px solid ${colors.InputFocusBorderColor};
    outline: none;
  }

  :hover:not(:focus) {
    border: 1px solid ${colors.InputHoverBorderColor};
  }
`;

const Input: FC<Props> = ({ label, name, type = 'text' }) => {
  return (
    <Flex flexDirection="column">
      <Label htmlFor={name}>{label}</Label>
      <InputField id={name} name={name} type={type} />
    </Flex>
  );
};

export default Input;
