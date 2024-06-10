import { loadStripe } from "@stripe/stripe-js";
import Helmeta from "../../components/Helmet/Helmeta";
import Title from "../Home/Home/Title/Title";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

// todo add publishable key 
const stripePromise=loadStripe(import.meta.env.VITE_Payment)

const CheckOut = () => {
    return (
        <div>
            <Title heading={"CheckOut"} short={"pay your ammount"}></Title>
            <Helmeta title={"checkOut"}></Helmeta>
            <div>
                <Elements stripe={stripePromise}>
                     <div className="border-2 min-h-56 my-16 p-4"> <CheckOutForm></CheckOutForm></div>
                </Elements>
            </div>
        </div>
    );
};

export default CheckOut;