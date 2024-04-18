import React, { ReactNode } from "react";
import { View } from "react-native";

type Props = {
  children: ReactNode;
  classname?: string;
};

export default function Container(props: Props) {
  return (
    <View className={`w-full h-screen bg-black ${props.classname}`}>
      {props.children}
    </View>
  );
}
