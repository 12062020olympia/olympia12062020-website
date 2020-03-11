import styled from 'styled-components';
import React, { FC, useCallback, ChangeEvent } from 'react';

import * as colors from '../../style/colors';
import Flex from './flex';

interface Props {
  label: string;
  name: string;
  options: Array<{ label: string; value: string }>;
  onValueChange: (value: string) => void;
  type?: string;
  value: string;
}

const Label = styled.label`
  font-weight: bold;
`;

const SelectField = styled.select`
  border: 1px solid ${colors.InputBorderColor};
  border-radius: 0;
  color: ${colors.DefaultFontColor};
  font-size: 16px;
  line-height: 120%;
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

const Select: FC<Props> = ({
  label,
  name,
  options = [],
  onValueChange,
  type = 'text',
  value,
}) => {
  const onChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) =>
      onValueChange(event.target.value),
    [onValueChange]
  );
  return (
    <Flex flexDirection="column">
      <Label htmlFor={name}>{label}</Label>
      <SelectField id={name} name={name} value={value} onChange={onChange}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </SelectField>
    </Flex>
  );
};

export default Select;
