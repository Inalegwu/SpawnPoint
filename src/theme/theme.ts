import { normalize } from "@/utils/functions";
import { createTheme } from "@shopify/restyle";

const palette = {
  background: "#000000",
  foreground: "#ffffff",
} as const;

const theme = createTheme({
  colors: {
    background: palette.background,
    foreground: palette.foreground,
  },
  spacing: {
    s: normalize(8),
    m: normalize(16),
    l: normalize(24),
    xl: normalize(40),
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
