import { FaSellcast, FaUsers } from "react-icons/fa";
import Helmeta from "../../../../components/Helmet/Helmeta";
import UseAxiosPublic from "../../../../hooks/UseAxiosPublic";
import Title from "../../../Home/Home/Title/Title";
import { useQuery } from "@tanstack/react-query";
import { button } from "@nextui-org/react";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const axiosPublic = UseAxiosPublic();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users");
      return res.data;
    },
  });

  const handleusertoseller=(user)=>{
    console.log(user._id);
   axiosPublic.patch(`/users/seller/${user._id}`)
   .then(res=>{
    console.log(res.data);
    if (res.data.modifiedCount>0) {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Admin make ${user?.name} users to seller`,
            showConfirmButton: false,
            timer: 1500
          });
    }
    refetch()
   })
  }


  const handleselertouser=(user)=>{
    axiosPublic.patch(`/users/user/${user._id}`)
    .then(res=>{
     console.log(res.data);
     if (res.data.modifiedCount>0) {
         Swal.fire({
             position: "top-end",
             icon: "success",
             title: `Admin make ${user?.name} seller to user`,
             showConfirmButton: false,
             timer: 1500
           });
     }
     refetch()
    })
  }


  const handleAdmin=()=>{
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your Are The Ultimate Admin",
        showConfirmButton: false,
        timer: 1500
      });
  }

  console.log(users);
  return (
    <div>
      <Helmeta title={"ManageUsers"}></Helmeta>
      <Title heading={"How Many??"} short={"Manage Users"}></Title>
      <div>
        <h1 className="md:text-3xl font-bold font-popins">
          All Users : {users.length}
        </h1>
      </div>
      <div className="overflow-x-auto w-full font-popins ">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>User to Seler</th>
              <th>Seler to user</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users?.map((user, index) => (
              <tr key={user._id} className="bg-base-200 my-3">
                <th>{index + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.role}</td>
              {
                user?.role !=="admin" ?  <td>
                <button  className="btn bg-primary text-white" onClick={()=>handleusertoseller(user)}>
                       <FaSellcast></FaSellcast>
                </button>
            </td>:<td><button onClick={handleAdmin} className="btn bg-primary text-white"> Admin</button></td>
              }
               {
                user?.role !=="admin"? <td>
                <button className="btn bg-primary text-white" onClick={()=>handleselertouser(user)}>
                    <FaUsers className="text-2xl"></FaUsers>
                </button>
            </td>: <td><button onClick={handleAdmin} className="btn bg-primary text-white" > Admin</button></td>
               }

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
