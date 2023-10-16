import banner from "../../assets/3.png";
import aroma from "../../assets/icons/1.png";
import quality from "../../assets/icons/2.png";
import grade from "../../assets/icons/3.png";
import roasting from "../../assets/icons/4.png";

const Banner = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center h-screen flex justify-end items-center"
        style={{ backgroundImage: `url("${banner}")` }}
      >
        <div className="text-white mr-16 space-y-5">
          <h2 className="font-rancho text-xl">
            Would you like a Cup of Delicious Coffee?
          </h2>
          <p className="font-raleway text-sm">
            Its coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of <br />
            every moment!!! Enjoy the beautiful moments and make them memorable.
          </p>
          <button className=" bg-[#E3B577] font-rancho px-5 py-2 text-black text-xl">
            Learn More
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 bg-[#ECEAE3] px-40 py-10 gap-10">
        <div className="flex flex-col items-center text-center space-y-2">
          <img src={aroma} alt="" />
          <h4 className="font-rancho text-xl">Awesome Aroma</h4>
          <p className="font-raleway text-xs">
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div className="flex flex-col items-center text-center space-y-2">
          <img src={quality} alt="" />
          <h4 className="font-rancho text-xl">High Quality</h4>
          <p className="font-raleway text-xs">
            We served the coffee to you maintaining the best quality
          </p>
        </div>
        <div className="flex flex-col items-center text-center space-y-2">
          <img src={grade} alt="" />
          <h4 className="font-rancho text-xl">Pure Grades</h4>
          <p className="font-raleway text-xs">
            The coffee is made of the green coffee beans which you will love
          </p>
        </div>
        <div className="flex flex-col items-center text-center space-y-2">
          <img src={roasting} alt="" />
          <h4 className="font-rancho text-xl">Proper Roasting</h4>
          <p className="font-raleway text-xs">
            Your coffee is brewed by first roasting the green coffee beans
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
