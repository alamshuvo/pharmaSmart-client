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
import Error from "../pages/Error/Error";
import DashBoard from "../layouts/DashBoard";

import ManageUsers from "../pages/Dashboard/Dashboard/ManageUsers/ManageUsers";
import ManageCategory from "../pages/Dashboard/Dashboard/ManageCategory/ManageCategory";
import Paymentmanagement from "../pages/Dashboard/Dashboard/PaymentManagement/Paymentmanagement";
import SalesReport from "../pages/Dashboard/Dashboard/SalesReport/SalesReport";
import Advertisement from "../pages/Dashboard/Dashboard/Advertisement/Advertisement";

import ManageMedicine from "../pages/Dashboard/Seller/ManageMedicine/ManageMedicine";
import PaymentSeller from "../pages/Dashboard/Seller/PaymentSeller/PaymentSeller";
import AdvertisementSeller from "../pages/Dashboard/Seller/Advertisement/AdvertisementSeller";
import DashboardHome from "../pages/Dashboard/Common/DashboardHome";
import PrivateRoutes from "./PrivateRoutes";
import AdminRoutes from "./AdminRoutes";
import SellerRoutes from "./SellerRoutes";
import Cart from "../pages/Cart/Cart";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayouts></Mainlayouts>,
      errorElement:<Error></Error>,
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
          path:"/categorydetails/:id",
          element:<CategoryDetails></CategoryDetails>,
          // loader:({params})=>fetch(`http://localhost:5000/managecategory/${params.id}`)
        },
        {
          path:"/updateprofile",
          element:<UpdateProfile></UpdateProfile>
        },
        {
          path:"/shop",
          element:<Shop></Shop>
        },
        {
          path:"/carts",
          element:<Cart></Cart>
        }
      ]
    },
    {
      path:`dashboard`,
      element:<PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>,
      errorElement:<Error></Error>,
      children:[
        {
          index:true,
          element:<DashboardHome></DashboardHome>
        },

        // admin related routes
        {
          path:"manageusers",
          element:<AdminRoutes><ManageUsers></ManageUsers></AdminRoutes>
        },
        {
          path:"managecategory",
          element:<AdminRoutes><ManageCategory></ManageCategory></AdminRoutes>
        },
        {
          path:"paymentmanagement",
          element:<AdminRoutes><Paymentmanagement></Paymentmanagement></AdminRoutes>
        },
        {
          path:"salesreport",
          element:<AdminRoutes><SalesReport></SalesReport></AdminRoutes>
        },
        {
          path:'advertise',
          element:<AdminRoutes><Advertisement></Advertisement></AdminRoutes>
        },


        // seller related routes

     
       {
        path:"managemedicine",
        element:<SellerRoutes><ManageMedicine></ManageMedicine></SellerRoutes>
       },
       {
        path:"sellerpayment",
        element:<SellerRoutes><PaymentSeller></PaymentSeller></SellerRoutes>
       },
       {
        path:"askadvertisement",
        element:<SellerRoutes><AdvertisementSeller></AdvertisementSeller></SellerRoutes>
       },

        // user related routes
      
      ]
    }
  ]);

export default router;