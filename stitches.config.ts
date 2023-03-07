import { createStitches } from "@stitches/react";

const stitches = createStitches({
  theme: {
    fonts: {
      firaCode: "Fira Code, sans-serif",
      gotcha: "Gotcha, san-serif",
      monaco: "Monaco, san-serif",
    },
    fontSizes: {
      10: "0.7500rem",
      20: "0.8750rem",
      30: "1.0000rem", // 16px
      40: "1.1250rem", // 18px
      50: "1.1880rem", // 19px
      60: "1.2500rem", // 20px
      70: "1.5000rem", // 24px
      80: "1.6000rem",
      85: "2.2500rem", // 36px
      90: "2.5000rem",
      100: "3.1250rem",
      110: "3.7500rem",
      120: "6.0000rem",
      130: "8.1250rem",
    },
    fontWeights: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },
    space: {
      1: "0.1250rem",
      2: "0.2500rem",
      3: "0.5000rem",
      4: "0.6250rem",
      5: "0.7500rem",
      6: "0.8750rem",
      7: "1.0000rem", // 16px
      8: "1.2500rem",
      9: "1.5000rem", // 24px
      10: "1.8750rem",
      11: "2.5000rem",
      12: "3.0000rem",
      13: "4.0000rem",
      14: "5.0000rem",
      main: "3.0000rem",
    },
    sizes: {
      1: "0.1250rem",
      2: "0.2500rem",
      3: "0.5000rem",
      4: "0.6250rem",
      5: "0.7500rem",
      6: "0.8750rem",
      7: "1.0000rem", // 16px
      8: "1.2500rem",
      9: "1.5000rem", // 24px
      10: "1.8750rem",
      11: "2.0000rem",
      12: "2.5000rem",
      13: "3.0000rem",
      14: "4.0000rem",
      15: "5.0000rem",
    },
    lineHeights: {
      233: "0.4668rem",
      240: "0.4800rem",
      247: "0.4940rem",
      267: "0.5336rem",
      286: "0.5720rem",
      300: "0.6000rem",
      314: "0.6280rem",
      350: "0.7000rem",
      500: "1.0000rem",
      750: "1.5000rem",
    },
    letterSpacings: {
      // 300: '-0.01562em',
      // 400: '-0.00833em',
      0: "0em",
      1: "0.00735em",
      2: "0.00750em",
      3: "0.00714em",
      4: "0.00938em",
      5: "0.01071em",
      6: "0.01562em",
      7: "0.02857em",
    },
    radii: {
      1: "0.2500rem", // 4px
      2: "0.5000rem", // 8px
      3: "0.7500rem", // 12px
      round: "50%",
      pill: "9999px",
    },
    zIndices: {
      lowest: -1500,
      highest: 1500,
      aboveStdElements: 1250,
      modalBg: 1499,
      modal: 1500,
    },
    colors: {
      background: "#F9FAFF",
      text: "#030416",
      border: "#030416",

      black250: "rgba(3, 4, 22, 1)",
      black400: "rgba(2, 2, 12, 1)",
      black500: "rgba(0, 0, 0)",
      white500: "rgba(255, 255, 255, 1)",

      gray900: "#030416",
      gray800: "#181827",
      gray700: "#222131",
      gray600: "#697082",
      gray500: "#7A8094",
      gray400: "#A5A9B8",
      gray300: "#D0D4E0",
      gray200: "#E7EAF3",
      gray100: "#F4F6FB",
      gray50: "#F9FAFF",

      red900: "#1F0007",
      red800: "#40000F",
      red700: "#6D001A",
      red600: "#AA0029",
      red500: "#D00032",
      red400: "#FF003D",
      red300: "#FF6287",
      red200: "#FF96AF",
      red100: "#FFC6D3",
      red50: "#FFF0F4",

      orange900: "#230D00",
      orange800: "#943500",
      orange0: "#C84901",
      orange600: "#E75300",
      orange500: "#FF5C00",
      orange400: "#’FF7E36",
      orange300: "#FFA675",
      orange200: "#FFCAAC",
      orange100: "#FFE8DB",
      orange50: "#FDF5F0",

      yellow900: "#221608",
      yellow800: "#4F4215",
      yellow700: "#C07300",
      yellow600: "#D69A00",
      yellow500: "#EEB700",
      yellow400: "#FFC400",
      yellow300: "#FFDC6B",
      yellow200: "#FFE98F",
      yellow100: "#FEF3C7",
      yellow50: "#FFFBEB",

      green900: "#001C10",
      green800: "#0D5B3A",
      green700: "#037845",
      green600: "#059A5A",
      green500: "#14B871",
      green400: "#00E582",
      green300: "#6EE7B7",
      green200: "#A7F3D0",
      green100: "#D1FAE5",
      green50: "#ECFDF5",

      cyan900: "#001515",
      cyan800: "#0A302E",
      cyan0: "#0F766E",
      cyan600: "#00AAAA",
      cyan500: "#00CCCC",
      cyan400: "#00F9F9",
      cyan300: "#00EEEE",
      cyan200: "#6DFFFF",
      cyan100: "#B9FFFF",
      cyan50: "#EBFFFF",

      blue900: "#000E22",
      blue800: "#184173",
      blue700: "#025BC9",
      blue600: "#0E6EE3",
      blue500: "#227EEF",
      blue400: "#3C93FF",
      blue300: "#88BDFF",
      blue200: "#BAE6FD",
      blue100: "#DEEDFF",
      blue50: "#F0F7FF",

      purple900: "#110026",
      purple800: "#3A1666",
      purple700: "#6F11DF",
      purple600: "#8C30FA",
      purple500: "#9F4FFF",
      purple400: "#AC65FF",
      purple300: "#CEA4FF",
      purple200: "#E4CDFF",
      purple100: "#F1E5FF",
      purple50: "#FAF5FF",
    },
    shadows: {
      0: "0rem",
      1: "0.0625rem",
      2: "0.1250rem",
      3: "0.1875rem",
    },
    transitions: {
      easeInOut: "150ms ease-in-out",
    },
  },
  media: {
    xs: "(min-width: 0px)",
    sm: "(min-width: 601px)",
    md: "(min-width: 961px)",
    lg: "(min-width: 1441px)",
    xl: "(min-width: 1921px)",
  },
});

export const darkTheme = stitches.createTheme({
  colors: {
    background: "black",
    text: "#F9FAFF",
    border: "#F9FAFF",
  },
});

export const {
  styled,
  css,
  theme,
  getCssText,
  globalCss: stitchesGlobal,
  keyframes,
  config,
} = stitches;
