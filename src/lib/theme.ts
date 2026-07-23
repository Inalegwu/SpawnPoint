import { createTheme } from '@shopify/restyle';

const palette = {
  blueLight: '#3D7BFF',
  blueDark: '#5B8DEF',
  purpleLight: '#8B5CF6',
  purpleDark: '#A78BFA',
  greenLight: '#16A34A',
  greenDark: '#34D399',
  orangeLight: '#F97316',
  orangeDark: '#FB923C',

  white: '#FFFFFF',
  offWhite: '#F6F7FB',
  borderLight: '#ECEDF3',
  mutedLight: '#8A8FA3',
  textLight: '#12131A',

  offBlack: '#0D0E13',
  surfaceDark: '#1B1C24',
  borderDark: '#2A2C36',
  mutedDark: '#8C90A3',
  textDark: '#F5F6FA',
};

const light = createTheme({
  colors: {
    background: palette.offWhite,
    card: palette.white,
    primary: palette.blueLight,
    accent: palette.purpleLight,
    success: palette.greenLight,
    warning: palette.orangeLight,
    text: palette.textLight,
    textMuted: palette.mutedLight,
    border: palette.borderLight,
    navigation: '#12131A',
  },
  spacing: {
    none: 0,
    xxxs: 2,
    xxs: 4,
    xs: 8,
    s: 12,
    m: 16,
    ml: 20,
    l: 24,
    xl: 32,
    '2xl': 40,
    '3xl': 48,
    huge: 64,
    massive: 96,
  },
  borderRadii: {
    none: 0,
    xxs: 4,
    xs: 6,
    s: 8,
    sm: 10,
    m: 12,
    ml: 16,
    l: 20,
    xl: 24,
    xxl: 28,
    xxxl: 32,
    round: 40,
    full: 999,
  },
  zIndices: {
    behind: -1,
    base: 0,
    card: 1,
    stickyHeader: 10,
    floatingNav: 20,
    overlay: 30,
    modal: 40,
    toast: 50,
    tooltip: 60,
  },
  textVariants: {
    defaults: {
      fontFamily: 'SFProRoundedMedium',
      fontSize: 16,
      color: 'text',
    },
  },
});

const dark: Theme = createTheme({
  ...light,
  colors: {
    ...light.colors,
    background: palette.offBlack,
    card: palette.surfaceDark,
    primary: palette.blueDark,
    accent: palette.purpleDark,
    success: palette.greenDark,
    warning: palette.orangeDark,
    text: palette.textDark,
    textMuted: palette.mutedDark,
    border: palette.borderDark,
    navigation: '#000000',
  },
});

type Theme = typeof light;

export { dark, light, type Theme };
