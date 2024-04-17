import {HTMLProps, ReactNode} from "react";

export const Paragraph = (props: HTMLProps<HTMLParagraphElement> & { children: ReactNode }) => {
  return (
      <p {...props} className="text-md text-white">{props.children}</p>
  )
}

export const ParagraphBold = (props: HTMLProps<HTMLParagraphElement> & { children: ReactNode }) => {
  return (
      <p {...props} className="text-md text-white font-bold">{props.children}</p>
  )
}

export const TerminalText = (props: HTMLProps<HTMLParagraphElement> & { children: ReactNode }) => {
  return (
      <p {...props} className={"text-lg text-white " + props.className}>{props.children}</p>
  )
}

export const TerminalTextBold = (props: HTMLProps<HTMLParagraphElement> & {
  children: ReactNode
}) => {
  return (
      <p {...props} className="text-lg text-white font-bold">{props.children}</p>
  )
}

export const TerminalTitle = (props: HTMLProps<HTMLParagraphElement> & { children: ReactNode }) => {
  return (
      <p {...props} className="text-md text-black font-bold">{props.children}</p>
  )
}

export const Heading1Bold = (props: HTMLProps<HTMLHeadingElement> & { children: ReactNode }) => {
  return (
      <p {...props} className="text-3xl text-text font-bold">{props.children}</p>
  )
}



