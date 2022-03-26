export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};

export const BREAKPOINTS_REMS = {
  phoneMax: 37.5,
  tabletMax: 59.375,
  laptopMax: 81.25,
};

export const QUERIES = {
  phoneAndBelow: `(max-width: ${BREAKPOINTS_REMS.phoneMax}rem)`,
  tabletAndBelow: `(max-width: ${BREAKPOINTS_REMS.laptopMax}rem)`,
  laptopAndBelow: `(max-width: ${BREAKPOINTS_REMS.desktopMax}rem)`,
};
