import styled from 'styled-components';
import React, { FC, useCallback, ChangeEvent } from 'react';

import * as colors from '../../style/colors';
import Flex from './flex';

interface Props {
  label: string;
  mandatory?: boolean;
  name: string;
  onValueChange: (value: string) => void;
  type?: string;
  value: string;
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

const Input: FC<Props> = ({
  label,
  mandatory,
  name,
  onValueChange,
  type = 'text',
  value,
}) => {
  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => onValueChange(event.target.value),
    [onValueChange]
  );
  return (
    <Flex flexDirection="column">
      <Label htmlFor={name}>
        {label}
        {mandatory ? ' *' : ''}
      </Label>
      <InputField
        id={name}
        name={name}
        aria-required={mandatory}
        required={mandatory}
        type={type}
        onChange={onChange}
        value={value}
      />
    </Flex>
  );
};

export default Input;
