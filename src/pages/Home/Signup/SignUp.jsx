import { Link } from "react-router-dom";
import HeadingUpBanner from "../../../components/headingUpBanner/HeadingUpBanner";
import { useState } from "react";
import { Input } from "@nextui-org/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div>
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
            <form className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
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
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="file"
                  className="file-input file-input-bordered file-input-primary w-full max-w-xs"
                />
              </div>

             <div className="form-control">
                  <label className="label">
                      <span className="label-text">Select Role</span>
                    </label>
                  <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>
                      Select Role
                    </option>
                    <option>User</option>
                    <option>Seller</option>
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
