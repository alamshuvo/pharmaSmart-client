import Title from "../Title/Title";

const OurLatestBlog = () => {
  return (
    <div>
      <Title heading={"blog"} short={"Our Latest Blog"}></Title>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-4">
        <div>
          <div className="overflow-hidden">
            
            <img className="rounded-lg hover:scale-110 cursor-pointer duration-1000" src="https://i.ibb.co/82wVxYX/exercise.webp" alt="" />
          </div>
          <div className="lg:text-start text-center ">
            <p className="text-primary mb-5">4 OCTOBER, 2022</p>
            <p className="hover:text-primary mb-5">Get The exercise Limited Mobility</p>
            <p className="mb-5">This is our blog please add  more text</p>
            <button className=" border-b-2 border-primary hover:border-none"> Read More </button>
          </div>
        </div>
        <div>
          <div className="overflow-hidden">
            
            <img className="rounded-lg hover:scale-110 cursor-pointer duration-1000" src="https://i.ibb.co/WsGnZ3H/heart.webp" alt="" />
          </div>
          <div className="lg:text-start text-center ">
            <p className="text-primary mb-5">4 OCTOBER, 2022</p>
            <p className="hover:text-primary mb-5">Latest Equipement For The Heart</p>
            <p className="mb-5">This is our blog please add  more text</p>
            <button className=" border-b-2 border-primary hover:border-none"> Read More </button>
          </div>
        </div>
        <div>
          <div className="overflow-hidden">
            
            <img className="rounded-lg hover:scale-110 cursor-pointer duration-1000" src="https://i.ibb.co/3pjs5wh/routine.webp" alt="" />
          </div>
          <div className="lg:text-start text-center ">
            <p className="text-primary mb-5">4 OCTOBER, 2022</p>
            <p className="hover:text-primary mb-5">For Routine Checkup of Children</p>
            <p className="mb-5">This is our blog please add  more text</p>
            <button className=" border-b-2 border-primary hover:border-none"> Read More </button>
          </div>
        </div>
        <div>
          <div className="overflow-hidden">
            
            <img className="rounded-lg hover:scale-110 cursor-pointer duration-1000" src="https://i.ibb.co/2n9vfSV/transfusion.webp" alt="" />
          </div>
          <div className="lg:text-start text-center ">
            <p className="text-primary mb-5">4 OCTOBER, 2022</p>
            <p className="hover:text-primary mb-5">Transfusio Strategy and heart...</p>
            <p className="mb-5">This is our blog please add  more text</p>
            <button className=" border-b-2 border-primary hover:border-none"> Read More </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurLatestBlog;
