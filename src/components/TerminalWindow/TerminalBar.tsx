import {HTMLAttributes} from "react";
import {Typography} from "../../layout/Typography";
import {Terminal} from "./index.ts";

interface IProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
}

export const TerminalBar = (props: IProps) => {
  return (
      <div {...props}
           className={"h-[48px] w-full bg-white flex justify-center items-center shadow px-4 select-none"}>
        <div className={"flex gap-[8px]"}>
          <Terminal.Button color={"red"}/>
          <Terminal.Button color={"yellow"}/>
          <Terminal.Button color={"green"}/>
        </div>
        <div className={"flex-grow flex justify-center items-center"}>
          <Typography.terminalTitle>
            {props.title}
          </Typography.terminalTitle>
        </div>
      </div>
  );
}