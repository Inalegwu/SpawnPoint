import React from "react";
import { Text, View } from "react-native";
import appRouter from "../api/appRouter";

export default function Page() {
  // fully typesafe queries with an almost trpc
  // like experience.
  const { data, isLoading } = appRouter.todoRouter.getTodos.useQuery();

  return (
    <View className="w-full h-screen items-center justify-center">
      {isLoading && <Text>Fetching Todos</Text>}
      {data?.map((v) => {
        return (
          <View className="w-full bg-slate-300/20 rounded-md" key={v.id}>
            <Text>{v.content}</Text>
          </View>
        );
      })}
    </View>
  );
}
