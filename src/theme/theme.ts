import { normalize } from "@/utils/functions";
import { createTheme } from "@shopify/restyle";

const theme = createTheme({
  colors: {
    slate50: "",
  },
  spacing: {
    0: normalize(0),
    1: normalize(4),
    2: normalize(8),
    3: normalize(12),
    4: normalize(16),
    5: normalize(20),
    6: normalize(24),
    7: normalize(28),
    8: normalize(32),
    9: normalize(36),
    10: normalize(40),
    11: normalize(44),
    12: normalize(48),
    14: normalize(56),
    16: normalize(64),
    20: normalize(80),
    24: normalize(96),
    28: normalize(112),
    32: normalize(128),
    36: normalize(144),
    40: normalize(160),
    44: normalize(176),
    48: normalize(192),
    52: normalize(208),
    56: normalize(224),
    60: normalize(240),
    64: normalize(256),
    72: normalize(288),
    80: normalize(320),
    96: normalize(384),
  },
  textVariants: {
    defaults: {
      fontFamily: "bricolage",
      fontSize: normalize(15),
      color: "foreground",
    },
  },
});

export type Theme = typeof theme;
export default theme;
