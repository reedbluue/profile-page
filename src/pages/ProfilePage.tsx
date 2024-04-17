import {Typography} from "../layout/Typography";
import {TerminalContext} from "../context/TerminalContext.ts";
import {useContext, useEffect, useState} from "react";
import Typewriter from 'typewriter-effect';
import classNames from "classnames";

export const ProfilePage = () => {
  const terminal = useContext(TerminalContext);
  const [step, setStep] = useState(0);
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    terminal.setTitle("Perfil");
    setStep(0);
  }, []);

  const nextStep = () => {
    setStep(step + 1);
  }

  const setAnimationHandler = () => {
    if (animation) return;
    setAnimation(true);
    setTimeout(() => {
      setAnimation(false);
    }, 250);
  }

  return (
      <div className={"h-full w-full overflow-y-auto"}>
        {step === 0 &&
            <Typography.terminalText>
              <Typewriter
                  onInit={(typewriter) => {
                    typewriter.typeString(
                        'python perfil.py').pauseFor(1000).callFunction(nextStep)
                        .start();
                  }}

                  component={"p"}
              />
            </Typography.terminalText>}

        <div className={"flex flex-col"}>
          {step >= 1 &&
              <div>
                <img src={"./img/profile.jpg"} alt={"profile image"}
                     className={"w-[150px] h-[150px] sm:w-[220px] sm:h-[220px] float-left mr-4 mb-4 "
                         + classNames({
                           "animate-pulse animate-once animate-ease-linear animate-duration-250": animation
                         })} onClick={setAnimationHandler}/>
                <Typography.terminalText className={"text-justify"}>
                  <Typewriter
                      onInit={(typewriter) => {
                        typewriter.changeDelay(15).typeString(
                            '<b>Igor "Reed" Oliveira</b><br/>'
                            + '<br/>'
                            + '- Desenvolvedor Full Stack.<br/>'
                            + '- 21 anos, estudante de Engenharia da Computação e entusiasta da tecnologia.<br/>'
                            + '<br/>'
                            + '- Amante dos jogos eletrônicos competitivos, jogos de tabuleiro e piadas ruins.<br/>'
                            + '- Pra surpresa de muitos, não amante de café e adepto a Javaterapia ☕<br/>')
                            .pauseFor(500).callFunction(nextStep)
                            .start();
                      }}
                  />
                </Typography.terminalText>
              </div>}
          {step >= 2 &&
              <>
                <br/>
                <Typography.terminalText
                    className={"text-justify block clear-both animate-fade-up animate-once animate-duration-500 animate-ease-linear"}>
                  Aproveitando que está aqui, sinta-se a vontade para ver mais informações sobre
                  minhas stacks, meu Github e informações de contato 👋
                </Typography.terminalText>
                <div className={"h-14"}></div>
              </>}
        </div>
      </div>
  );
}