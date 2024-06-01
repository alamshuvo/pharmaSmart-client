import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Mainlayouts from "../layouts/Mainlayouts/Mainlayouts";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayouts></Mainlayouts>,
      children:[
        {
            index:true,
            element:<Home></Home>
        },
        {
          path:"/login",
          element:<Login></Login>
        }
      ]
    },
  ]);

export default router;