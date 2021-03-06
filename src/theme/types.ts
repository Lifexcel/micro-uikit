export type Breakpoints = string[];

export type MediaQueries = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
  nav: string;
};

export type Spacing = number[];

export type Radii = {
  small: string;
  default: string;
  card: string;
  circle: string;
};

export type Shadows = {
  level1: string;
  active: string;
  success: string;
  warning: string;
  focus: string;
  inset: string;
};

export type Gradients = {
  bubblegum: string;
  bluepink: string;
};

export type Colors = {
  light: string;
  dark: string;
  analogous: string;
  primary: string;
  primaryBright: string;
  primaryDark: string;
  secondary: string;
  tertiary: string;
  info: string;
  success: string;
  failure: string;
  warning: string;
  contrast: string;
  invertedContrast: string;
  input: string;
  background: string;
  backgroundDisabled: string;
  backgroundSecondary: string;
  text: string;
  textDisabled: string;
  textSubtle: string;
  borderColor: string;
  card: string;
  footer: string;
  footerShadow: string;
  // Gradients
  gradients: Gradients;
  // Gradient Colors
  gradientL: string;
  gradientR: string;
  // other colors
  blue: string;
  // Brand colors
  binance: string;
};

export type ZIndices = {
  dropdown: number;
  modal: number;
  menu: number;
  panel: number;
  footerMobile: number;
  footerDesktop: number;
};
