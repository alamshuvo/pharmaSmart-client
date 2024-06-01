import { Outlet } from "react-router-dom";
import Navvar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { motion, useScroll, useSpring } from "framer-motion";
import './moton.css'

const Mainlayouts = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });
    return (
        <div>
            <motion.div className="progress-bar bg-primary" style={{ scaleX }} />
            <Navvar></Navvar>
            
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayouts;