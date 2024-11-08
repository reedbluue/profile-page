import {Typography} from "../layout/Typography";
import {TerminalContext} from "../context/TerminalContext.ts";
import {useContext, useEffect} from "react";

export const ContatoPage = () => {
  const terminal = useContext(TerminalContext);

  useEffect(() => {
    terminal.setTitle("Contact me");
  }, []);

  return (
      <div className={"h-full w-full overflow-y-auto flex flex-col gap-4 animate-fade-up animate-once animate-duration-500 animate-ease-linear"}>
        <Typography.terminalTextBold>Contact information:</Typography.terminalTextBold>
        <div className={"flex flex-col gap-2"}>
          <div className={"flex flex-wrap gap-2"}>
            <Typography.terminalTextBold>Name:</Typography.terminalTextBold>
            <Typography.terminalText>{"Igor Oliveira"}</Typography.terminalText>
          </div>
          <div className={"flex flex-wrap gap-2"}>
            <Typography.terminalTextBold>Email:</Typography.terminalTextBold>
            <Typography.terminalText>{"igor.emmanuel.olv@gmail.com"}</Typography.terminalText>
          </div>
        </div>
        <Typography.terminalText>I'm waiting your contact 👋</Typography.terminalText>
      </div>
  );
}