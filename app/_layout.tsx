import { enableReactNativeComponents } from "@legendapp/state/config/enableReactNativeComponents";
import { enableReactTracking } from "@legendapp/state/config/enableReactTracking";
import { QueryClientProvider } from "@tanstack/react-query";
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
  return (
    <QueryClientProvider client={qClient}>
      <Slot />
    </QueryClientProvider>
  );
}
