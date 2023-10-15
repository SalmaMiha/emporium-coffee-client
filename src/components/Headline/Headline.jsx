import headline from "../../assets/15.jpg";

const Headline = () => {
  return (
    <div>
      <div className="relative">
        <img className="" src={headline} alt="" />
        <div className="absolute top-5 z-10 w-full">
          <h2 className="font-rancho  text-3xl  text-white text-center">
            Espresso Emporium
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Headline;
