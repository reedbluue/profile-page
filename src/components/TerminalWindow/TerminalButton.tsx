import classNames from "classnames";

interface IProps {
  color: "red" | "yellow" | "green";
}

export const TerminalButton = (props: IProps) => {
  return (
      <div {...props} className={"h-[16px] w-[16px] rounded-full hover:opacity-80 hover:shadow " + classNames({
        "bg-red": props.color === "red",
        "bg-yellow": props.color === "yellow",
        "bg-green": props.color === "green",
      })}>
      </div>
  );
}