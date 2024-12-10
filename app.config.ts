import type { ConfigContext, ExpoConfig } from "@expo/config";
import { ClientEnv } from "./env";
import pkg from "./package.json";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: pkg.name,
  slug: "spawn-point",
  version: pkg.version,
  scheme: "com.my_app",
  userInterfaceStyle: "light",
  newArchEnabled: true,
  orientation: "portrait",
  icon: "./assets/icon.png",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
    imageWidth: 100,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: false,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
  },
  extra: {
    ...ClientEnv,
  },
  plugins: ["expo-font", "expo-router"],
});
