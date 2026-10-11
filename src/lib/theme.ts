import { createTheme } from '@shopify/restyle';
import { StyleSheet } from 'react-native';

export const hairline = StyleSheet.hairlineWidth;

const palette = {
  black: '#0A0A0C',
  white: '#FFFFFF',
  purple300: '#C4B5FD',
  purple400: '#8B7BD8',
  purple700: '#6D28D9',
  surfaceDark: '#121216',
  surfaceLight: '#F6F5FA',
  borderDark: '#1F1F24',
  borderLight: '#E5E5E8',
  borderHiDark: '#3E3A4F',
  textDark: '#EDEDF0',
  textLight: '#0A0A0C',
  mutedDark: '#9A9AA6',
  mutedLight: '#5C5C68',
};

export const dark = createTheme({
  colors: {
    background: palette.black,
    surface: palette.surfaceDark,
    border: palette.borderDark,
    borderHi: palette.borderHiDark,
    text: palette.textDark,
    textMuted: palette.mutedDark,
    accent: palette.purple300,
    accentDim: palette.purple400,
    accentText: palette.purple300,
    onAccent: palette.black,
  },
  spacing: { xs: 4, s: 8, m: 16, l: 24, xl: 40 },
  borderRadii: { none: 0, s: 4, m: 8, l: 16 },
  breakpoints: {},
  textVariants: {
    defaults: {
      color: 'text',
      fontFamily: 'OnestRegular',
      fontSize: 14,
    },
    muted: { color: 'textMuted' },
    accent: { color: 'accentText' },
  },
});

export type Theme = typeof dark;

export const light: Theme = {
  ...dark,
  colors: {
    background: palette.white,
    surface: palette.surfaceLight,
    border: palette.borderLight,
    borderHi: palette.purple300,
    text: palette.textLight,
    textMuted: palette.mutedLight,
    accent: palette.purple300,
    accentDim: palette.purple400,
    accentText: palette.purple700,
    onAccent: palette.black,
  },
};
