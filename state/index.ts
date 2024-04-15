import { observable } from "@legendapp/state";
import type { GlobalState } from "../utils/types";

export const globalState = observable<GlobalState>({
  theme: "dark",
});
