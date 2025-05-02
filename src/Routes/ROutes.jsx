import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";

import Roots from '../Layouts/Roots';
import Home from '../Pages/Home/Home';
import CategoryNews from '../Pages/CategoryNews/CategoryNews';
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Roots></Roots>,
      children:[
        {
          path:"",
          element:<Home></Home> 
        },
        {
          path:"/category/:id",
          element:<CategoryNews></CategoryNews>,
          loader:()=>fetch('/news.json')


        }
      ]
    },
    {
      path:'/auth',
      element: <h2>Authentecaton layout</h2>
    },
    {
      path:'/news',
      element: <h2>Authen news</h2>
    }
  ]);



export default router;