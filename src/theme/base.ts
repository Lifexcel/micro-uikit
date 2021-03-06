import { MediaQueries, Breakpoints, Spacing, ZIndices } from "./types";

export const breakpointMap: { [key: string]: number } = {
  xs: 370,
  sm: 576,
  md: 852,
  lg: 968,
  xl: 1080,
  xxl: 1440,
};

const breakpoints: Breakpoints = Object.values(breakpointMap).map((breakpoint) => `${breakpoint}px`);

const mediaQueries: MediaQueries = {
  xs: `@media screen and (min-width: ${breakpointMap.xs}px)`,
  sm: `@media screen and (min-width: ${breakpointMap.sm}px)`,
  md: `@media screen and (min-width: ${breakpointMap.md}px)`,
  lg: `@media screen and (min-width: ${breakpointMap.lg}px)`,
  xl: `@media screen and (min-width: ${breakpointMap.xl}px)`,
  xxl: `@media screen and (min-width: ${breakpointMap.xxl}px)`,
  nav: `@media screen and (min-width: ${breakpointMap.lg}px)`,
};

export const shadows = {
  level1: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
  active: "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)",
  success: "0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)",
  warning: "0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)",
  focus: "0px 0px 0px 1px #7645D9, 0px 0px 0px 4px rgba(118, 69, 217, 0.6)",
  inset: "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)",
};

export const lightShadows = {
  ...shadows,
  active: "0px 0px 0px 1px rgba(94, 72, 255, 0.15), 0px 0px 4px 8px rgba(94, 72, 255, 0.15)",
  focus: "0px 0px 0px 1px #5e48ff, 0px 0px 0px 4px #5e48ff",
  inset: "inset 0px 2px 2px -1px gray",
};

export const darkShadows = {
  ...shadows,
  active: "0px 0px 0px 1px rgba(8, 255, 226, 0.15), 0px 0px 4px 8px rgba(8, 255, 226, 0.15)",
  focus: "0px 0px 0px 1px #08ffe1, 0px 0px 0px 4px #08ffe1",
  inset: "inset 0px 2px 2px -1px gray",
};

const spacing: Spacing = [0, 4, 8, 16, 24, 32, 48, 64];

const radii = {
  small: "4px",
  default: "16px",
  card: "32px",
  circle: "50%",
};

const zIndices: ZIndices = {
  dropdown: 16,
  modal: 100,
  menu: 12,
  panel: 11,
  footerMobile: 5,
  footerDesktop: 5,
};

export default {
  siteWidth: 1200,
  breakpoints,
  mediaQueries,
  spacing,
  shadows,
  radii,
  zIndices,
};
