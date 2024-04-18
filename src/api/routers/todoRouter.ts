import { router } from "react-query-kit";
import type { Todo } from "../../utils/types";

let todos: Todo[] = [
  {
    id: 1,
    content: "First Todo",
    isDone: false,
  },
  {
    id: 2,
    content: "Second Todo",
    isDone: true,
  },
];

// Example TRPC-eque router enabled by react-query-kit
// this makes call your api's easier across the app
// and allows for code co-location
// friendly advice , use this for more generic
// API calls , and use createQuery for more specific calls
// to have more control over your query key which helps with
// caching 😉
const todoRouter = router("todos", {
  getTodos: router.query({
    fetcher: () => todos,
  }),
  saveTodo: router.mutation({
    mutationFn: async (d: { content: string }) => {
      let count = 0;
      return {
        content: d.content,
        id: count++,
        isDone: false,
      };
    },
  }),
  deleteTodo: router.mutation({
    mutationFn: async (d: { id: number }) => {
      const deleted = todos.filter((v) => v.id !== d.id);
      return deleted;
    },
  }),
  clearTodos: router.mutation({
    mutationFn: async () => {
      todos = [];
      return todos;
    },
  }),
});

export default todoRouter;
