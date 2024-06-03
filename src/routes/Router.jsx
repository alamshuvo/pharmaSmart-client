import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Mainlayouts from "../layouts/Mainlayouts/Mainlayouts";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Home/Signup/SignUp";
import CategoryDetails from "../pages/CategoryDetails/CategoryDetails";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import Shop from "../pages/Shop/Shop";



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
        },
        {
          path:"/signup",
          element:<SignUp></SignUp>
        },
        {
          path:"/categorydetails",
          element:<CategoryDetails></CategoryDetails>
        },
        {
          path:"/updateprofile",
          element:<UpdateProfile></UpdateProfile>
        },
        {
          path:"/shop",
          element:<Shop></Shop>
        }
      ]
    },
  ]);

export default router;