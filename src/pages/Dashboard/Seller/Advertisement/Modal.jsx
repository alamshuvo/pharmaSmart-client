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
import UseAuth from "../../../../hooks/UseAuth";
import { useForm } from "react-hook-form";
import UseAxiosPublic from "../../../../hooks/UseAxiosPublic";
import Swal from "sweetalert2";

const img_hosting_key = import.meta.env.VITE_img_hosting_key;
console.log(img_hosting_key);
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;
const Modaln = ({ refetch }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { user } = UseAuth();
  const axiosPublic = UseAxiosPublic();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
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
    console.log(photoa);

    const a = {
      description: data.description,
      photo: photoa,
      status: "pending",
      email: user?.email,
    };
    console.log(a);

    await axiosPublic.post("/advertisement", a).then((res) => {
      console.log(res);
      if (res.data.insertedId) {
        Swal.fire({
            title: "Medicine Added ",
            showClass: {
              popup: `
                  animate__animated
                  animate__fadeInUp
                  animate__faster
                `,
            },
            hideClass: {
              popup: `
                  animate__animated
                  animate__fadeOutDown
                  animate__faster
                `,
            },
          });
      }
      refetch();
    });
   
  };

  const handlemedicine = () => {
 
  };
  return (
    <div>
      <Button
        onPress={onOpen}
        color="primary"
        className="bg-primary hover:bg-special-button-hover text-white hover:text-black text-xl font-bold "
      >
        Add Advertisement
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Advertisement
              </ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Input
                    autoFocus
                    {...register("description")}
                    label="text"
                    placeholder="Enter your description"
                    variant="bordered"
                  />

                  <input
                    type="file"
                    {...register("photo", { required: true })}
                    className="file-input mt-3 file-input-bordered file-input-primary w-full max-w-xs"
                  />
                  <div className="form-control mt-6">
                    <button className="btn bg-primary text-white hover:text-black">
                      Add Advertise
                    </button>
                  </div>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button
                  onClick={handlemedicine}
                  color="danger"
                  variant="flat"
                  onPress={onClose}
                >
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Modaln;
