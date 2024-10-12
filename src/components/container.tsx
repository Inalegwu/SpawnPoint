import React, { type ReactNode } from "react";
import { Box } from "./atoms";
import type { Theme } from "@theme";
import type { BoxProps } from "@shopify/restyle";
import type { ViewStyle } from "react-native";

type Props = BoxProps<Theme> & {
  children: ReactNode;
  style?: ViewStyle;
};

export default function Container(props: Props) {
  return (
    <Box backgroundColor="zinc100" padding={3} flex={1} {...props}>
      {props.children}
    </Box>
  );
}
