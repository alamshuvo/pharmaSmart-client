import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import UseAxiosPublic from "./UseAxiosPublic";
import UseAxiosSecure from "./UseAxiosSucure";


const UseCart = () => {
    const axiosSecure=UseAxiosSecure();
    // const axiosPublic=UseAxiosPublic()
    const {user}=UseAuth()
  const {data:carts,refetch}=useQuery({
    queryKey:["cart",user?.email],
    queryFn:async ()=>{
        const res=await axiosSecure.get(`/carts?email=${user.email}`);
        return res.data;
    }
  })
  return [carts,refetch]
};

export default UseCart;