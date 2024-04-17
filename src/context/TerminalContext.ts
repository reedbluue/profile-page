import {createContext} from "react";

export interface ITerminalContext {
  title: string;
  setTitle: (title: string) => void;
}

export const TerminalContext = createContext<ITerminalContext>({
  title: "",
  setTitle: () => {
  }
});