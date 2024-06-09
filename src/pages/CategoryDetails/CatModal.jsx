import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
  } from "@nextui-org/react";
  import { FaEye } from "react-icons/fa";

const CatModal = ({item}) => {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <div>
                <div>
        <Button onPress={onOpen}>
          <FaEye></FaEye>
        </Button>
        <Modal
          backdrop="opaque"
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          classNames={{
            backdrop:
              "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
          }}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  {item?.name}
                </ModalHeader>
                <ModalBody>
                  <img src={item?.photo} alt="" />
                  <p>Category: {item?.category}</p>
                  <p>Companay: {item?.company}</p>
                  <p>Generic :{item?.generic}</p>
                  <p>description : {item?.description}</p>
                  <p>Stock :{item?.unit}</p>
                  <p>Price Per Unit :{item?.priceperunit}</p>
                  <p>Discount : {item?.discount}</p>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                 
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
        </div>
    );
};

export default CatModal;