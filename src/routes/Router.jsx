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
import AdminHome from "../pages/Dashboard/Dashboard/AdminHome/AdminHome";
import ManageUsers from "../pages/Dashboard/Dashboard/ManageUsers/ManageUsers";
import ManageCategory from "../pages/Dashboard/Dashboard/ManageCategory/ManageCategory";
import Paymentmanagement from "../pages/Dashboard/Dashboard/PaymentManagement/Paymentmanagement";
import SalesReport from "../pages/Dashboard/Dashboard/SalesReport/SalesReport";
import Advertisement from "../pages/Dashboard/Dashboard/Advertisement/Advertisement";
import PaymentHistory from "../pages/Dashboard/User/PaymentHistory/PaymentHistory";
import SellerHome from "../pages/Dashboard/Seller/SellerHome/SellerHome";
import ManageMedicine from "../pages/Dashboard/Seller/ManageMedicine/ManageMedicine";
import PaymentSeller from "../pages/Dashboard/Seller/PaymentSeller/PaymentSeller";
import AdvertisementSeller from "../pages/Dashboard/Seller/Advertisement/AdvertisementSeller";



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
    {
      path:"dashboard",
      element:<DashBoard></DashBoard>,
      errorElement:<Error></Error>,
      children:[
        {
          path:"home",
          element:<AdminHome></AdminHome>
        },

        // admin related routes
        {
          path:"manageusers",
          element:<ManageUsers></ManageUsers>
        },
        {
          path:"managecategory",
          element:<ManageCategory></ManageCategory>
        },
        {
          path:"paymentmanagement",
          element:<Paymentmanagement></Paymentmanagement>
        },
        {
          path:"salesreport",
          element:<SalesReport></SalesReport>
        },
        {
          path:'advertise',
          element:<Advertisement></Advertisement>
        },


        // seller related routes

       {
        path:"sellerhome",
        element:<SellerHome></SellerHome>
       },
       {
        path:"managemedicine",
        element:<ManageMedicine></ManageMedicine>
       },
       {
        path:"sellerpayment",
        element:<PaymentSeller></PaymentSeller>
       },
       {
        path:"askadvertisement",
        element:<AdvertisementSeller></AdvertisementSeller>
       },

        // user related routes
        {
          path:'payment',
          element:<PaymentHistory></PaymentHistory>
        }
      ]
    }
  ]);

export default router;