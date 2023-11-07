

import Catagory from "../Componentes/Catagory/Catagory";
import NewsLayout from "../Componentes/Layout/NewsLayout";
import Main from "../Componentes/Main/Main";
import Home from "../Componentes/Pages/Home/Home";
import { Navigate, createBrowserRouter } from "react-router-dom";
import News from "../Componentes/Pages/New/News";
import NewsDet from "../Componentes/News/Newsdet";
import LoginLayout from "../LoginLayout/LoginLayout";
import Login from "../Componentes/Pages/Login/Login";
import Register from "../Componentes/Pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([


  {

    path:'/',
    element:<LoginLayout> </LoginLayout>,
    children:[

      {
        path:'/',
        element:<Navigate to='/catagory/0'> </Navigate>

      },
      {

        path:'/login',
        element:<Login> </Login>,


      },




    
    


    {

      path:'/register',
      element:<Register> </Register>

    },
    
  
  
  ]
},

  




  {
    path: "catagory",
    element: <Main/>,
    children: [
    
      {
      path: ':id',
      element: <Catagory> </Catagory>,
      loader: ({ params }) => fetch(`http://localhost:5000/catagories/${params.id}`)


    }





    ]
  },


  {

    path: 'news',
    element: <NewsLayout> </NewsLayout>,
    children: [{

      path: ':id',
      element: <PrivateRoute><NewsDet></NewsDet>  </PrivateRoute>   ,
      loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)



    }]
  }


])

export default router