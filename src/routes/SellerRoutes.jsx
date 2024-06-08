import UseSeller from "../hooks/UseSeller";
import UseAuth from "../hooks/UseAuth";
import { Navigate, useLocation } from "react-router-dom";


const SellerRoutes = ({children}) => {
    const {user,loading}=UseAuth()
    const [isSeller,isSellerLoading]=UseSeller()
   
    const location=useLocation()
  if (loading || isSellerLoading) {
    return <progress className="progress w-56"></progress>    
  } 
  if (user && isSeller) {
    return children
  }
  return <Navigate to={"/login"} state={{from:location}} replace></Navigate>;
};

export default SellerRoutes;