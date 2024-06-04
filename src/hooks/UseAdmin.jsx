import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import UseAxiosSecure from "./UseAxiosSucure";



const UseAdmin = () => {
    const axiousSecure=UseAxiosSecure();
    const {user}=UseAuth();
 const {data:isAdmin,isPending:isAdminLoading}=useQuery({
    queryKey:["isAdmin",user?.email],
    queryFn:async()=>{
        const res=await axiousSecure.get(`/users/admin/${user?.email}`);
        return res.data.isAdmin
    }
 })
 return [isAdmin,isAdminLoading]
};

export default UseAdmin;