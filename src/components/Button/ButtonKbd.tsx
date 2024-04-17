import {HTMLAttributes} from "react";

export const ButtonKbd = (props: HTMLAttributes<HTMLButtonElement>) => {
  return (
      <button {...props}>
        <kbd
            className={'min-h-[30px] inline-flex justify-center items-center py-2 px-2.5 '
                + 'border font-mono text-lg rounded-md '
                + 'bg-black border-neutral-700 text-neutral-200 shadow-[0px_4px_0px_0px_rgba(255,255,255,0.1)] '
                + 'select-none active:border-transparent active:shadow-transparent active:translate-y-[4px] gap-2 '
                + props.className}>
          {props.children}
        </kbd>
      </button>
  )
}