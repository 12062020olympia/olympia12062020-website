import { css } from 'styled-components';

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
    src: local('Roboto Regular') local('Roboto-Regular')
        url(${RobotoRegularWoff2}) format('woff2'),
      url(${RobotoRegularWoff}) format('woff');
  }

  @font-face {
    font-display: swap;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    src: local('Roboto Bold') local('Roboto-Bold') url(${RobotoBoldWoff2})
        format('woff2'),
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
  | 'cardSubtitle'
  | 'pageTitle'
  | 'navTitle'
  | 'footerTitle'
  | 'heroTitle'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5';

export type ParagraphType = 'large' | 'normal' | 'small' | 'tiny';

export type FontType = TitleType | ParagraphType;

export const fontSizes: Record<FontType, number> = {
  cardSubtitle: 16,
  navTitle: 32,
  footerTitle: 22,
  pageTitle: 16,
  heroTitle: 48,
  h1: 42,
  h2: 36,
  h3: 28,
  h4: 20,
  h5: 16,

  large: 20,
  normal: 16,
  small: 14,
  tiny: 12,
};

export const fontSizesDesktop: Record<FontType, number> = {
  cardSubtitle: 28,
  navTitle: 58,
  footerTitle: 28,
  pageTitle: 16,
  heroTitle: 96,
  h1: 84,
  h2: 48,
  h3: 36,
  h4: 28,
  h5: 20,

  large: 28,
  normal: 20,
  small: 16,
  tiny: 12,
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
  cardSubtitle: css`
    ${applyFontSize('cardSubtitle')}
    font-family: ${families.default}, ${families.fallback};
    font-style: normal;
    font-weight: normal;
    line-height: 140%;
  `,
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
  heroTitle: css`
    ${applyFontSize('heroTitle')}
    font-family: ${families.brand}, ${families.fallback};
    font-style: normal;
    font-weight: bold;
    line-height: 75%;
    text-transform: uppercase;
  `,
  h1: css`
    ${applyFontSize('h1')}
    font-family: ${families.brand}, ${families.fallback};
    font-style: normal;
    font-weight: bold;
    line-height: 120%;

    ${applyMediaQueryMd(css`
      line-height: 125%;
    `)}
  `,
  h2: css`
    ${applyFontSize('h2')}
    font-family: ${families.default}, ${families.fallback};
    font-style: normal;
    font-weight: bold;
    line-height: 125%;
  `,

  h3: css`
    ${applyFontSize('h3')}
    font-family: ${families.default}, ${families.fallback};
    font-style: normal;
    font-weight: bold;
    line-height: 140%;
    ${applyMediaQueryMd(css`
      line-height: 130%;
    `)}
  `,
  h4: css`
    ${applyFontSize('h4')}
    font-family: ${families.default}, ${families.fallback};
    font-style: normal;
    font-weight: bold;
    line-height: 140%;
  `,
  h5: css`
    ${applyFontSize('h5')}
    font-family: ${families.default}, ${families.fallback};
    font-style: normal;
    font-weight: bold;
    line-height: 140%;
  `,
  large: css`
    ${applyFontSize('large')}
    font-family: ${families.default}, ${families.fallback};
    font-style: normal;
    line-height: 150%;
    font-weight: normal;

    ${applyMediaQueryMd(css`
      line-height: 140%;
    `)}
  `,
  normal: css`
    ${applyFontSize('normal')}
    font-family: ${families.default}, ${families.fallback};
    font-style: normal;
    line-height: 150%;
    font-weight: normal;
  `,
  small: css`
    ${applyFontSize('small')}
    font-family: ${families.default}, ${families.fallback};
    font-style: normal;
    line-height: 150%;
    font-weight: normal;
  `,
  tiny: css`
    ${applyFontSize('normal')}
    font-family: ${families.default}, ${families.fallback};
    font-style: normal;
    line-height: 150%;
    font-weight: normal;
  `,
};
