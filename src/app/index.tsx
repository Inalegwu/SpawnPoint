import { normalize } from "@/utils/functions";
import { Text } from "@atoms";
import { Container, Icon, TouchableOpacity } from "@components";
import React from "react";

export default function Page() {
  return (
    <Container gap={2} alignItems="flex-start" justifyContent="center">
      <Text fontSize={normalize(40)}>SpawnPoint</Text>
      <Text fontSize={normalize(25)}>
        The Ideal Starting Point for React Native Applications Powered by Expo
      </Text>
      <TouchableOpacity
        width="100%"
        paddingHorizontal={3}
        paddingVertical={3}
        borderRadius={5}
        alignItems="center"
        justifyContent="center"
        flexDirection="row"
        gap={2}
        backgroundColor="blue300"
        activeOpacity={0.3}
        marginTop={4}
      >
        <Icon name="Clock1" size={4} color="blue600" />
        <Text color="blue600" fontSize={normalize(15)}>
          This is a custom Touchable Opacity
        </Text>
      </TouchableOpacity>
    </Container>
  );
}
