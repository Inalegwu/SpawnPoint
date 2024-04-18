import { Container } from "@components";
import React from "react";
import { Text, View } from "react-native";

export default function Page() {
  return (
    <Container classname="items-start justify-center px-4">
      <Text className="text-5xl text-white font-bold">SpawnPoint</Text>
      <Text className="text-2xl text-gray-400 font-bricolage">
        The best way to start a new React Native project using the best tools
      </Text>
      <View className="flex-1 items-start">
        <Text className="font-medium text-lg font-bricolage mt-2 mb-2 text-gray-400">
          The project file structure is designed to be simple to get up an
          running with
        </Text>
        <InfoBox
          folder="src/app"
          desc="all pages in your app live here and by using expo-router , all files and folders inside the app folder are pages in your app."
        />
        <InfoBox
          folder="src/api"
          desc="all api and backend related files are here including the config for tanstack query as well as the appRouter which houses all your api code and allows you access it from your UI codes."
        />
        <InfoBox
          folder="src/components"
          desc="All your custom UI components you might use across your app live here."
        />
        <InfoBox
          folder="src/state"
          desc="this folder exports only one file and is exported as one file from @state and it exports your global state observable , you might change this behaviour if you want to use observable slices instead."
        />
        <InfoBox
          folder="src/assets"
          desc="any static assets you might use in your code."
        />
        <InfoBox
          folder="src/utils"
          desc="any reusable functions you might need across your apps."
        />
      </View>
    </Container>
  );
}

function InfoBox({
  folder,
  desc,
}: {
  folder: string;
  desc: string;
}) {
  return (
    <View className="w-5/6 px-2 py-1 flex-row items-center justify-start gap-2 mt-2 mb-2">
      <View className="px-2 py-1 bg-gray-500/40 rounded-full">
        <Text className="font-bricolage text-white text-sm font-bold">
          {folder}
        </Text>
      </View>
      <Text className="text-white font-light">{desc}</Text>
    </View>
  );
}
