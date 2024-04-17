import {HTMLAttributes} from "react";

export const ButtonKbd = (props: HTMLAttributes<HTMLButtonElement>) => {
  return (
      <button {...props}>
        <kbd
            className={'min-h-[30px] inline-flex justify-center items-center py-2 px-2.5 bg-white '
                + 'border border-gray-200 font-mono text-lg text-gray-800 rounded-md shadow-[0px_2px_0px_0px_rgba(0,0,0,0.08)] '
                + 'dark:bg-black dark:border-neutral-700 dark:text-neutral-200 dark:shadow-[0px_4px_0px_0px_rgba(255,255,255,0.1)] '
                + 'select-none active:border-transparent active:shadow-transparent active:translate-y-[4px] gap-2 ' + props.className}>
          {props.children}
        </kbd>
      </button>
  )
}