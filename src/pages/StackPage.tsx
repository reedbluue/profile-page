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
          <Typography.terminalTextBold>As minhas Stacks:</Typography.terminalTextBold>
          <Typography.terminalText>{"Aqui estão as principais tecnologias e frameworks que eu utilizo/utilizei durante toda minha jornada no mundo da programação."}</Typography.terminalText>
        </div>
        <div
            className={"flex gap-4 justify-between flex-wrap items-start"}>
          <div>
            <Typography.terminalTextBold>
              Linguagens e Frameworks:
            </Typography.terminalTextBold>
            <Typography.terminalText
                className={"text-justify"}>
              <ul className={"list-disc list-inside"}>
                <li>Java com Sringboot</li>
                <li>NodeJS/TS com Express e TS.ED</li>
                <li>React com ViteTS e Tailwind</li>
                <li>Python com FastAPI</li>
                <li>C# com ASP.NET</li>
              </ul>
            </Typography.terminalText>
          </div>

          <div>
            <Typography.terminalTextBold>
              Outras competências:
            </Typography.terminalTextBold>
            <Typography.terminalText
                className={"text-justify"}>
              <ul className={"list-disc list-inside"}>
                <li>HTML e CSS avançado</li>
                <li>SQL e NOSQL</li>
                <li>Testes unitário e integrados.</li>
                <li>Docker avançado</li>
                <li>Git e Github</li>
                <li>SCRUM e Gitflow</li>
              </ul>
            </Typography.terminalText>
          </div>

          <div>
            <Typography.terminalTextBold>
              Idiomas:
            </Typography.terminalTextBold>
            <Typography.terminalText
                className={"text-justify"}>
              <ul className={"list-disc list-inside"}>
                <li>Portugês nativo</li>
                <li>Inglês técnico</li>
              </ul>
            </Typography.terminalText>
          </div>
        </div>
        <div className={"h-[100px] select-none"}>.</div>
      </div>
  );
}