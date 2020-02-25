import { css } from 'styled-components';

import * as colors from './colors';

export const families = {
  default: 'Roboto',
  fallback: 'sans-serif',
  brand: 'Hanson',
};

export const fontStyles = {
  pageTitle: css`
    color: ${colors.Grey900};
    font-family: ${families.brand}, ${families.fallback};
    font-size: 32px;
    font-style: normal;
    font-weight: bold;
    line-height: 33px;
  `,
  normal: css`
    color: ${colors.Grey900};
    font-family: ${families.default}, ${families.fallback};
    font-size: 16px;
    font-style: normal;
    line-height: 150%;
    font-weight: normal;
  `,
  headline: css`
    color: ${colors.Grey900};
    font-family: ${families.default}, ${families.fallback};
    font-size: 28px;
    font-style: normal;
    font-weight: bold;
    line-height: 125%;
  `,
  smallHeadline: css`
    color: ${colors.Grey900};
    font-family: ${families.default}, ${families.fallback};
    font-size: 22px;
    font-style: normal;
    font-weight: bold;
    line-height: 140%;
  `,
  small: css`
    font-family: ${families.default}, ${families.fallback};
    font-style: normal;
    font-weight: thin;
    font-size: 12px;
    line-height: 120%;
  `,
};
