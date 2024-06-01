import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import {  FaPlus, FaShoppingCart } from "react-icons/fa";
import {Avatar} from "@nextui-org/react";

const Navvar = () => {
    const user=false
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navlink = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? " p-2 text-white rounded-lg bg-primary border border-b-4   "
              : "text-center  font-normal gap-6 text-[18px] "
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
              : "text-center  font-normal gap-6 text-[18px] "
          }
          to={"/"}
        >
          Shop
        </NavLink>
      </li>
      <NavLink>
      <li>
        
        <FaShoppingCart className="text-4xl text-primary" />
      </li>
      </NavLink>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? " p-2 text-white rounded-lg bg-primary border border-b-4   "
              : "text-center  font-normal gap-6 text-[18px] "
          }
          to={"/"}
        >
          Language
        </NavLink>
      </li>
    </>
  );
  const menuItems = [navlink];
  return (
    <div className="font-jost">
      <Navbar
        isBordered
        shouldHideOnScroll
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            <p className="font-semibold uppercase font-jost">
              {" "}
              PharmaSmart <br />
              <span className="text-primary">health and care </span>
            </p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarBrand>
            <img src="/public/logo.jpg" className="w-[50px] mr-2 " alt="" />
            <p className=" text-inherit uppercase font-jost font-bold">
              {" "}
              PharmaSmart <br />
              <span className="text-primary">health and care </span>
            </p>
          </NavbarBrand>
          {navlink}
        </NavbarContent>

        <NavbarContent justify="end">
        
        { user?<div className="cursor-pointer"><Avatar isBordered color="default" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" /></div>:  <NavbarItem>
            <button className="flex justify-center items-center gap-1 md:text-xl bg-primary text-white py-2 px-1 font-semibold rounded-md">
              Join Us
              <FaPlus></FaPlus>
            </button>
          </NavbarItem>}
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
