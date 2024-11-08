import {TerminalContext} from "../context/TerminalContext.ts";
import {useContext, useEffect} from "react";
import Typewriter from 'typewriter-effect';
import {Typography} from "../layout/Typography";

export const ErrorPage = () => {
  const terminal = useContext(TerminalContext);
  useEffect(() => {
    terminal.setTitle("Error");
  }, []);

  return (
      <div className={"h-full w-full overflow-y-auto"}>
        <Typography.terminalText>
          <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 25,
                strings: ["Something went wrong!",
                  "Try access again using the URL bar."]
              }}
          />
        </Typography.terminalText>
      </div>
  );
}