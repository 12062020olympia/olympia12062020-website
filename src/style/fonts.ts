import { css } from 'styled-components';

import * as colors from './colors';
import HansonBoldWoff from './fonts/Hanson-Bold.woff';
import HansonBoldWoff2 from './fonts/Hanson-Bold.woff2';
import RobotoRegularWoff from './fonts/Roboto-Regular.woff';
import RobotoRegularWoff2 from './fonts/Roboto-Regular.woff2';
import RobotoBoldWoff from './fonts/Roboto-Bold.woff';
import RobotoBoldWoff2 from './fonts/Roboto-Bold.woff2';

export const fontFaces = css`
  @font-face {
    font-display: swap;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    src: url(${RobotoRegularWoff2}) format('woff2'),
      url(${RobotoRegularWoff}) format('woff');
  }

  @font-face {
    font-display: swap;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    src: url(${RobotoBoldWoff2}) format('woff2'),
      url(${RobotoBoldWoff}) format('woff');
  }

  @font-face {
    font-display: swap;
    font-family: Hanson;
    font-style: normal;
    font-weight: bold;
    src: url(${HansonBoldWoff2}) format('woff2'),
      url(${HansonBoldWoff}) format('woff');
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
