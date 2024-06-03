import Helmeta from "../../components/Helmet/Helmeta";
import { Input } from "@nextui-org/react";
// import {EyeFilledIcon} from "./EyeFilledIcon";
// import {EyeSlashFilledIcon} from "./EyeSlashFilledIcon";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import HeadingUpBanner from "../../components/headingUpBanner/HeadingUpBanner";
import UseAuth from "../../hooks/UseAuth";
import { useForm } from "react-hook-form";
import UseAxiosPublic from "../../hooks/UseAxiosPublic";
import Swal from "sweetalert2";



const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
      } = useForm();


  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const {loginUser,gogleSignIn}=UseAuth();
  const axiosPublic=UseAxiosPublic();
  const navigate=useNavigate()
const handleGoogleSubmit=()=>{
    gogleSignIn()
    .then(res=>{
        console.log(res.user);
        const data={
            name:res.user?.displayName,
            email:res.user?.email,
            photo:res.user?.photoURL,
            role:"user"
        }
        axiosPublic.post("/users",data)
        .then(res=>{
            console.log(res.data);
           
            if (res.data.insertedId==null) {
              Swal.fire({
                title: "User Already Exist In Database",
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
              });
            }
        })
        navigate("/")
    })
    .then(error=>{
        console.log(error);
    })
}







  return (
    <div>
      <Helmeta title={"login"}></Helmeta>
      {/* banner image section */}
    <HeadingUpBanner img={"https://i.ibb.co/2ZQGQ0q/2148533456.jpg"} text1={"Home"} text2={"Login"}></HeadingUpBanner>
      {/* Login form section  */}
      <div className="border-2 border-primary mt-5 p-2">
        <p className="text-center uppercase font-popins font-bold md:text-2xl text-primary mt-5 ">
          Login Now
        </p>

        <div className="md:w-1/2 mx-auto font-popins  border-2 rounded-t-large p-2">
          <form className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
               {...register("email")}
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              {/* <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              /> */}
              <Input
                 {...register("password")}
                variant="bordered"
                placeholder="Enter your password"
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibility}
                  >
                    {isVisible ? (
                      <FaEye className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <FaEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
                type={isVisible ? "text" : "password"}
                className=""
              />
             
            </div>
            <p className="capitalize">New here ?<Link to={"/signup"} className="text-primary" > Sign Up Now</Link></p>
            

            <div className="form-control mt-6">
              <button className="btn bg-primary text-white hover:text-black">Login</button>
            </div>
          </form>
          {/* google login */}
          <div className="divider">Login With Another Way</div>
          <div>
            <button onClick={handleGoogleSubmit} className="flex justify-center items-center gap-2 btn w-full bg-primary text-white text-xl hover:text-black">Google <FcGoogle></FcGoogle></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
