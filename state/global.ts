import { observable } from "@legendapp/state";
import { GlobalState } from "../utils/types";

export const globalState = observable<GlobalState>({
  theme: "dark",
});
