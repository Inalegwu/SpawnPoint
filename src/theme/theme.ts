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
  spacing: {},
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
