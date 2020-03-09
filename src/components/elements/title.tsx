import React, { FC } from 'react';
import styled from 'styled-components';
import { fontStyles, TitleType } from '../../style/fonts';

interface Props {
  className?: string;
  title: string;
  type?: TitleType;
}

const tag: Record<TitleType, keyof JSX.IntrinsicElements> = {
  navTitle: 'h1',
  pageTitle: 'h2',
  pageHeader: 'h3',
  headline: 'h4',
  smallHeadline: 'h5',
  footerTitle: 'span',
};

const StyledTitle = styled.h1<{ type: TitleType }>`
  ${({ type }) => fontStyles[type]}
  margin-block-start: 0;
  margin-block-end: 0;
`;

const Title: FC<Props> = ({ className, type = 'headline', title }) => {
  return (
    <StyledTitle as={tag[type]} type={type} className={className}>
      {title}
    </StyledTitle>
  );
};

export default Title;
