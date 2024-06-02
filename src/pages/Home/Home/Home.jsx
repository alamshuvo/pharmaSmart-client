import Helmeta from "../../../components/Helmet/Helmeta";
import Banner from "./Banner/Banner";
import Shortbanar from "./shortbanar/Shortbanar";

const Home = () => {
  return (
    <div className="font-jost container  mx-auto">
        <Helmeta title={"Home"}></Helmeta>
      <div className="mt-5">
        <Shortbanar></Shortbanar>
      </div>
      <div className="my-10">
        <Banner></Banner>
      </div>
    </div>
  );
};

export default Home;
