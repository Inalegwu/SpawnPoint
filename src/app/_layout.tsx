import { enableReactNativeComponents } from "@legendapp/state/config/enableReactNativeComponents";
import { enableReactTracking } from "@legendapp/state/config/enableReactTracking";
import { QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import qClient from "../api/config";

enableReactTracking({
  auto: true,
});

enableReactNativeComponents();

export default function Layout() {
  const [fontsLoaded] = useFonts({
    bricolage: require("../assets/fonts/bricolage.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView className="flex-1">
      <QueryClientProvider client={qClient}>
        <Slot />
      </QueryClientProvider>
    </SafeAreaView>
  );
}
