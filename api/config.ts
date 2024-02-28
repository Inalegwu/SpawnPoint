// React Query Config Goes Here
import { QueryClient } from "@tanstack/react-query";

const qClient = new QueryClient({
  defaultOptions: {
    mutations: {
      retry: 2,
    },
    queries: {
      retry: 4,
      staleTime: 30000,
    },
  },
});

export default qClient;
