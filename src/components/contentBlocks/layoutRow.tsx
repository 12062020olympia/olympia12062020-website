import React, { FC, PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';

import {
  contentMargin,
  contentMaxWidth,
  largeContentMaxWidth,
  applyMediaQueryMd,
  applyMediaQueryLg,
} from '../../style/dimensions';
import { ContentBlockLayout } from './contentBlock';

interface Props {
  layout: ContentBlockLayout;
}

const Container = styled.div`
  padding: 0 ${contentMargin.sm};

  ${applyMediaQueryMd(css`
    padding: 0 ${contentMargin.md};
  `)}

  ${applyMediaQueryLg(css`
    padding: 0 ${contentMargin.lg};
  `)}
`;

const InnerContainer = styled.div<{ maxWidth: string }>`
  margin: 0 auto;
  max-width: ${({ maxWidth }) => maxWidth};
`;

const LayoutRow: FC<PropsWithChildren<Props>> = ({
  children,
  layout,
}) => {
  if (layout === ContentBlockLayout.Hidden) {
    return null;
  }
  const maxWidth = layout === ContentBlockLayout.Left ? largeContentMaxWidth : contentMaxWidth;

  return (
    <Container>
      <InnerContainer maxWidth={maxWidth}>
        {children}
      </InnerContainer>
    </Container>
  );
};

export default LayoutRow;
