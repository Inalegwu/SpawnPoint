import type { ConfigContext, ExpoConfig } from "@expo/config";
import { ClientEnv } from "./env";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "SpawnPoint",
  slug: "spawn-point",
  extra: {
    ...ClientEnv,
  },
});
