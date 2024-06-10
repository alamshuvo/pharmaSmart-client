import Helmeta from "../../components/Helmet/Helmeta";
import UseAuth from "../../hooks/UseAuth";
import UseCart from "../../hooks/UseCart";
import Title from "../Home/Home/Title/Title";

const Invoice = () => {
  const [carts, refetch, totalPrice] = UseCart();
  const { user } = UseAuth();

  return (
    <div className="my-16">
      <Title heading={"Invoice"} short={"collect your data"}></Title>
      <Helmeta title={"Invoice"}></Helmeta>
      <div className="flex justify-center items-center my-10 ">
        <button className="btn hover:bg-special-button-hover hover:text-black bg-primary text-white ">Download Invoice</button>
      </div>
      <div className="border-2 font-popins">
        <div className="flex justify-center items-center flex-col">
          <img src="/public/logo.jpg" className="w-[100px] h-[100px]" alt="" />
          <p className="text-xl font-bold">{user?.email}</p>
          <p className="text-xl font-bold">
            {user?.displayName || "Please set Your name"}
          </p>
        </div>
        <div>
          <div className="overflow-x-auto my-16 font-bold font-popins">
            {carts?.length > 0 ? (
            <div>
                  <p className="text-xl font-bold flex justify-center  items-center my-10">Invoice  </p>
                  <table className="table font-popins">
                    {/* head */}
                    <thead>
                      <tr>
                        <th>sl</th>
                        <th>image</th>
                        <th>Name</th>
                        <th>Compnay</th>
                        <th>Price per unit</th>
                        <th>Buyer Email</th>
                        <th>Seller Email</th>
                        <th>Category </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* row 1 */}
                      {carts?.map((item, index) => (
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
                          <td className="uppercase ">{item.price}</td>
                          <td className="uppercase ">{item.buyerEmal}</td>
                          <td className="uppercase ">{item.sellerEmail}</td>
                          <td className="uppercase ">{item?.category}</td>
                          
                        </tr>
                      ))}
                      
                    </tbody>
                    
                  </table>
                  <p className="text-xl font-bold flex justify-center  items-center my-10">Total Price : {totalPrice}</p>
            </div>
            ) : (
              <div>
                <div className="flex text-center justify-center items-center gap-4 flex-col font-popins font-bold text-2xl">
                  {/* <h1 className="flex justify-center text-center items-center gap-4">Opps <FaEmpire></FaEmpire> </h1> */}
                  <p className="">
                    No Carts Data Found Please Shop your Medicine
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
