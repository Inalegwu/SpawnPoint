import { movies } from "@/api/routers/movies";
import { Box, Text } from "@atoms";
import { Container } from "@components";
import React from "react";
import { ScrollView } from "react-native";

export default function Page() {

  const {data}=movies.getTrendingMovies.useQuery();

  return (
    <Container gap={2}>
     <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
     <Box width="100%" height={300} backgroundColor="neutral900"/>
     {data?.trending?.map((page)=><Box paddingHorizontal={3} paddingVertical={3} alignItems="flex-start">

      <Text fontSize={18}>{page.title}</Text>
      <Text fontSize={13} color="neutral400">{page.overview.slice(0,60)+"..."}</Text>
     </Box>)}
     </ScrollView>
    </Container>
  );
}
