import {
  FaAd,
  FaBook,
  FaHome,
  FaPaypal,
  FaPlus,
  FaStripe,
  FaUsers,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaUpDown } from "react-icons/fa6";
import UseAdmin from "../hooks/UseAdmin";
import UseSeller from "../hooks/UseSeller";
import { CgProfile } from "react-icons/cg";

const DashBoard = () => {
  const [isAdmin] = UseAdmin();
  const [isSeller] = UseSeller();

  return (
    // dashboard navigation
    <div className="flex ">
      <div className="drawer lg:drawer-open ">
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
          <div className="p-2">
            <Outlet></Outlet>
          </div>
        </div>
        <div className="drawer-side w-32">
          <label
            htmlFor=""
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          {/* Sidebar content here */}
          <div className="md:min-w-64 flex flex-col justify-between  min-h-screen bg-primary font-popins text-white"  style={{
              backgroundImage: `url("https://i.ibb.co/xfmNXVf/sidebar3.png")`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',

            }}>
            {isAdmin ? (
              <ul className="md:p-4 p-1   md:flex md:flex-col md:justify-start md:items-start">
                <li className="mb-3 border-b-3">
                  <NavLink to={"/dashboard"} end   className={({ isActive }) =>
                        isActive
                          ? "  text-special-button-hover border-special-button-hover "
                          : "text-center border-b-3 border-primary font-normal gap-6 text-[18px] "
                      }>
                    <p className="flex text-center  md:flex-row flex-col gap-2 justify-center items-center">
                      <FaHome className="md:text-2xl"></FaHome> Admin Home
                    </p>
                  </NavLink>
                </li>
                <li className="mb-3 border-b-3">
                  <NavLink to={"/dashboard/manageusers"}   className={({ isActive }) =>
                        isActive
                          ? "  text-special-button-hover border-special-button-hover "
                          : "text-center border-b-3 border-primary font-normal gap-6 text-[18px] "
                      }>
                    <p className="text-center flex md:flex-row flex-col gap-2 justify-center items-center">
                      <FaUsers className="md:text-2xl"></FaUsers> Manage Users
                    </p>
                  </NavLink>
                </li>
                <li className="mb-3 border-b-3">
                  <NavLink to={"/dashboard/managecategory"}   className={({ isActive }) =>
                        isActive
                          ? "  text-special-button-hover border-special-button-hover "
                          : "text-center border-b-3 border-primary font-normal gap-6 text-[18px] "
                      }>
                    <p className="text-center flex md:flex-row flex-col gap-2 justify-center items-center">
                      <BiSolidCategoryAlt className="md:text-2xl" /> Manage
                      Categories
                    </p>
                  </NavLink>
                </li>
                <li className="mb-3 border-b-3">
                  <NavLink to={"/dashboard/paymentmanagement"}   className={({ isActive }) =>
                        isActive
                          ? "  text-special-button-hover border-special-button-hover "
                          : "text-center border-b-3 border-primary font-normal gap-6 text-[18px] "
                      }>
                    <p className="text-center flex md:flex-row flex-col gap-2 justify-center items-center">
                      <FaPaypal className="md:text-2xl"></FaPaypal> Payment
                      Management
                    </p>
                  </NavLink>
                </li>
                <li className="mb-3 border-b-3">
                  <NavLink to={"/dashboard/salesreport"}   className={({ isActive }) =>
                        isActive
                          ? "  text-special-button-hover border-special-button-hover "
                          : "text-center border-b-3 border-primary font-normal gap-6 text-[18px] "
                      }>
                    <p className="text-center flex md:flex-row flex-col gap-2 justify-center items-center">
                      <FaBook className="md:text-2xl"></FaBook>Sales Report
                    </p>
                  </NavLink>
                </li>
                <li className="mb-3 border-b-3">
                  <NavLink to={"/dashboard/advertise"}   className={({ isActive }) =>
                        isActive
                          ? "  text-special-button-hover border-special-button-hover "
                          : "text-center border-b-3 border-primary font-normal gap-6 text-[18px] "
                      }>
                    <p className="text-center flex md:flex-row flex-col gap-2 justify-center items-center">
                      <FaAd className="md:text-2xl"></FaAd> Manage Advertise
                    </p>
                  </NavLink>
                </li>
              </ul>
            ) : isSeller ? (
              <>
                <ul className="md:p-4 p-1  md:flex md:flex-col md:justify-start md:items-start">
                  <li className="mb-3 border-b-3">
                    <NavLink
                      to={"/dashboard"} 
                      end
                      className={({ isActive }) =>
                        isActive
                          ? "  text-special-button-hover border-special-button-hover "
                          : "text-center border-b-3 border-primary font-normal gap-6 text-[18px] "
                      }
                    >
                      <p className="flex text-center  md:flex-row flex-col gap-2 justify-center items-center">
                        <FaHome className="md:text-3xl"></FaHome> Home
                      </p>
                    </NavLink>
                  </li>
                  <li className="mb-3 border-b-3">
                    <NavLink
                      to={"/dashboard/managemedicine"}
                      className={({ isActive }) =>
                        isActive
                          ? "  text-special-button-hover border-special-button-hover "
                          : "text-center border-b-3 border-primary font-normal gap-6 text-[18px] "
                      }
                    >
                      <p className="flex text-center  md:flex-row flex-col gap-2 justify-center items-center">
                        <FaPlus className="md:text-3xl"> </FaPlus>Manage
                        Medicine
                      </p>
                    </NavLink>
                  </li>
                  <li className="mb-3 border-b-3">
                    <NavLink
                      to={"/dashboard/sellerpayment"}
                      className={({ isActive }) =>
                        isActive
                          ? "  text-special-button-hover border-special-button-hover "
                          : "text-center border-b-3 border-primary font-normal gap-6 text-[18px] "
                      }
                    >
                      <p className="flex text-center  md:flex-row flex-col gap-2 justify-center items-center">
                        <FaStripe className="md:text-3xl"> </FaStripe>Payment
                      </p>
                    </NavLink>
                  </li>
                  <li className="mb-3 border-b-3">
                    <NavLink
                      to={"/dashboard/askadvertisement"}
                      className={({ isActive }) =>
                        isActive
                          ? "  text-special-button-hover border-special-button-hover "
                          : "text-center border-b-3 border-primary font-normal gap-6 text-[18px] "
                      }
                    >
                      <p className="flex text-center  md:flex-row flex-col gap-2 justify-center items-center">
                        <FaAd className="md:text-3xl"></FaAd> Ask For
                        Advertisement
                      </p>
                    </NavLink>
                  </li>
                </ul>
              </>
            ) : (
              <>
                {" "}
                <ul className=" md:flex md:flex-col md:justify-start md:items-start">
                  <li className="mb-3 border-b-3">
                    <NavLink
                      to={"/dashboard"}
                      end
                      className={({ isActive }) =>
                        isActive
                          ? "  text-special-button-hover border-special-button-hover "
                          : "text-center border-b-3 border-primary font-normal gap-6 text-[18px] "
                      }
                    >
                      <p className="flex text-center  md:flex-row flex-col gap-2 justify-center items-center">
                        <FaStripe className="md:text-3xl"></FaStripe> Payment
                        History
                      </p>
                    </NavLink>
                  </li>
                </ul>
              </>
            )}
            <div className="divider text-white"> Others </div>
            <ul className=" md:flex md:flex-col md:justify-start md:items-start">
              <li className="mb-3 border-b-3">
                <NavLink
                  to={"/updateprofile"}
                  className={({ isActive }) =>
                    isActive
                      ? "  text-special-button-hover border-special-button-hover "
                      : "text-center border-b-3 border-primary font-normal gap-6 text-[18px] "
                  }
                >
                  <p className="text-center flex md:flex-row flex-col gap-2 justify-center items-center">
                    <CgProfile className="md:text-2xl" /> Update Profile
                  </p>
                </NavLink>
              </li>
              <li className="mb-3 border-b-3">
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive
                      ? "  text-special-button-hover border-special-button-hover "
                      : "text-center border-b-3 border-primary font-normal gap-6 text-[18px] "
                  }
                >
                  <p className="text-center flex md:flex-row flex-col gap-2 justify-center items-center">
                    <FaHome className="md:text-2xl"></FaHome> Home
                  </p>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
