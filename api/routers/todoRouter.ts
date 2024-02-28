import { router } from "react-query-kit";
import client from "../client";

// Example TRPC-eque router enabled by react-query-kit
// this makes call your api's easier across the app
// and allows for code co-location
const todoRouter = router("todos", {
  getTodos: router.query({
    fetcher: () => client.get("/todos"),
  }),
});

export default todoRouter;
