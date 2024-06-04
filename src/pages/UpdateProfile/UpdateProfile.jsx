import { useForm } from "react-hook-form";
import Helmeta from "../../components/Helmet/Helmeta";
import HeadingUpBanner from "../../components/headingUpBanner/HeadingUpBanner";
import UseAuth from "../../hooks/UseAuth";
import UseAxiosPublic from "../../hooks/UseAxiosPublic";
import Title from "../Home/Home/Title/Title";
import Swal from "sweetalert2";
const img_hosting_key = import.meta.env.VITE_img_hosting_key;
console.log(img_hosting_key);
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;

const UpdateProfile = () => {
    const {user,updateUserProfile}=UseAuth();
    console.log(user);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
      const axiosPublic=UseAxiosPublic()
    
      const onSubmit = async (data) => {
        const photo = { image: data.photo[0] };
        // console.log(photo);
        const response = await axiosPublic.post(img_hosting_api, photo, {
          headers: {
            "content-type": "multipart/form-data",
          },
        })
        const photo1= response.data.data.display_url;
        updateUserProfile(data.name,photo1)
        Swal.fire({
                      title: "User updated Successfully ",
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
                   
       
        
        }
    return (
        <div className="my-10">
            <Helmeta title={"UpdateProfile"}></Helmeta>
            <HeadingUpBanner img={"https://i.ibb.co/Njs3F8G/8673087-3949019.jpg"} text1={"Update Profile"}></HeadingUpBanner>
            <Title heading={"Update"} short={"Update your profile"}></Title>
            <div className="my-10 p-5">
                <div className="flex flex-col justify-center items-center"><img className="w-[100px] h-[100px]" src={user?.photoURL} alt="" />
                <p>Name: {user?.displayName}</p>
                <p>Email: {user?.email}</p>
                </div>
            </div>
            <div className="md:w-1/2 p-5 border-2 border-primary mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>

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
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="file"
                  {...register("photo", { required: true })}
                  className="file-input file-input-bordered file-input-primary w-full max-w-xs"
                />
               
                {errors.photo && <span>Photo is required</span>}
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-primary text-white hover:text-black">
                  Update Profile
                </button>
              </div>
              
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;