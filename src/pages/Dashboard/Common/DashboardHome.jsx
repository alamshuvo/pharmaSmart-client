import React from "react";
import UseSeller from "../../../hooks/UseSeller";
import UseAdmin from "../../../hooks/UseAdmin";
import UseAuth from "../../../hooks/UseAuth";
import UseAxiosSecure from "../../../hooks/UseAxiosSucure";
import { useQuery } from "@tanstack/react-query";
import Title from "../../Home/Home/Title/Title";
import { FaSuitcase } from "react-icons/fa";
import { GiPayMoney } from "react-icons/gi";

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
  const { data: payment = [] } = useQuery({
    queryKey: ["payment", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment`);
      return res.data;
    },
  });
//   console.log(payments);
const paidPayments = payment.filter(payment => payment.status === 'paid');
const pendingPayments = payment.filter(payment => payment.status === 'pending');
const totalPaid = paidPayments.reduce((total, payment) => total + payment.price, 0);

// Calculate the total price for pending payments
const totalPending = pendingPayments.reduce((total, payment) => total + payment.price, 0);
console.log(pendingPayments);

  return (
    <div >
        <Title heading={"Dashboard Home"} short={"show your details "}></Title>
      {isAdmin ? (
        <div>
   <div>
    <div className="w-4/6 mx-auto">
        <div className="flex justify-between gap-5 md:flex-row flex-col cursor-pointer font-bold">
            <div className="border-2 w-full h-[200px] flex justify-center items-center bg-primary text-white hover:bg-special-button-hover hover:text-black rounded-lg md:text-2xl text-xl uppercase"><p className="flex justify-center items-center gap-3 ">Paid total  {totalPaid} $ <FaSuitcase className="text-2xl"></FaSuitcase></p></div>
            <div className="border-2 w-full h-[200px] flex justify-center items-center bg-primary text-white hover:bg-special-button-hover hover:text-black rounded-lg md:text-2xl text-xl uppercase"><p className="flex justify-center items-center gap-3">Pending total {totalPending} $ <GiPayMoney className="text-2xl" /></p></div>
        </div>
    </div>
   </div>

        </div>
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
