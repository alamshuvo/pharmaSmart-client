import Helmeta from "../../../components/Helmet/Helmeta";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";

import Covid from "./Covid/Covid";
import Discount from "./DiscountCard/Discount";
import EarlyShipment from "./EarlyShipment/EarlyShipment";
import OurLatestBlog from "./OurLatestBlog/OurLatestBlog";
import Shortbanar from "./shortbanar/Shortbanar";

const Home = () => {
  return (
    <div className="font-jost container  mx-auto">
        <Helmeta title={"Home"}></Helmeta>
      <div className="mt-5 md:flex justify-center hidden">
        <Shortbanar></Shortbanar>
      </div>
      <div className="my-5">
        <Banner></Banner>
      </div>
    
      <div className="my-10 md:mt-40 mt-28">
        <Category></Category>
      </div>
      <div className="my-10 md:mt-40 mt-28">
        <Discount></Discount>
      </div>
      <div className="my-10 md:mt-40 mt-28">
        <Covid></Covid>
      </div>
      <div className="my-10 md:mt-40 mt-28">
        <OurLatestBlog></OurLatestBlog>
      </div>
      <div className="my-10 md:mt-40 mt-28">
        <EarlyShipment></EarlyShipment>
      </div>
    </div>
  );
};

export default Home;
