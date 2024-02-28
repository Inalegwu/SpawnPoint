import { enableReactNativeComponents } from "@legendapp/state/config/enableReactNativeComponents";
import { enableReactTracking } from "@legendapp/state/config/enableReactTracking";
import { QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import React from "react";
import qClient from "../api/config";

// allows for tracking of state changes within react components
// without wrapping in observer HOF
enableReactTracking({
  auto: true,
});

// allows for reactive.* components
enableReactNativeComponents();

export default function Layout() {
  const [fontsLoaded] = useFonts({
    bricolage: require("../assets/fonts/bricolage.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <QueryClientProvider client={qClient}>
      <Slot />
    </QueryClientProvider>
  );
}
