import React, { ReactNode } from "react";
import { View } from "react-native";

type Props = {
  children: ReactNode;
};

export default function Container(props: Props) {
  return <View className="w-full h-screen bg-gray-100">{props.children}</View>;
}
