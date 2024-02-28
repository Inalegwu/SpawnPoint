import React from "react";
import { Pressable, Text, View } from "react-native";
import appRouter from "../api/appRouter";

export default function Page() {
  // fully typesafe queries with an almost trpc
  // like experience.
  const { data, isLoading } = appRouter.todoRouter.getTodos.useQuery();
  const { mutate } = appRouter.todoRouter.saveTodo.useMutation();

  return (
    <View className="w-full h-screen items-center justify-center p-3 font-bricolage">
      {isLoading && <Text>Fetching Todos</Text>}
      {data?.map((v) => {
        return (
          <View className="w-full bg-slate-300 mt-2 p-2 rounded-md" key={v.id}>
            <Text className="font-bold text-lg font-[bricolage]">
              {v.content}
            </Text>
          </View>
        );
      })}
      <Pressable
        className="mt-2 bg-blue-400 rounded-lg w-full p-3 flex-row items-center justify-center"
        onPress={() => mutate({ content: "Third Todo" })}
      >
        <Text className="font-bold text-lg font-bricolage">Add Todo</Text>
      </Pressable>
    </View>
  );
}
