import { FaAd, FaBook, FaHome, FaPaypal, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaUpDown } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../hooks/UseAxiosPublic";

const DashBoard = () => {
  const axiosPublic = UseAxiosPublic();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users");
      return res.data;
    },
  });

  console.log(users);
  // const isAdmin=users.map(user=>{
  //     console.log(user.role);
  // })
  // console.log(isAdmin);
  const isAdmin = true;

  return (
    // dashboard navigation
    <div className="flex ">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="bg-primary btn text-white font-popins text-xl drawer-button lg:hidden"
          >
            Dashboard
            <FaUpDown></FaUpDown>
          </label>
          {/* dashboard sidebar */}
          <div className="">
            <Outlet></Outlet>
          </div>
        </div>
        <div className="drawer-side w-32">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          {/* Sidebar content here */}
          <div className="md:min-w-64  min-h-screen bg-primary font-popins text-white">
            {isAdmin ? (
              <ul className="md:p-4 p-1 my-5">
                <li className="mb-3 border-b-3">
                  <NavLink to={"/dashboard/home"}>
                    <p className="flex text-center  md:flex-row flex-col gap-2 justify-center items-center">
                      <FaHome className="md:text-2xl"></FaHome> Admin Home
                    </p>
                  </NavLink>
                </li>
                <li className="mb-3 border-b-3">
                  <NavLink to={"/dashboard/manageusers"}>
                    <p className="text-center flex md:flex-row flex-col gap-2 justify-center items-center">
                      <FaUsers className="md:text-2xl"></FaUsers> Manage Users
                    </p>
                  </NavLink>
                </li>
                <li className="mb-3 border-b-3">
                  <NavLink to={"/dashboard/managecategory"}>
                    <p className="text-center flex md:flex-row flex-col gap-2 justify-center items-center">
                      <BiSolidCategoryAlt className="md:text-2xl" /> Manage
                      Categories
                    </p>
                  </NavLink>
                </li>
                <li className="mb-3 border-b-3">
                  <NavLink to={"/dashboard/paymentmanagement"}>
                    <p className="text-center flex md:flex-row flex-col gap-2 justify-center items-center">
                      <FaPaypal className="md:text-2xl"></FaPaypal> Payment
                      Management
                    </p>
                  </NavLink>
                </li>
                <li className="mb-3 border-b-3">
                  <NavLink to={"/dashboard/salesreport"}>
                    <p className="text-center flex md:flex-row flex-col gap-2 justify-center items-center">
                      <FaBook className="md:text-2xl"></FaBook>Sales Report
                    </p>
                  </NavLink>
                </li>
                <li className="mb-3 border-b-3">
                  <NavLink to={"/dashboard/advertise"}>
                    <p className="text-center flex md:flex-row flex-col gap-2 justify-center items-center">
                      <FaAd className="md:text-2xl"></FaAd> Manage Advertise
                    </p>
                  </NavLink>
                </li>
              </ul>
            ) : (
              <></>
            )}
            <div className="divider text-white"> Others </div>
            <li className="mb-3 border-b-3">
              <NavLink to={"/"}>
                <p className="text-center flex md:flex-row flex-col gap-2 justify-center items-center">
                  <FaHome className="md:text-2xl"></FaHome> Home
                </p>
              </NavLink>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
