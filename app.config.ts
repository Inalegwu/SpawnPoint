import type { ConfigContext, ExpoConfig } from '@expo/config';
import { ClientEnv } from './env';
import pkg from './package.json';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: pkg.name,
  slug: 'spawnpoint',
  version: pkg.version,
  scheme: `com.${pkg.name.toLowerCase()}`,
  userInterfaceStyle: 'light',
  orientation: 'portrait',
  icon: './assets/icon.png',
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: false,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
  },
  extra: {
    ...ClientEnv,
  },
  experiments: {
    typedRoutes: true,
  },
  plugins: ['expo-font', 'expo-router'],
});
