import React, { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { fontStyles, ParagraphType } from '../../style/fonts';

interface Props {
  className?: string;
  type?: ParagraphType;
}

const StyledParagraph = styled.p<{ type: ParagraphType }>`
  ${({ type }) => fontStyles[type]}
`;

const Paragraph: FC<PropsWithChildren<Props>> = ({
  children,
  className,
  type = 'normal',
}) => (
  <StyledParagraph type={type} className={className}>
    {children}
  </StyledParagraph>
);

export default Paragraph;
