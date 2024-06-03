import {
  FaCcMastercard,
  FaCcVisa,
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaPaypal,
  FaPhone,
  FaStripe,
  FaTwitter,
  FaVoicemail,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { Input } from "@nextui-org/react";

const Footer = () => {
  return (
    <div className="p-5 font-popins">
      <div className="grid md:grid-cols-5 gap-10 grid-cols-2 border-b-4 ">
        {/* store information */}
        <div>
          <h1 className="border-primary border-b-3 text-xl  ">
            Store Information
          </h1>
          <div className="mt-5 flex flex-col justify-start items-start my-5">
            <div className="flex justify-center items-center gap-2">
              <FaLocationPin className="text-primary"></FaLocationPin>
              <p>
                ParmaSmart Medical Store <br />
                Mirsarai ,Chittagong ,Bangladesh
              </p>
            </div>
            <div className="flex justify-center items-center gap-2 mt-5">
              <FaPhone className="text-primary"></FaPhone>
              <p>+01980640702</p>
            </div>
            <div className="flex justify-center items-center gap-2 mt-5">
              <FaVoicemail className="text-primary"></FaVoicemail>
              <p>
                ifatakharalamshuvo11 <br /> @gmail.com
              </p>
            </div>
          </div>
        </div>
        {/* information */}
        <div>
          <h1 className="border-primary border-b-3 text-xl  "> Information</h1>
          <div className="mt-5 flex flex-col justify-start items-start my-5">
            <p>Search</p>
            <p>Site map</p>
            <p>Privacy policy</p>
            <p>FAQ</p>
          </div>
        </div>
        {/* our company */}
        <div>
          <h1 className="border-primary border-b-3 text-xl  "> Our Company</h1>
          <div className="mt-5 flex flex-col justify-start items-start my-5">
            <p>About Us</p>
            <p>Chart</p>
            <p>Terms And Conditions</p>
            <p>Deleviry</p>
            <p>Security Payment</p>
          </div>
        </div>
        <div>
          <h1 className="border-primary border-b-3 text-xl  ">Your Account</h1>
          <div className="mt-5 flex flex-col justify-start items-start my-5">
            <p>News</p>
            <p>Privacy policy</p>
            <p>My Account</p>
            <p>Price Droops</p>
          </div>
        </div>
        {/* newsleeter */}
        <div>
          <h1 className="border-primary border-b-3 text-xl  ">Newsletter</h1>
          <div className="mt-5 flex flex-col justify-start items-start my-5">
            <p>
              Subscribe to our latest newsletter to get news about special
              discounts.
            </p>
            <Input
              type="email"
              label="Email"
              defaultValue="iftakharalamshuvo11@gmail.com"
              className="max-w-xs mt-5"
            />
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
        <div className="flex flex-row  gap-5 md:justify-start md:items-start mt-5 text-3xl ">
          <FaTwitter className="hover:text-primary"></FaTwitter>
          <FaYoutube className="hover:text-primary"></FaYoutube>
          <FaFacebook className="hover:text-primary"></FaFacebook>
          <FaInstagram className="hover:text-primary"></FaInstagram>
          <FaDiscord className="hover:text-primary"></FaDiscord>
        </div>
        <div className="flex justify-center items-center">
          <p>All Rights Reserved @ Iftakhar Alam | ParmaSmart</p>
        </div>
        <div className="flex flex-row  gap-5 md:justify-start md:items-start mt-5 text-3xl ">
          <FaPaypal className="hover:text-primary"></FaPaypal>
          <FaCcMastercard className="hover:text-primary"></FaCcMastercard>
          <FaStripe className="hover:text-primary"></FaStripe>
          <FaCcVisa className="hover:text-primary"></FaCcVisa>
        </div>
      </div>
    </div>
  );
};

export default Footer;
