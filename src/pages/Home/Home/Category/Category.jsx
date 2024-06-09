import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import Title from "../Title/Title";
import { Link } from "react-router-dom";
import UseAxiosPublic from "../../../../hooks/UseAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Category = () => {
  const axiosPublic = UseAxiosPublic();
  const {
    data: managecategory = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["managecategory"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/managecategory`);
      return res.data;
    },
  });
  console.log(managecategory);

  return (
    <div>
      <Title heading={"Category"} short={"All category"}></Title>
      <div className="border-2">
        <div className=" grid md:grid-cols-3 gap-3 grid-cols-1 cursor-pointer">
          {managecategory?.map((item) => (
            <Link key={item._id} to={`/categorydetails/${item.category}`}>
              <div className="">
                <img
                  className="h-[300px] w-full object-cover"
                  src={item.photo}
                  alt=""
                />
                <div className="font-popins">
                  <h1 className="p-2 text-xl">Category : {item.category}</h1>
                  <p className="text-xs p-2 uppercase">Number of medicine : </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
