import React, { FC, useCallback, ChangeEvent } from 'react';
import styled from 'styled-components';
import Flex from './flex';
import * as colors from '../../style/colors';
import { fontStyles } from '../../style/fonts';

interface Props {
  mandatory?: boolean;
  name: string;
  label: string;
  onValueChange: (value: boolean) => void;
  value: boolean;
}

const Container = styled(Flex)`
  ${fontStyles.tiny}
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const StyledCheckbox = styled.div<{ checked: boolean }>`
  background: ${({ checked }) => (checked ? colors.Black : colors.White)};
  border: 1px solid ${colors.Grey500};
  height: 20px;
  margin-right: 8px;
  transition: all 150ms;
  width: 20px;

  ${Icon} {
    visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')};
  }

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 1px ${colors.Grey300};
  }
`;

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Checkbox: FC<Props> = ({
  label,
  mandatory,
  name,
  onValueChange,
  value,
}) => {
  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) =>
      onValueChange(event.target.checked),
    [onValueChange]
  );

  const handleCheckboxClick = useCallback(() => onValueChange(!value), [
    onValueChange,
    value,
  ]);
  return (
    <Container flexDirection="row">
      <CheckboxContainer>
        <HiddenCheckbox
          id={name}
          type="checkbox"
          checked={value}
          onChange={onChange}
          required={mandatory}
        />
        <StyledCheckbox checked={value} onClick={handleCheckboxClick}>
          <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </StyledCheckbox>
      </CheckboxContainer>
      <label htmlFor={name}>{label}</label>
    </Container>
  );
};

export default Checkbox;
