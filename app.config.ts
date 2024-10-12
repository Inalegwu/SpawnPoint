import type { ConfigContext, ExpoConfig } from "@expo/config";
import { ClientEnv } from "./env";
import pkg from "./package.json";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "SpawnPoint",
  slug: "spawn-point",
  version: pkg.version,
  extra: {
    ...ClientEnv,
  },
  plugins: ["expo-font", "expo-router"],
});
