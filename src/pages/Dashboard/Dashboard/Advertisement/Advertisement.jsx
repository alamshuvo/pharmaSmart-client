import { useQuery } from "@tanstack/react-query";
import Helmeta from "../../../../components/Helmet/Helmeta";
import UseAxiosPublic from "../../../../hooks/UseAxiosPublic";
import Title from "../../../Home/Home/Title/Title";
import { useState } from "react";
import UseAxiosSecure from "../../../../hooks/UseAxiosSucure";
import Swal from "sweetalert2";
import { FaLeftLong, FaRightFromBracket } from "react-icons/fa6";

const Advertisement = () => {
  const axiosPublic = UseAxiosPublic();
  const axiosSucure = UseAxiosSecure();

  const [approve, setApprove] = useState(false);

  const {
    data: advertisemente = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["advertisemente"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/advertisement`);
      return res.data;
    },
  });
  const handleApprove = (id) => {
    setApprove(!approve);
    console.log(approve, id);
    axiosSucure.patch(`/advertisement/approve/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Admin make approval for advertisement`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
      refetch();
    });
  };
  const handlepending = (id) => {
    setApprove(!approve);
    console.log(approve, id);
    axiosSucure.patch(`/advertisement/pending/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Admin make pending for advertisement`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
      refetch();
    });
  };

  return (
    <div className="font-popins font-bold ">
      <Helmeta title={"advertisement"}></Helmeta>
      <Title heading={"Advertisement"} short={"Manage advertisement"}></Title>
      <div className="overflow-x-auto p-2 w-full font-popins ">
        <table className="table ">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>description</th>
              <th>Email</th>
              <th>status</th>
              <th>photo</th>
              <th>Status Change</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {advertisemente?.map((user, index) => (
              <tr key={user._id} className="bg-base-200 my-3">
                <th>{index + 1}</th>
                <td>{user?.description}</td>
                <td>{user?.email}</td>
                <td>{user?.status}</td>
                <td>
                  <img
                    src={user?.photo}
                    className="w-[100px] h-[100px]"
                    alt=""
                  />
                </td>
                <td>
                  {user?.status === "pending" ? (
                    <button
                      onClick={() => handleApprove(user?._id)}
                      className="btn bg-primary text-white hover:bg-special-button-hover hover:text-black"
                    >
                      <FaRightFromBracket></FaRightFromBracket> Active
                    </button>
                  ) : (
                    <button
                      onClick={() => handlepending(user?._id)}
                      className="btn bg-primary text-white hover:bg-special-button-hover hover:text-black"
                    >
                      <FaLeftLong></FaLeftLong> InActive
                    </button>
                  )}
                </td>
             
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Advertisement;
