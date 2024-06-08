import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { Button } from "@nextui-org/react";

import { Link, NavLink } from "react-router-dom";
import { FaBookOpen, FaPenFancy, FaPlus, FaShoppingCart } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { Avatar } from "@nextui-org/react";
import UseAuth from "../../hooks/UseAuth";
import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../hooks/UseAxiosPublic";
import Swal from "sweetalert2";
import UseAdmin from "../../hooks/UseAdmin";
import UseSeller from "../../hooks/UseAdmin";
import UseCart from "../../hooks/UseCart";

const Navvar = () => {
  const { user, logoutUser, loading } = UseAuth();
  const axiosPublic = UseAxiosPublic();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isAdmin] = UseAdmin();
  const [isSeller] = UseSeller();
  //   const {data:data=[],refetch}=useQuery({
  //     queryKey:"data",
  //     queryFn:async()=>{
  //         const res=await axiosPublic.get("/users")
  //     }
  //   })
  const [carts,refetch]=UseCart()
  const handleLogout = () => {
    console.log("handle logout");
    logoutUser().then((res) => {
      console.log(res);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User Logout Sucessfully",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };
  const navlink = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? " p-2 text-white rounded-lg bg-primary border border-b-4   "
              : "text-center border-b-3 border-primary font-normal gap-6 text-[18px] "
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? " p-2 text-white rounded-lg bg-primary border border-b-4   "
              : "text-center border-b-3 border-primary font-normal gap-6 text-[18px] "
          }
          to={"/shop"}
        >
          Shop
        </NavLink>
      </li>

      <li>
        {/* <NavLink
          className={({ isActive }) =>
            isActive
              ? " p-2 text-white rounded-lg bg-primary border border-b-4   "
              : "text-center border-b-3 border-primary font-normal gap-6 text-[18px] "
          }
          to={"/"}
        >
          Language
        </NavLink> */}
        <Dropdown className="font-popins  outline-none">
          <DropdownTrigger>
            <Button
              variant="normal"
              className="text-[18px] border-b-1p border-primary"
            >
              Languages
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="new">Bangla</DropdownItem>
            <DropdownItem key="copy">English</DropdownItem>
            <DropdownItem key="edit">Hindi</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </li>
      <NavLink to={"/carts"} >
        {/* <li>
          <FaShoppingCart className="text-2xl text-primary" />
        </li> */}
     <li>
          <button className="btn">
          <FaShoppingCart className="text-2xl text-primary" />
            <div className="badge ">{carts?.length}
           
            </div>
          </button>
     </li>
      </NavLink>
    </>
  );
  const menuItems = [navlink];
  return loading ? (
    <progress className="progress w-56 mx-auto flex justify-center items-center"></progress>
  ) : (
    <div className="font-jost">
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="start">
          <NavbarBrand>
            <Link to={"/"} className="font-semibold uppercase font-jost">
              {" "}
              PharmaSmart <br />
              <span className="text-primary">health and care </span>
            </Link>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden md:flex">
          <NavbarBrand>
            <img src="/public/logo.jpg" className="w-[50px] mr-2 " alt="" />
            <Link
              to={"/"}
              className=" text-inherit uppercase font-jost font-bold"
            >
              {" "}
              PharmaSmart <br />
              <span className="text-primary">health and care </span>
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {navlink}
        </NavbarContent>

        <NavbarContent justify="end">
          {user ? (
            <div className="cursor-pointer">
              {/* <Avatar
            isBordered
            color="default"
            src={user.photoURL}
            
            
          /> */}

              <Dropdown className="bg-primary font-jost">
                <DropdownTrigger>
                  <Avatar
                    referrerPolicy="no-referrer"
                    isBordered
                    color="default"
                    src={user?.photoURL}
                  />
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Action event example"
                  //   onAction={(key) => alert(key)}
                  className=" md:p-8 my-5 "
                >
                  <DropdownItem
                    value={null}
                    className="text-white border-b-3 mb-2 "
                    key="update"
                    textValue="update"
                  >
                    <Link to={"/updateprofile"}>
                      {" "}
                      <span className="text-xl flex justify-center items-center gap-2">
                        {" "}
                        Update Profile <FaPenFancy></FaPenFancy>
                      </span>{" "}
                    </Link>
                  </DropdownItem>

                  <DropdownItem
                    className="text-white border-b-3 mb-2"
                    key="dashboard"
                    textValue="dashboard"
                  >
                    <Link to={"dashboard"}>
                      <span className="text-xl flex justify-center items-center gap-2">
                        Dashboard
                        <FaBookOpen></FaBookOpen>{" "}
                      </span>
                    </Link>
                  </DropdownItem>
                  <DropdownItem
                    value={null}
                    onClick={handleLogout}
                    key="logout"
                    textValue="logout"
                    className=" bg-special-button-hover border-b-3 mt-2 text-black"
                  >
                    <span className="text-xl flex justify-center items-center gap-2">
                      LogOut <LuLogOut />{" "}
                    </span>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          ) : (
            <NavbarItem>
              <Link
                to={"/login"}
                className="flex justify-center items-center gap-1 uppercase bg-primary text-white md:p-2 p-1 font-popins rounded-md "
              >
                Join Us
                <p className="hidden md:flex">
                  <FaPlus></FaPlus>
                </p>
              </Link>
            </NavbarItem>
          )}
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full flex flex-col justify-start gap-4"
                color={
                  index === 2
                    ? "warning"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href={item}
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
};

export default Navvar;
