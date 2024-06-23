import { normalize } from "@/utils/functions";
import { Text } from "@atoms";
import { Container } from "@components";
import React from "react";

export default function Page() {
  return (
    <Container>
      <Text fontSize={normalize(24)}>SpawnPoint</Text>
      <Text textAlign="center" fontSize={normalize(20)}>
        The Ideal Starting Point for React Native Applications Powered by Expo
      </Text>
    </Container>
  );
}
