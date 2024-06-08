import { useQuery } from "@tanstack/react-query";
import Helmeta from "../../../../components/Helmet/Helmeta";
import UseAxiosPublic from "../../../../hooks/UseAxiosPublic";
import Title from "../../../Home/Home/Title/Title";
import ManageModal from "./ManageModal";
import { FaDeleteLeft, FaUpDown } from "react-icons/fa6";
import Swal from "sweetalert2";

const ManageCategory = () => {
  const axiosPublic = UseAxiosPublic();
  const {
    data: managecategory = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["managecategory"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/managecategory`);
      return res.data;
    },
  });


// handaler function 


const handleUpdate=(id)=>{

}


const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/managecategory/category/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              // console.log(data);
              Swal.fire({
                title: "Deleted!",
                text: "Your category has been deleted.",
                icon: "success",
              });
              refetch();
            }
          });
      }
    });
  };






  return (
    <div className="">
      <Helmeta title={"manageCategory"}></Helmeta>
      <Title heading={"category"} short={"manage category"}></Title>
      <div className="my-20">
        <div className="flex justify-center items-center my-20">
        <ManageModal refetch={refetch}></ManageModal>
        </div>
        <div className="overflow-x-auto p-2 w-full font-popins  font-bold">
          <table className="table ">
            {/* head */}
            <thead>
              <tr>
                <th>SL</th>
                <th>Category</th>
                <th>Email</th>
                <th>photo</th>
                <th>Delete</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {managecategory?.map((user, index) => (
                <tr key={user._id} className="bg-base-200 my-3">
                  <th>{index + 1}</th>
                  <td>{user?.category}</td>
                  <td>{user?.email}</td>
                  <td>
                    <img
                      src={user?.photo}
                      className="w-[100px] h-[100px]"
                      alt=""
                    />
                  </td>
                  <td>
                    <button onClick={()=>handleDelete(user?._id)} className="btn">    <FaDeleteLeft className="text-2xl text-red-600"></FaDeleteLeft>{" "} </button>
                 
                  </td>
                  <td>
                    <button  onClick={()=>handleUpdate(user?._id)} className="btn"> <FaUpDown className="text-green-600 text-2xl"></FaUpDown> </button>
                 
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageCategory;
