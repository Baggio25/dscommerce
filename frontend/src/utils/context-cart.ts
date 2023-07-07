/* eslint-disable @typescript-eslint/no-empty-function */

import { createContext } from "react";

export type ContextCartCountType = {
  contextCartCount: number,
  setContextCartCount: (contextCartCount: number) => void;
}

export const ContextCartCount = createContext<ContextCartCountType>({
  contextCartCount: 0,
  setContextCartCount: () => {}
})