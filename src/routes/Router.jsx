import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Mainlayouts from "../layouts/Mainlayouts/Mainlayouts";
import Home from "../pages/Home/Home/Home";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayouts></Mainlayouts>,
      children:[
        {
            index:true,
            element:<Home></Home>
        }
      ]
    },
  ]);

export default router;