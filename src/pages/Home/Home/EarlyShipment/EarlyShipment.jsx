
import { GiCargoShip } from "react-icons/gi";
import { TbMoneybag } from "react-icons/tb";
import { PiPercentDuotone } from "react-icons/pi";
import { FaHandHoldingUsd } from "react-icons/fa";
const EarlyShipment = () => {
  return (
    <div>
      <div className="grid md:grid-cols-4 grid-cols-2 h-full md:h-[100px]  bg-primary text-white justify-center items-center ">
        <div>
          <div className="flex md:flex-row justify-center items-center flex-col gap-3">
            <div>
              <GiCargoShip className="text-5xl hover:text-special-button-hover" />{" "}
            </div>
            <div>
              {" "}
              <p className="md:text-xl font-bold text-center">Fast Free Shipment</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex md:flex-row justify-center items-center flex-col gap-3">
            <div>
            <TbMoneybag className="text-5xl hover:text-special-button-hover" />
            </div>
            <div>
              {" "}
              <p className="md:text-xl font-bold text-center">10-Day Money Return</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex md:flex-row justify-center items-center flex-col gap-3">
            <div>
            <PiPercentDuotone  className="text-5xl hover:text-special-button-hover" />
            </div>
            <div>
              {" "}
              <p className="md:text-xl font-bold text-center">100% Member Discount</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex md:flex-row justify-center items-center flex-col gap-3">
            <div>
            <FaHandHoldingUsd className="text-5xl hover:text-special-button-hover" />
            </div>
            <div className="">
              {" "}
              <p className="md:text-xl font-bold text-center">Save 10% When You</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarlyShipment;
