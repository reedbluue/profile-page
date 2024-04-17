import {TerminalContext} from "../context/TerminalContext.ts";
import {PropsWithChildren, useState} from "react";

export const TerminalProvider = (props: PropsWithChildren) => {
  const [title, setTitle] = useState("igor@localhost");

  const setTitleHandler = (title: string) => {
    setTitle(title + " ~ igor@localhost");
    document.title = title + " - Igor Oliveira";
  }

  return (
      <TerminalContext.Provider value={{
        title,
        setTitle: setTitleHandler
      }}>
        {props.children}
      </TerminalContext.Provider>
  )
}