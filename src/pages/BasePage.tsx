import {Terminal} from "../components/TerminalWindow";
import {Outlet} from "react-router-dom";
import {PropsWithChildren, useContext} from "react";
import {TerminalContext} from "../context/TerminalContext.ts";
import {Navbar} from "../components/Navbar.tsx";

export const BasePage = (props: PropsWithChildren) => {
  const terminal = useContext(TerminalContext);

  return (
      <div
          className={"h-screen w-screen bg-bg flex flex-col gap-6 justify-center items-center p-3"}>
        <Terminal.Body title={terminal.title}><Outlet/>{props.children ? props.children : null}
        </Terminal.Body>
        <Navbar/>
      </div>
  );
}