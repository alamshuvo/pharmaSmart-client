import Helmeta from "../../../../components/Helmet/Helmeta";
import Title from "../../../Home/Home/Title/Title";

const AdminHome = () => {
    return (
        <div>
            <Helmeta title={"adminHome"}></Helmeta>
            <Title heading={"Home"} short={"Admin home"}></Title>
        </div>
    );
};

export default AdminHome;