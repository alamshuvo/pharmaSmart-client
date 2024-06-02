import { Link } from "react-router-dom";
import Slide from "./Slide";

const Banner = () => {
  return (
    <div className="flex md:flex-row flex-col gap-3">
      {/* slider div */}
      <div className="md:w-4/6">
        <Slide></Slide>
      </div>
      {/* side div */}
      <div className="md:w-2/6 flex flex-col gap-1">
        <div className="relative">
          <img src="https://i.ibb.co/W2QXyjr/zandu.webp" alt="" />
          <div className="font-popins absolute top-5 md:left-5 left-2 my-2">
            <h2 className="text-primary md:text-2xl font-bold mb-2">
              25% Save
            </h2>
            <p className="font-bold text-black md:text-xl mb-2">
              Zandu <br />
              Ovoutoline Forte
            </p>
            <Link className="hover:text-primary hover:border-b-1 capitalize md:text-xl  hover:border-primary">
              {" "}
              Shope Now{" "}
            </Link>
          </div>
        </div>
        <div className="relative">
          <img src="https://i.ibb.co/gdyHx9B/blood.webp" alt="" />
          <div className="font-popins absolute top-5 md:left-5 left-2 my-2">
            <h2 className="text-primary md:text-2xl font-bold mb-2">
              50% Save
            </h2>
            <p className="font-bold text-black md:text-xl mb-2">
              Medical <br /> Blood Pressure
            </p>
            <Link className="hover:text-primary hover:border-b-1 capitalize md:text-xl  hover:border-primary">
              {" "}
              Shope Now{" "}
            </Link>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Banner;
