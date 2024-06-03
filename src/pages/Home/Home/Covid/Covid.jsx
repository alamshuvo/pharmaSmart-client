import Swal from "sweetalert2";
import Title from "../Title/Title";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

const Covid = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const handleStayTune=()=>{
    Swal.fire({
        title: "Thans For Your Interest.Please Connected With Us.",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
  }

  return (
    <div className="font-popins">
      <Title heading={"vacine"} short={"covid vacine"}></Title>
      <div className="bg-fixed flex justify-center overflow-hidden relative">
        <img
          className="hover:scale-110 hover:rotate-1 h-[300px] md:h-full cursor-pointer duration-1000"
          src="https://i.ibb.co/s9cNGZR/covid.webp"
          alt=""
        />
        <div className="absolute  top-20 w-full left-20 ">
          <h1 className="uppercase text-primary mb-4 font-bold md:text-3xl">
            Covid -19
          </h1>
          <p className="md:text-xl mb-4 text-black font-semibold font-jost">
            Protext The Community <br /> And Yourself Get Vaccinated
          </p>
          <Button className="bg-primary text-white " onPress={onOpen}>Stay Tune</Button>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                  The Critical Role and Benefits of COVID-19 Vaccines
                  </ModalHeader>
                  <ModalBody>
                    <p>
                    COVID-19 vaccines have been pivotal in reducing the severity and spread of the virus globally. By stimulating the immune system to recognize and fight the virus, vaccines have significantly lowered the rates of severe illness, hospitalization, and death. This protection is especially crucial for vulnerable populations, such as the elderly and those with underlying health conditions.
                    </p>
                    <p>
                    In addition to individual protection, widespread vaccination has contributed to community immunity, reducing the virus's ability to spread. This collective immunity helps protect those who cannot be vaccinated, such as individuals with certain medical conditions. Vaccination campaigns have thus been essential in managing outbreaks and preventing healthcare systems from being overwhelmed.
                    </p>
                   
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button onClick={handleStayTune} color="primary" onPress={onClose}>
                      Get Touch
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Covid;
