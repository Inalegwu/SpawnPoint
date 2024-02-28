import { observable } from "@legendapp/state";

export const globalState = observable<{
  theme: "light" | "dark";
}>({
  theme: "dark",
});
