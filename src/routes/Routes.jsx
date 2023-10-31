

import Catagory from "../Componentes/Catagory/Catagory";
import NewsLayout from "../Componentes/Layout/NewsLayout";
import Main from "../Componentes/Main/Main";
import Home from "../Componentes/Pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import News from "../Componentes/Pages/New/News";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[{

   Path:"/",
   element:<Home> </Home>
   
  },
  {
    path:"/category/:id",
    element:<Catagory> </Catagory>,
    loader:({params})=> fetch(`http://localhost:5000/catagories/${params.id}`)



  }





]
  },


  {

    path:'news',
    element:<NewsLayout> </NewsLayout>,
    children:[{

path:':id',
element:<News></News>


    }]
  }


])

export default router