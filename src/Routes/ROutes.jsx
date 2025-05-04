import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";

import Roots from '../Layouts/Roots';
import Home from '../Pages/Home/Home';
import CategoryNews from '../Pages/CategoryNews/CategoryNews';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Authentication from '../Layouts/Authentication';
import NewsDetails from '../Pages/NewsDetails/NewsDetails';
import PrivateRoutes from '../Provider/PrivateRoutes';
import Loading from '../Provider/Loading/Loading';
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
          loader:()=>fetch('/news.json'),
          hydrateFallbackElement:<Loading></Loading>


        }
      ]
    },
    {
      path:'/auth',
      element: <Authentication></Authentication>,
      children:[
        {
          path:"/auth/login",
          element:<Login></Login>
        },
        {
          path:"/auth/register",
          element:<Register></Register>
        }
      ]

    },
    {
      path:'/news-details/:id',
      element:<PrivateRoutes>
         <NewsDetails></NewsDetails>
      </PrivateRoutes>,
      loader:()=>fetch("/news.json"),
      hydrateFallbackElement:<Loading></Loading>
    },
    {
      path:"/*",
      element: <h2>Error 404</h2>
    }

  ]);



export default router;