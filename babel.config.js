module.exports = (api) => {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@env": "./src/env.js",
            "@state": "./src/state/index.ts",
            "@/api": "./src/api/*",
            "@app": "./src/api/app.ts",
            "@components": "./src/components/index.ts",
            "@/utils": "./utils/*",
          },
          extensions: [
            ".ios.ts",
            ".android.ts",
            ".ts",
            ".ios.tsx",
            ".android.tsx",
            ".tsx",
            ".jsx",
            ".js",
            ".json",
          ],
        },
      ],
      "nativewind/babel",
    ],
  };
};
