const colors = {
  primary500: "#72063c",
  primary600: "#640233",
  primary700: "#3b021f",
  primary800: "#4e0329",
  secondary500: "#ddb52f",
};
const spaces = [0, 4, 8, 16, 32, 64];
const sizes = [0, 4, 8, 16, 32, 64, 72];
const fontSizes = [12, 14, 16, 18, 20, 24, 28, 30, 32];
const letterSpacings = [0, 2, 4, 6, 8, 19];
const radii = [0, 4, 8, 16, 32, 64, 999];
const zIndices = [1, 5, 10];
const lineHeights = ["8px", "16px", "24px", "32px"];

const breakpoints: String[] | any = ["640px", "768px", "1024px", "1280px"];

const defaultTheme = {
  colors,
  spaces,
  sizes,
  fontSizes,
  letterSpacings,
  radii,
  zIndices,
  breakpoints,
  lineHeights,
};

export default defaultTheme;
