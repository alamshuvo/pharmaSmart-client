import Helmeta from "../../../components/Helmet/Helmeta";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Discount from "./DiscountCard/Discount";
import Shortbanar from "./shortbanar/Shortbanar";

const Home = () => {
  return (
    <div className="font-jost container  mx-auto">
        <Helmeta title={"Home"}></Helmeta>
      <div className="mt-5 md:flex hidden">
        <Shortbanar></Shortbanar>
      </div>
      <div className="my-5">
        <Banner></Banner>
      </div>
      <div className="my-10 mt-40">
        <Category></Category>
      </div>
      <div className="my-10 mt-40">
        <Discount></Discount>
      </div>
    </div>
  );
};

export default Home;
