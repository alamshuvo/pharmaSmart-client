import { Helmet } from "react-helmet-async";

const Helmeta = ({ title }) => {
  return (
    <div>
      <Helmet>
        <title>{`PHARMASMART  | ${title}`}</title>
      </Helmet>
    </div>
  );
};

export default Helmeta;
