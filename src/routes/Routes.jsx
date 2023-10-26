

import Main from "../Componentes/Main/Main";
import Home from "../Componentes/Pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[{

   Path:"/",
   element:<Home> </Home>
   



    }],
  }
])

export default router