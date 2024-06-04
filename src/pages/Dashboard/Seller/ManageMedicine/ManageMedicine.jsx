import Helmeta from "../../../../components/Helmet/Helmeta";
import Title from "../../../Home/Home/Title/Title";
import "ka-table/style.css";
import { Table } from "ka-table";
import { DataType, EditingMode, SortingMode } from "ka-table/enums";
import { Avatar } from "@nextui-org/react";
import Modala from "./Modal";
import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../../../hooks/UseAxiosPublic";
import UseAuth from "../../../../hooks/UseAuth";


const ManageMedicine = () => {
const axiosPublic=UseAxiosPublic();
const {user}=UseAuth()

  const { data:medicine=[], isPending,refetch } = useQuery({
    queryKey: ["medicine"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/medicine/${user?.email}`)
      return res.data;
    },
  });
console.log(medicine);

  const dataArray = medicine.map((item, index) => ({
   
    ItemName:item?.name,
    generic: item?.generic,
    Category:item?.category,
    ProfilePicture: item?.photo,
    Company:item?.company,
    email:item?.email.slice(0,25),
    id: index,
    
   
  }));
 



  
  return (
    <div className="font-popins">
      <Helmeta title={"Manage Medicine"}></Helmeta>
      <Title heading={"Medicines"} short={"manage medicines"}></Title>
      <div className="flex justify-center items-center my-5">
        <Modala text={"Add Medicine"} refetch={refetch}></Modala>
      
       
      </div>
      <Table
        columns={[
          { key: "ItemName", title: "Item Name", dataType: DataType.String },
          // { key: "ItemName", title: "Item Name", dataType: DataType.String },
          { key: "generic", title: "Generic Name", dataType: DataType.String },
          { key: "Category", title: "Category", dataType: DataType.String },
          { key: "Company", title: "Company", dataType: DataType.String },
          { key: "email", title: "email", dataType: DataType.String },

          {
            key: "ProfilePicture",
            title: "ProfilePicture",
            dataType: DataType.String,
          },
        ]}
        // width={100}
        data={dataArray}
        editingMode={EditingMode.Cell}
        rowKeyField={"id"}
        sortingMode={SortingMode.Single}
        format={({ column, value }) => {
          if (column.key === "ProfilePicture") {
            return (
              <Avatar
                className="w-[100px] h-[100px]"
                isBordered
                radius="sm"
                src={value}
              />
            );
          }
        }}
      />
    </div>
  );
};

export default ManageMedicine;
