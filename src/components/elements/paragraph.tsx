import React, { FC, PropsWithChildren, CSSProperties } from 'react';
import styled from 'styled-components';
import { fontStyles, ParagraphType } from '../../style/fonts';

interface Props {
  className?: string;
  style?: CSSProperties;
  type?: ParagraphType;
}

const StyledParagraph = styled.p<{ type: ParagraphType }>`
  ${({ type }) => fontStyles[type]}
`;

const Paragraph: FC<PropsWithChildren<Props>> = ({
  children,
  className,
  style,
  type = 'normal',
}) => (
  <StyledParagraph style={style} type={type} className={className}>
    {children}
  </StyledParagraph>
);

export default Paragraph;
