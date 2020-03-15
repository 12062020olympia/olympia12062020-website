// @ts-ignore
import { config } from 'react-awesome-styled-grid';
import {
  css,
  FlattenInterpolation,
  FlattenSimpleInterpolation,
} from 'styled-components';

export const contentMaxWidth = '660px';

export type ScreenSize = 'sm' | 'md' | 'lg';

export const headerHeight: Record<ScreenSize, string> = {
  sm: '56px',
  md: '140px',
  lg: '140px',
};

export const footerHeight: Record<ScreenSize, string> = {
  sm: '100px',
  md: '200px',
  lg: '200px',
};

export const contentMargin: Record<ScreenSize, string> = {
  sm: '20px',
  md: '50px',
  lg: '70px',
};

export function applyMediaQueryMd(
  styles: FlattenSimpleInterpolation | FlattenInterpolation<any>
) {
  return css`
    ${props => config(props).media['sm']`${styles}`}
  `;
}

export function applyMediaQueryLg(
  styles: FlattenSimpleInterpolation | FlattenInterpolation<any>
) {
  return css`
    ${props => config(props).media['md']`${styles}`}
  `;
}
