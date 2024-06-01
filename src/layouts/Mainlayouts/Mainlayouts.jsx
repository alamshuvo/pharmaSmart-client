import { Outlet } from "react-router-dom";
import Navvar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";


const Mainlayouts = () => {
    return (
        <div>
            
            <Navvar></Navvar>
            
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayouts;