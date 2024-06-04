import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import Title from "../Title/Title";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div>
      <Title heading={"Category"} short={"All category"}></Title>
      <div className="border-2">
        <div className=" grid md:grid-cols-3 gap-3 grid-cols-1 cursor-pointer">

            {/* accesories */}
          <Link to={"/categorydetails"}>
            <div className="">
              <img className="h-[300px] w-full object-cover" src="https://i.ibb.co/5Fbj5Rc/acc.webp" alt="" />
              <div className="font-popins">
                <h1 className="p-2 text-xl">Category : Accesories</h1>
                <p className="text-xs p-2 uppercase">Number of medicine : </p>
              </div>
            </div>
          </Link>

          {/* surup */}
          <Link to={"/categorydetails"}>
            <div>
              <div className="">
                <img
                  className="h-[300px] w-full object-cover"
                  src="https://i.ibb.co/wgcNJnZ/syrup.webp"
                  alt=""
                />
              </div>
              <div className="font-popins">
                <h1 className="p-2 text-xl">Category : syrup</h1>
                <p className="text-xs p-2 uppercase">Number of medicine : </p>
              </div>
            </div>
          </Link>
     {/* injection */}
          <Link to={"/categorydetails"}>
            <div>
              <div className="">
                <img
                  className="h-[300px]  w-full object-cover"
                  src="https://i.ibb.co/ggqfK0s/136484555-076ec931-0c6f-4d92-840c-1b6b8fb2b241.jpg"
                  alt=""
                />
              </div>
              <div className="font-popins">
                <h1 className="p-2 text-xl">Category : injection</h1>
                <p className="text-xs p-2 uppercase">Number of medicine : </p>
              </div>
            </div>
          </Link>
     {/* tablet */}
          <Link to={"/categorydetails"}>
            <div>
              <div className=" ">
                <img
                  className="h-[300px] w-full object-cover"
                  src="https://i.ibb.co/x27QJkD/2148021494.jpg"
                  alt=""
                />
              </div>
              <div className="font-popins">
                <h1 className="p-2 text-xl">Category : tablet</h1>
                <p className="text-xs p-2 uppercase">Number of medicine : </p>
              </div>
            </div>
          </Link>
         
         {/* capsul */}
          <Link to={"/categorydetails"}>
            <div>
              <div className=" ">
                <img
                  className="h-[300px] w-full object-cover"
                  src="https://i.ibb.co/FnnP17Y/8136.jpg"
                  alt=""
                />
              </div>
              <div className="font-popins">
                <h1 className="p-2 text-xl">Category : capsul</h1>
                <p className="text-xs p-2 uppercase">Number of medicine : </p>
              </div>
            </div>
          </Link>
         {/* Hand Wash */}
          <Link to={"/categorydetails"}>
            <div>
              <div className="  ">
                <img
                  className="h-[300px] w-full object-cover"
                  src="https://i.ibb.co/StPwB5v/handwash.webp"
                  alt=""
                />
              </div>
              <div className="font-popins">
                <h1 className="p-2 text-xl">Category : others</h1>
                <p className="text-xs p-2 uppercase">Number of medicine : </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
