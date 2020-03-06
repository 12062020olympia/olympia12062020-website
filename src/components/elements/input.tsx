import styled from 'styled-components';
import React, { FC } from 'react';
import Flex from './flex';

interface Props {
  label: string;
  name: string;
  type?: string;
}

const Label = styled.label`
  font-weight: bold;
`;

const InputField = styled.input``;

const Input: FC<Props> = ({ label, name, type = 'text' }) => {
  return (
    <Flex flexDirection="column">
      <Label>{label}</Label>
      <InputField name={name} type={type} />
    </Flex>
  );
};

export default Input;
