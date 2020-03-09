import { css } from 'styled-components';

import * as colors from './colors';
import HansonBoldWoff from './fonts/Hanson-Bold.woff';
import HansonBoldWoff2 from './fonts/Hanson-Bold.woff2';
import RobotoRegularWoff from './fonts/Roboto-Regular.woff';
import RobotoRegularWoff2 from './fonts/Roboto-Regular.woff2';
import RobotoBoldWoff from './fonts/Roboto-Bold.woff';
import RobotoBoldWoff2 from './fonts/Roboto-Bold.woff2';
import { applyMediaQueryMd } from './dimensions';

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

export type TitleType =
  | 'pageHeader'
  | 'pageTitle'
  | 'navTitle'
  | 'footerTitle'
  | 'headline'
  | 'smallHeadline';

export type ParagraphType = 'normal';

export type FontType = TitleType | ParagraphType;

const fontSizes: Record<FontType, number> = {
  headline: 28,
  navTitle: 32,
  footerTitle: 22,
  normal: 16,
  pageTitle: 16,
  pageHeader: 42,
  smallHeadline: 22,
};

const fontSizesDesktop: Record<FontType, number> = {
  headline: 34,
  navTitle: 58,
  footerTitle: 28,
  normal: 21,
  pageTitle: 16,
  pageHeader: 84,
  smallHeadline: 34,
};

function applyFontSize(type: FontType) {
  return css`
    font-size: ${fontSizes[type]}px;

    ${applyMediaQueryMd(css`
      font-size: ${fontSizesDesktop[type]}px;
    `)}
  `;
}

export const fontStyles: Record<FontType | string, any> = {
  navTitle: css`
    ${applyFontSize('navTitle')}
    font-family: ${families.brand}, ${families.fallback};
    font-style: normal;
    font-weight: bold;
    line-height: 120%;
    text-transform: uppercase;
  `,
  footerTitle: css`
    ${applyFontSize('footerTitle')}
    font-family: ${families.brand}, ${families.fallback};
    font-style: normal;
    font-weight: bold;
    line-height: 120%;
    text-transform: uppercase;
  `,
  pageTitle: css`
    ${applyFontSize('pageTitle')}
    font-family: ${families.default}, ${families.fallback};
    font-style: normal;
    font-weight: normal;
    line-height: 150%;
    text-transform: uppercase;
  `,
  pageHeader: css`
    ${applyFontSize('pageHeader')}
    font-family: ${families.brand}, ${families.fallback};
    font-size: ${fontSizes.pageHeader}px;
    font-style: normal;
    font-weight: bold;
    line-height: 130%;
    text-transform: uppercase;
  `,
  normal: css`
    ${applyFontSize('normal')}
    color: ${colors.Grey900};
    font-family: ${families.default}, ${families.fallback};
    font-size: 16px;
    font-style: normal;
    line-height: 150%;
    font-weight: normal;
  `,
  headline: css`
    ${applyFontSize('headline')}
    font-family: ${families.default}, ${families.fallback};
    font-size: 28px;
    font-style: normal;
    font-weight: bold;
    line-height: 125%;
  `,
  smallHeadline: css`
    ${applyFontSize('smallHeadline')}
    color: ${colors.Grey900};
    font-family: ${families.default}, ${families.fallback};
    font-size: 22px;
    font-style: normal;
    font-weight: bold;
    line-height: 140%;
  `,
};
