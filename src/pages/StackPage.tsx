import {Typography} from "../layout/Typography";
import {TerminalContext} from "../context/TerminalContext.ts";
import {useContext, useEffect} from "react";

export const StackPage = () => {
  const terminal = useContext(TerminalContext);

  useEffect(() => {
    terminal.setTitle("Stacks");
  }, []);

  return (
      <div
          className={"h-full w-full overflow-y-auto flex flex-col gap-8 animate-fade-up animate-once animate-duration-500 animate-ease-linear"}>
        <div className={"flex flex-col gap-2"}>
          <Typography.terminalTextBold>My stacks:</Typography.terminalTextBold>
          <Typography.terminalText>{"Here are the main technologies and frameworks that I have used throughout my journey in the world of programming."}</Typography.terminalText>
        </div>
        <div
            className={"flex gap-4 justify-between flex-wrap items-start"}>
          <div>
            <Typography.terminalTextBold>
              Languages and Frameworks:
            </Typography.terminalTextBold>
            <Typography.terminalText
                className={"text-justify"}>
              <ul className={"list-disc list-inside"}>
                <li>Java with Spring Boot</li>
                <li>C# with ASP.NET</li>
                <li>NodeJS/TS with Express and TS.ED</li>
                <li>React with ViteTS and Tailwind</li>
                <li>Vue with ViteTS and Tailwind</li>
                <li>Python with FastAPI</li>
              </ul>
            </Typography.terminalText>
          </div>

          <div>
            <Typography.terminalTextBold>
              Others skills:
            </Typography.terminalTextBold>
            <Typography.terminalText
                className={"text-justify"}>
              <ul className={"list-disc list-inside"}>
                <li>HTML and CSS</li>
                <li>SQL and NOSQL</li>
                <li>Unit and integrated tests</li>
                <li>Docker and Kubernetes</li>
                <li>Deploy AWS</li>
                <li>Git and Github</li>
                <li>Bash and Shell script</li>
                <li>SCRUM and Gitflow</li>
              </ul>
            </Typography.terminalText>
          </div>

          <div>
            <Typography.terminalTextBold>
              Natural languages:
            </Typography.terminalTextBold>
            <Typography.terminalText
                className={"text-justify"}>
              <ul className={"list-disc list-inside"}>
                <li>Native Portuguese</li>
                <li>English A2</li>
              </ul>
            </Typography.terminalText>
          </div>
        </div>
        <div className={"h-[100px] select-none"}>.</div>
      </div>
  );
}