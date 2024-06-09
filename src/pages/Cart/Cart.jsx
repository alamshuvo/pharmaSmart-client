import { Link } from "react-router-dom";
import Helmeta from "../../components/Helmet/Helmeta";
import UseCart from "../../hooks/UseCart";
import Title from "../Home/Home/Title/Title";
import Swal from "sweetalert2";
import UseAuth from "../../hooks/UseAuth";

const Cart = () => {
  const [carts, refetch] = UseCart();
  const {user}=UseAuth()
  console.log(carts);
  

  const totalPrice = carts?.reduce((sum, cart) => {
    return sum + parseFloat((cart.price));
  }, 0);
 console.log(carts,totalPrice);

 const handleDelete = () => {
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
      fetch(`http://localhost:5000/carts/${user?.email}`, {
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
    <div>
      <Helmeta title={"Carts"}></Helmeta>
      <Title heading={"Cart"} short={"Your shopping cart"}></Title>

      <div className="font-popins">
        <div className="flex justify-around gap-4 my-10 font-popins">
          <p className="font-bold md:text-2xl">Total Orders : {carts?.length}</p>
          <p className="font-bold md:text-2xl">Total Price : {totalPrice} </p>
          <button onClick={()=>handleDelete()} className="btn bg-primary hover:bg-special-button-hover hover:text-black text-white">Clear All</button>
         <Link to={"/checkoutpage"}>
         <button className="btn bg-primary hover:bg-special-button-hover hover:text-black text-white">Check Out</button>
         </Link>
        </div>
      </div>
      <div className="overflow-x-auto my-16">
        <table className="table font-popins">
          {/* head */}
          <thead>
            <tr>
              <th>sl</th>
              <th>image</th>
              <th>Name</th>
              <th>Compnay</th>
              <th>Price per unit</th>
              <th>Quantaty</th>
              <th>Total Stock</th>
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
                <td className="uppercase "></td>
                <td className="uppercase ">{item.unit}</td>
                
                {/* <th>
                  <button
                    onClick={() => handleShopingCart(item)}
                    className="btn btn-ghost btn-lg bg-primary"
                  >
                    <FaShoppingCart className="md:text-2xl text-white"></FaShoppingCart>
                  </button>
                </th> */}
                {/* <th>
                  <Modalad item={item}></Modalad>
                </th> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
