import {HTMLAttributes, ReactNode, useRef} from "react";
import {Terminal} from "./index.ts";

interface IProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  children: ReactNode;
}

export const TerminalBody = (props: IProps) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
      <div {...props} ref={ref}
           className={"max-w-[960px] max-h-[600px] w-full h-full rounded-lg overflow-hidden"}>
        <Terminal.Bar title={props.title}/>
        <div className={"h-full w-full bg-black p-4"}>
          {props.children}
        </div>
      </div>
  );
}