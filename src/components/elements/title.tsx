import React, { FC } from 'react';
import styled from 'styled-components';
import { fontStyles, TitleType } from '../../style/fonts';

interface Props {
  className?: string;
  title: string;
  type?: TitleType;
}

const tag: Record<TitleType, keyof JSX.IntrinsicElements> = {
  cardSubtitle: 'p',
  navTitle: 'span',
  pageTitle: 'h2',
  footerTitle: 'span',
  heroTitle: 'h4',
  pictureTitle: 'p',
  pictureDescription: 'p',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
};

const StyledTitle = styled.h1<{ type: TitleType }>`
  ${({ type }) => fontStyles[type]}
  margin-block-start: 0;
  margin-block-end: 0;
`;

const Title: FC<Props> = ({ className, type = 'h3', title }) => {
  return (
    <StyledTitle as={tag[type]} type={type} className={className}>
      {title}
    </StyledTitle>
  );
};

export default Title;
