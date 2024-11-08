import {Button} from "./Button";
import {GitHub} from "react-feather";
import {useNavigate} from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
      <div className={"grid grid-cols-2 grid-rows-2 gap-2 sm:flex"}>
        <Button.Kbd onClick={() => navigate("/")} className={"w-full h-full sm:w-auto sm:h-auto"}>Profile</Button.Kbd>
        <Button.Kbd onClick={() => navigate("/stacks")} className={"w-full h-full sm:w-auto sm:h-auto"}>Stack</Button.Kbd>
        <Button.Kbd onClick={() => navigate("/contato")} className={"w-full h-full sm:w-auto sm:h-auto"}>Contact me</Button.Kbd>
        <Button.Kbd onClick={() => {
          window.location.href = "https://github.com/reedbluue";
        }} className={"w-full h-full sm:w-auto sm:h-auto"}><GitHub size={15}/>Github</Button.Kbd>
      </div>
  )
}