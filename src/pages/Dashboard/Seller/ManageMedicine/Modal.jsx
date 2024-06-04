import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import UseAxiosPublic from "../../../../hooks/UseAxiosPublic";
import UseAuth from "../../../../hooks/UseAuth";
const img_hosting_key = import.meta.env.VITE_img_hosting_key;
console.log(img_hosting_key);
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;




const Modala = ({ text }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const axiosPublic = UseAxiosPublic();
  const { user } = UseAuth();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm(
    // defaultValues:{
    //   discount:"0"
    // }
  );
  const onSubmit = async (data) => {
    console.log(data);
    const photo = { image: data.photo[0] };
    // console.log(photo);
    const response = await axiosPublic.post(img_hosting_api, photo, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    const photoa = response.data.data.display_url;
   
 
    const a = {
      name: data.name,
      generic: data.generecname,
      description: data.description,
      unit: data.unit,
      priceperunit: data.priceperunit,
      discount: data.discount,
      photo: photoa,
      category: data.category,
      company: data.company,
      email: user.email,
    };
    console.log(a);
    // console.log("ekhan tekeh ", response.data.data.display_url);
    // console.log(data,response.data,"cobi r jinis cier");

   await axiosPublic.post("/medicine",a)
  };

  return (
    <div>
      <Button onPress={onOpen} color="primary">
        {text}
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{text}</ModalHeader>
              <ModalBody className="">
                <form onSubmit={handleSubmit(onSubmit)} className="">
                  <Input
                    autoFocus
                    //   endContent={
                    //     <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    //   }
                    {...register("name")}
                    label="Item Name"
                    placeholder="Item Name"
                    variant="bordered"
                    type="text"
                    className="mt-3"
                  />
                  <Input
                    //   endContent={
                    //     <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    //   }
                    {...register("generecname")}
                    label="Generec Name"
                    placeholder="Generic Name"
                    type="text"
                    variant="bordered"
                    className="mt-3"
                  />
                  <Input
                    {...register("description")}
                    label="Description"
                    placeholder="Short description"
                    type="text"
                    variant="bordered"
                    className="mt-3"
                  />

                  <Input
                    {...register("unit")}
                    label="Item unit"
                    placeholder="Item Unit mg or ml"
                    type="number"
                    variant="bordered"
                    className="mt-3"
                  />

                  <Input
                    {...register("priceperunit")}
                    label="Price per unit"
                    placeholder="per unit price"
                    type="number"
                    variant="bordered"
                    className="mt-3"
                  />

                  <Input
                    {...register("discount")}
                    label="Discount Price"
                    placeholder="discount price"
                    type="number"
                    defaultValue={0}
                    // value={0}
                    variant="bordered"
                    className="mt-3"
                  />

                  <input
                    type="file"
                    {...register("photo", { required: true })}
                    className="file-input mt-3 file-input-bordered file-input-primary w-full max-w-xs"
                  />

                  {errors.photo && <span>Photo is required</span>}

                  {/* <label className="label">
                  <span className="label-text">Select Role</span>
                </label> */}
                  <select
                    defaultValue={"default"}
                    {...register("category")}
                    className="select select-bordered w-full max-w-xs mt-3"
                  >
                    <option disabled value={"default"}>
                      category
                    </option>
                    <option value={"syrup"}>Syrup</option>
                    <option value={"injection"}>Injection</option>
                    <option value={"tablet"}>Tablet</option>
                    <option value={"capsul"}>Capsul</option>
                    <option value={"others"}>Others</option>
                  </select>

                  <select
                    defaultValue={"default"}
                    {...register("company")}
                    className="select select-bordered w-full max-w-xs mt-3"
                  >
                    <option disabled value={"default"}>
                      Company Name
                    </option>
                    <option value={"incepta"}>Incepta</option>
                    <option value={"orion"}>Orion</option>
                    <option value={"beximco"}>Beximco co</option>
                    <option value={"acme"}>Acme</option>
                    <option value={"labaid"}>LabAid</option>
                  </select>
                  {/* <Button color="primary" onPress={onClose} >
                  Add Medicine
                </Button> */}
                  <div className="form-control mt-6">
                    <button className="btn bg-primary text-white hover:text-black">
                      Add Medicine
                    </button>
                  </div>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                {/* <Button color="primary" onPress={onClose} >
                  Add Medicine
                </Button>  */}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Modala;
