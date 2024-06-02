

const HeadingUpBanner = ({img,text1,text2}) => {
    return (
        <div className="bg-fixed relative overflow-hidden">
        <img
          src={img}
          className="bg-fixed h-[300px] hover:scale-105 hover:rotate-1 cursor-pointer duration-500 w-full object-cover bg-center "
          alt=""
        />
        <div className="absolute   bottom-0">
          <p className=" text-xl font-jost text-primary font-bold ">
            {" "}
            <span>{text1}</span> / <span className="">{text2}</span>
          </p>
        </div>
      </div>
    );
};

export default HeadingUpBanner;