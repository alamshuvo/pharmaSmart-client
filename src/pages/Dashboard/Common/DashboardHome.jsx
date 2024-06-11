import React from "react";
import UseSeller from "../../../hooks/UseSeller";
import UseAdmin from "../../../hooks/UseAdmin";
import UseAuth from "../../../hooks/UseAuth";
import UseAxiosSecure from "../../../hooks/UseAxiosSucure";
import { useQuery } from "@tanstack/react-query";
import Title from "../../Home/Home/Title/Title";

const DashboardHome = () => {
  const [isAdmin] = UseAdmin();
  const [isSeller] = UseSeller();
  const { user } = UseAuth();

  // payment history loaded by email
  const axiosSecure = UseAxiosSecure();
  // const axiosPublic=UseAxiosPublic()
  const { data: payments = [], refetch } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment/a/${user.email}`);
      return res.data;
    },
  });
  console.log(payments);

  return (
    <div >
        <Title heading={"Dashboard Home"} short={"show your details "}></Title>
      {isAdmin ? (
        <div>admin</div>
      ) : isSeller ? (
        <div>seller</div>
      ) : (
        <div>
          {/* user */}
          <div className="overflow-x-auto font-popins font-bold">
            <table className="table font-popins">
              {/* head */}
              <thead>
                <tr>
                  <th>sl</th>
                 
                  <th>transctionId</th>
               
                  <th>status</th>
                  
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {payments?.map((item, index) => (
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>
                     {item?.transctionId}
                    </td>
                    <td>{item.status}</td>
                    <td className="uppercase ">{item.company}</td>
                   
                    <th>{/* <Modalad item={item}></Modalad> */}</th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardHome;
