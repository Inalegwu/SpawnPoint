import qClient from "@/api/config";
import { enableReactNativeComponents } from "@legendapp/state/config/enableReactNativeComponents";
import { enableReactTracking } from "@legendapp/state/config/enableReactTracking";
import { ThemeProvider } from "@shopify/restyle";
import { QueryClientProvider } from "@tanstack/react-query";
import { theme } from "@theme";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import React from "react";

enableReactTracking({
  auto: true,
});

enableReactNativeComponents();

export default function Layout() {
  const [fontsLoaded] = useFonts({
    SFProRoundedBlack: require("../assets/fonts/SF-Pro-Rounded-Black.otf"),
    SFProRoundedBold: require("../assets/fonts/SF-Pro-Rounded-Bold.otf"),
    SFProRoundedHeavy: require("../assets/fonts/SF-Pro-Rounded-Heavy.otf"),
    SFProRoundedLight: require("../assets/fonts/SF-Pro-Rounded-Light.otf"),
    SFProRoundedMedium: require("../assets/fonts/SF-Pro-Rounded-Medium.otf"),
    SFProRoundedRegular: require("../assets/fonts/SF-Pro-Rounded-Regular.otf"),
    SFProRoundedSemiBold: require("../assets/fonts/SF-Pro-Rounded-Semibold.otf"),
    SFProRoundedThin: require("../assets/fonts/SF-Pro-Rounded-Thin.otf"),
    SFProRoundedUltraLight: require("../assets/fonts/SF-Pro-Rounded-Ultralight.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={qClient}>
        <Slot />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
