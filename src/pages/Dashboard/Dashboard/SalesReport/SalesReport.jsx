import { useQuery } from "@tanstack/react-query";
import Helmeta from "../../../../components/Helmet/Helmeta";
import UseAxiosSecure from "../../../../hooks/UseAxiosSucure";
import Title from "../../../Home/Home/Title/Title";
import { DownloadTableExcel } from "react-export-table-to-excel";
import { useRef } from "react";

const SalesReport = () => {
  const axiosSecure = UseAxiosSecure();
  const tableRef = useRef(null);
  // const axiosPublic=UseAxiosPublic()
  const { data: sales = [], refetch } = useQuery({
    queryKey: ["sales"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment/`);
      return res.data;
    },
  });
  console.log(sales);
  return (
    <div>
      <Helmeta title={"SalesReport"}></Helmeta>
      <Title heading={"Report"} short={"Sales report"}></Title>
      <DownloadTableExcel
        filename="users table"
        sheet="users"
        currentTableRef={tableRef.current}
         
      >
        <button className="bg-primary text-white font-bold p-2 rounded-lg flex justify-center items-center"> Export excel </button>
      </DownloadTableExcel>
      <div className="overflow-x-auto my-16 border-2 w-full">
        {
          <table className="table font-popins font-bold" ref={tableRef}>
            {/* head */}
            <thead className="w-full border-2 ">
              <tr>
                <th>sl</th>

                <th>Total Price</th>

                <th>Medicine Name and price</th>
                <th>Buyer Email</th>
                <th>seller Email</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {/* row 1 */}
              {sales?.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>

                  <td className="uppercase ">{item.price}</td>

                  <td className="uppercase ">
                    {item?.shopingCarts?.map((cartItem, cartIndex) => (
                      <div
                        key={cartIndex}
                        className="flex justify-between gap-4 mt-2 w-full"
                      >
                        <p>Name: {cartItem.name}</p>
                        <p>Price: ${cartItem.price}</p>
                      </div>
                    ))}
                  </td>
                  <td className="uppercase "></td>
                  <td className=" ">{item?.buyemail}</td>
                  <td className=" ">{item?.sellerEmail?.join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        }
      </div>
    </div>
  );
};

export default SalesReport;
