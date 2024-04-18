export type GlobalState = {
  theme: "dark" | "light";
};

export type Todo = {
  id: number;
  content: string;
  isDone: boolean;
};

export type CreateTodoMutation = {
  content: string;
};

export type DeleteTodoMutation = {
  id: number;
};