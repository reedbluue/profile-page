import {TerminalContext} from "../context/TerminalContext.ts";
import {useContext, useEffect} from "react";
import Typewriter from 'typewriter-effect';
import {Typography} from "../layout/Typography";

export const ErrorPage = () => {
  const terminal = useContext(TerminalContext);
  useEffect(() => {
    terminal.setTitle("Erro");
  }, []);

  return (
      <div className={"h-full w-full overflow-y-auto"}>
        <Typography.terminalText>
          <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 25,
                strings: ["Algo errado aconteceu!",
                  "Tente acessat novamente pela barra de navegação."]
              }}
          />
        </Typography.terminalText>
      </div>
  );
}