import styled from 'styled-components';
import React, { FC } from 'react';

import * as colors from '../../style/colors';
import Flex from './flex';

interface Props {
  label: string;
  name: string;
}

const Label = styled.label`
  font-weight: bold;
`;

const TextAreaField = styled.textarea`
  background-color: ${colors.White};
  border: 1px solid ${colors.InputBorderColor};
  color: ${colors.DefaultFontColor};
  font-size: 16px;
  line-height: 120%;
  padding: 15px 11px;
  min-height: 300px;

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

const Input: FC<Props> = ({ label, name }) => {
  return (
    <Flex flexDirection="column">
      <Label htmlFor={name}>{label}</Label>
      <TextAreaField id={name} name={name} />
    </Flex>
  );
};

export default Input;
