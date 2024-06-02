import Title from "../Title/Title";
import DiscountSlider from "./DiscountSlider";


const Discount = () => {
    return (
        <div>
            <Title heading={"Discount"} short={"All discounted product"}></Title>
            <div>
                <DiscountSlider></DiscountSlider>
            </div>
        </div>
    );
};

export default Discount;