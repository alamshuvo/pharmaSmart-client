import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../hooks/UseAxiosPublic";
import Title from "../Home/Home/Title/Title";
import { FaEye, FaShoppingCart, FaTrashAlt } from "react-icons/fa";

import Modalad from "./Modal";
import UseAuth from "../../hooks/UseAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../hooks/UseAxiosSucure";
import UseCart from "../../hooks/UseCart";

const Shop = () => {
  // const axiosPublic = UseAxiosPublic();
  const axiosSecure =UseAxiosSecure()
  const { user } = UseAuth();
  const [,refetch]=UseCart()
  const navigate=useNavigate()

  const {
    data: medicine = [],
    isPending,
  } = useQuery({
    queryKey: ["medicine"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/medicine`);
      return res.data;
    },
  });
  // console.log(medicine);

  const handleShopingCart = async (item) => {
    const a = {
      name: item?.name,
      medicineId:item._id,
      description: item?.description,
      company: item?.company,
      category: item?.category,
      discount: item?.discount,
      price: item?.priceperunit,
      unit: item?.unit,
      sellerEmail: item?.email,
      generic: item?.generic,
      photo:item?.photo,
      buyerEmal: user?.email || "",
      total:1
     
    };
   if (!user || !user?.email) {
     
    navigate("/login")   
   }
 else{
  axiosSecure.post("/carts", a)
  .then(res=>{
  if (res.data.insertedId) {
    Swal.fire({
      title: "Product added sucessfully",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
      }
    });
  }
  refetch()
  
  })
 
 }
    
  };

  if (isPending) {
    return <progress className="progress w-56"></progress>;
  }

  return (
    <div className="my-20 font-popins font-bold text-2xl">
      <Title heading={"Shop"} short={"shop more"}></Title>

      <div className="overflow-x-auto">
        <table className="table font-popins">
          {/* head */}
          <thead>
            <tr>
              <th>sl</th>
              <th>image</th>
              <th>Name</th>
              <th>Compnay</th>
              <th>Add to cart</th>
              <th>Veiw Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {medicine?.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td className="uppercase ">{item.company}</td>
                <th>
                  <button
                    onClick={() => handleShopingCart(item)}
                    className="btn btn-ghost btn-lg bg-primary"
                  >
                    <FaShoppingCart className="md:text-2xl text-white"></FaShoppingCart>
                  </button>
                </th>
                <th>
                  <Modalad item={item}></Modalad>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Shop;
