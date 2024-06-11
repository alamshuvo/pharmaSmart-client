import { useQuery } from "@tanstack/react-query";
import Helmeta from "../../../../components/Helmet/Helmeta";
import UseAuth from "../../../../hooks/UseAuth";
import UseAxiosSecure from "../../../../hooks/UseAxiosSucure";
import Title from "../../../Home/Home/Title/Title";
import { FaRegHandPointRight } from "react-icons/fa";
import Swal from "sweetalert2";

const Paymentmanagement = () => {
  const { user } = UseAuth();

  // payment history loaded by email
  const axiosSecure = UseAxiosSecure();
  // const axiosPublic=UseAxiosPublic()
  const { data: payments = [], refetch } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment`);
      return res.data;
    },
  });
  console.log(payments);

  const handleApprove = (id) => {
    
    console.log( id);
    axiosSecure.patch(`/payment/approve/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Admin make approval for payment status`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
      refetch();
    });
  };



  return (
    <div>
      <Helmeta title={"payment"}></Helmeta>
      <Title heading={"payment"} short={"Payment Management"}></Title>
      <div className="overflow-x-auto my-16">
        {
          <table className="table font-popins font-bold">
            {/* head */}
            <thead>
              <tr>
                <th>sl</th>

                <th>Total Price</th>
                <th>transctionId</th>
                <th>Status</th>
                <th>Approval</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {payments?.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>

                  <td className="uppercase ">{item.price}</td>
                  <td className="uppercase ">{item?.transctionId}</td>
                  <td className="uppercase ">{item?.status}</td>
                  <td className="uppercase ">{
               item.status==="pending"?<button onClick={()=>handleApprove(item._id)} className="btn bg-primary text-white">Paid</button>: <button className="btn bg-green-700 text-white"><FaRegHandPointRight  className="text-white"/></button>

                  }</td>
                </tr>
              ))}
            </tbody>
          </table>
        }
      </div>
    </div>
  );
};

export default Paymentmanagement;
