import { router } from "react-query-kit";

// Example TRPC-eque router enabled by react-query-kit
// this makes call your api's easier across the app
// and allows for code co-location
// friendly advice , use this for more generic
// API calls , and use createQuery for more specific calls
// to have more control over your query key which helps with
// caching 😉
const exampleRouter = router("example", {
  greet: router.mutation({
    mutationFn: async (v: { name: string }) => {
      return `Hello ${v.name}`;
    },
  }),
});

export default exampleRouter;
