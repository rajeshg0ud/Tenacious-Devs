import React from "react";
import ReactDOM from 'react-dom/client'
import Home from "./Components/Home";
import './index.css'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import NavBar from "./Components/NavBar";

const AppLayout =()=>{

  return(
    <div className=" vollkorn">
      <NavBar />
      <Outlet />
    </div>
  )
}

const AppRouter= createBrowserRouter([{
   path:"/",
   element:<AppLayout/>,
   children:[{
    path:'/',
    element:<Home />
   }]
}])

const root= ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={AppRouter} />)