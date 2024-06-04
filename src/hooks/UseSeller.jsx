import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import UseAxiosSecure from "./UseAxiosSucure";



const UseAdmin = () => {
    const axiousSecure=UseAxiosSecure();
    const {user}=UseAuth();
 const {data:isSeller,isPending:isSellerLoading}=useQuery({
    queryKey:["isSeller",user?.email],
    queryFn:async()=>{
        const res=await axiousSecure.get(`/users/seller/${user?.email}`);
        return res.data.isSeller
    }
 })
 return [isSeller,isSellerLoading]
};

export default UseAdmin;