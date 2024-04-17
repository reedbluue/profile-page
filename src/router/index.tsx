import {createHashRouter} from "react-router-dom";
import {BasePage} from "../pages/BasePage.tsx";
import {ProfilePage} from "../pages/ProfilePage.tsx";
import {TerminalProvider} from "../providers/TerminalProvider.tsx";
import {ErrorPage} from "../pages/ErrorPage.tsx";
import {StackPage} from "../pages/StackPage.tsx";
import {ContatoPage} from "../pages/ContatoPage.tsx";

export const router = createHashRouter([
  {
    path: "/",
    element: <TerminalProvider><BasePage/></TerminalProvider>,
    children: [
      {
        index: true,
        element: <ProfilePage/>
      },
      {
        path: "/stacks",
        element: <StackPage/>
      },
      {
        path: "/contato",
        element: <ContatoPage/>
      }
    ],
    errorElement: <TerminalProvider><BasePage><ErrorPage/></BasePage></TerminalProvider>
  }
])