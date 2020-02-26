import { css } from 'styled-components';

import * as colors from './colors';
import HansonBoldTtf from './fonts/Hanson-Bold.ttf';
import RobotoRegularTtf from './fonts/Roboto-Regular.ttf';
import RobotoCondensedBoldTtf from './fonts/RobotoCondensed-Bold.ttf';

export const fontFaces = css`
  @font-face {
    font-display: swap;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    src: url(${RobotoRegularTtf}) format('truetype');
  }

  @font-face {
    font-display: swap;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    src: url(${RobotoCondensedBoldTtf}) format('truetype');
  }

  @font-face {
    font-display: swap;
    font-family: Hanson;
    font-style: normal;
    font-weight: bold;
    src: url(${HansonBoldTtf}) format('truetype');
  }
`;

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
