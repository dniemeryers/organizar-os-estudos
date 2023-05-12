import { createBrowserRouter } from "react-router-dom";

import {Inicio} from "../introducao/inicio/index";
import {Body} from "../introducao/Body/index";





const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />,
  },{
    path: "/body",
    element: <Body />,
  }
]);

export default router;

