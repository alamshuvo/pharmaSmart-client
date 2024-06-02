import { Link, useNavigate } from "react-router-dom";
import HeadingUpBanner from "../../../components/headingUpBanner/HeadingUpBanner";
import { useState } from "react";
import { Input } from "@nextui-org/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import UseAxiosPublic from "../../../hooks/UseAxiosPublic";
import UseAuth from "../../../hooks/UseAuth";
import Helmeta from "../../../components/Helmet/Helmeta";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
const img_hosting_key = import.meta.env.VITE_img_hosting_key;
console.log(img_hosting_key);
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;

const SignUp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const axiosPublic = UseAxiosPublic();
  const { createUser, updateUserProfile } = UseAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const photo = { image: data.photo[0] };
    // console.log(photo);
    const response = await axiosPublic.post(img_hosting_api, photo, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    // console.log("ekhan tekeh ", response.data.data.display_url);
    // console.log(data,response.data,"cobi r jinis cier");
    createUser(data.email, data.password).then((res) => {
      const logdUser = res.user;
    //   console.log(logdUser);
      const photo= response.data.data.display_url

      updateUserProfile(logdUser.name,photo)
        .then(() => {
          const userInfo = {
            name: data.name,
            email: data.email,
            // password: data.password,
            photo: response.data.data.display_url,
            role: data.role,
          };
          console.log(userInfo);
            axiosPublic.post("/users",userInfo)
            .then(res=>{
              if (res.data.insertedId) {
                Swal.fire({
                  title: "User created Successfully ",
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
                setTimeout(() => {
                  window.location.reload();
                }, 1000);
                reset();
                navigate("/")
              }
            })
        //   Profile updated!
        //   ...
        })
        .catch((error) => {
          // An error occurred
          // ...
        });
    });
  };
  console.log(watch("name"));
  return (
    <div>
      <Helmeta title={"signup"}></Helmeta>
      <HeadingUpBanner
        img={"https://i.ibb.co/YhqJb6k/126742.jpg"}
        text1={"Home"}
        text2={"SignUp"}
      ></HeadingUpBanner>

      <div>
        <div className="border-2 border-primary mt-5 p-2">
          <p className="text-center uppercase font-popins font-bold md:text-2xl text-primary mt-5 ">
            SignUp Now
          </p>

          <div className="md:w-1/2 mx-auto font-popins  border-2 rounded-t-large p-2">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name")}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  {...register("email")}
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
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                />
                {/* password validation start */}
                {errors.password?.type === "required" && (
                  <p className="text-red-500 font-bold">
                    password must be 6 char
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-500 font-bold">
                    password must have a 20 char
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500 font-bold">
                    password must be 6 char
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500 font-bold">
                    password must have one upeercase one lowar case one number
                    and one special char
                  </p>
                )}
                {/* password validation end */}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="file"
                  {...register("photo", { required: true })}
                  className="file-input file-input-bordered file-input-primary w-full max-w-xs"
                />
               
                {errors.photo && <span>Photo is required</span>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Select Role</span>
                </label>
                <select
                  defaultValue={"default"}
                  {...register("role")}
                  className="select select-bordered w-full max-w-xs"
                >
                  <option disabled value={"default"}>
                    Select Role
                  </option>
                  <option value={"user"}>User</option>
                  <option value={"seller"}>Seller</option>
                </select>
              </div>

              <p className="capitalize">
                Already Have An account ?
                <Link to={"/login"} className="text-primary">
                  {" "}
                  Sign In Now
                </Link>
              </p>

              <div className="form-control mt-6">
                <button className="btn bg-primary text-white hover:text-black">
                  Login
                </button>
              </div>
            </form>
            {/* google login */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
