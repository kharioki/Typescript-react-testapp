import * as styledComponents from 'styled-components';

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  IThemeInterface
>;

export interface IThemeInterface {
  primaryColor;
  black;
  white;
  offWhite;
  lightGrey;
  maxWidth;
  bs: string;
}

export const theme = {
  primaryColor: '#851a8b',
  black: '#393939',
  white: '#fff',
  offWhite: '#EDEDED',
  lightGrey: '#E1E1E1',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)'
};

export default styled;
export { css, createGlobalStyle, keyframes, ThemeProvider };
