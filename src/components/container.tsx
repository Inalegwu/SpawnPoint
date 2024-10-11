import React, { type ReactNode } from "react";
import { Box } from "./atoms";

type Props = {
  children: ReactNode;
  classname?: string;
};

export default function Container(props: Props) {
  return (
    <Box
      backgroundColor="zinc100"
      flex={1}
      width="100%"
      alignItems="center"
      justifyContent="center"
      paddingHorizontal={2}
    >
      {props.children}
    </Box>
  );
}
