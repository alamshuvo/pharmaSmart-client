import { useLoaderData, useNavigate } from "react-router-dom";
import Title from "../Home/Home/Title/Title";
import Helmeta from "../../components/Helmet/Helmeta";
import { FaShoppingCart } from "react-icons/fa";

import CatModal from "./CatModal";
import { FaEmpire } from "react-icons/fa6";
import UseCart from "../../hooks/UseCart";
import UseAuth from "../../hooks/UseAuth";
import UseAxiosSecure from "../../hooks/UseAxiosSucure";
import Swal from "sweetalert2";
// import CategoryModal from "./categoryModal";




const CategoryDetails = () => {
    const data=useLoaderData();
    console.log(data);
    const [,refetch]=UseCart()
    const {user}=UseAuth()
    const navigate=useNavigate()
    const axiosSecure=UseAxiosSecure()

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
    
    return (
        <div className="font-popins font-bold my-20">
            <Helmeta title={"Category Details"}></Helmeta>
           <Title heading={"Category"} short={"Category Details"}></Title>
           <div className="overflow-x-auto my-20">
           {
            data?.length>0? <table className="table font-popins">
            {/* head */}
            <thead>
              <tr>
                <th>sl</th>
                <th>image</th>
                <th>Name</th>
                <th>Compnay</th>
                <th>Add to cart</th>
                <th>Category</th>
                <th>View details</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {data?.map((item, index) => (
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
                  
                    {item.category}
                  </th>
                  <th>
                    
                    <CatModal item={item}></CatModal>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>: <div>
            <div className="flex justify-center flex-col items-center text-2xl font-bold ">
                <h1 className="flex justify-center items-center">Opps <FaEmpire></FaEmpire> </h1>
                <h1>Medicine Not Found </h1>
            </div>
          </div>
           }
      </div>
        </div>
    );
};

export default CategoryDetails;