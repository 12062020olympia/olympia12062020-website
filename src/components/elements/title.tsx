import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { fontStyles, TitleType } from '../../style/fonts';
import {
  applyMediaQueryMd,
  applyMediaQueryLg,
  headerHeight,
} from '../../style/dimensions';

interface Props {
  className?: string;
  id?: string;
  title: string;
  type?: TitleType;
}

const tag: Record<TitleType, keyof JSX.IntrinsicElements> = {
  cardSubtitle: 'p',
  navTitle: 'span',
  pageTitle: 'h2',
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

  ::before {
    display: block;
    content: ' ';
    height: ${headerHeight.sm};
    margin-top: -${headerHeight.sm};
    pointer-events: none;
    visibility: hidden;

    ${applyMediaQueryMd(css`
      height: ${headerHeight.md};
      margin-top: -${headerHeight.md};
    `)}

    ${applyMediaQueryLg(css`
      height: ${headerHeight.lg};
      margin-top: -${headerHeight.lg};
    `)}
  }
`;

const Title: FC<Props> = ({ className, id, type = 'h3', title }) => {
  return (
    <StyledTitle as={tag[type]} type={type} id={id} className={className}>
      {title}
    </StyledTitle>
  );
};

export default Title;
