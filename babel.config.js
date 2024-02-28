module.exports = (api) => {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "module-resolver",
      {
        root: ["./"],
        alias: {
          "@env": "./src/env.js",
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
      "nativewind/babel",
    ],
  };
};
