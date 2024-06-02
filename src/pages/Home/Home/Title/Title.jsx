const Title = ({ heading, short }) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center font-popins my-5">
        <h1 className="text-primary md:text-3xl text-2xl mb-2 font-bold upercase">----{heading}----</h1>
        <p className="text-black md:text-xl text-sm font-thik border-b-2 border-primary uppercase border-t-2">{short}</p>
      </div>
    </div>
  );
};

export default Title;
