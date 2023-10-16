import cup1 from "../../assets/cups/Rectangle 9.png";
import cup2 from "../../assets/cups/Rectangle 10.png";
import cup3 from "../../assets/cups/Rectangle 11.png";
import cup4 from "../../assets/cups/Rectangle 12.png";
import cup5 from "../../assets/cups/Rectangle 13.png";
import cup6 from "../../assets/cups/Rectangle 14.png";
import cup7 from "../../assets/cups/Rectangle 15.png";
import cup8 from "../../assets/cups/Rectangle 16.png";

const Follow = () => {
  return (
    <div className="mx-40 mt-20 flex flex-col items-center justify-center">
      <p className="font-raleway text-sm">Follow Us Now</p>
      <h2 className="font-rancho text-3xl text-[#331A15] mb-10">
        Follow on Instagram
      </h2>
      <div className="grid grid-cols-4 gap-5">
        <img className="h-48" src={cup1} alt="" />
        <img className="h-48" src={cup2} alt="" />
        <img className="h-48" src={cup3} alt="" />
        <img className="h-48" src={cup4} alt="" />
        <img className="h-48" src={cup5} alt="" />
        <img className="h-48" src={cup6} alt="" />
        <img className="h-48" src={cup7} alt="" />
        <img className="h-48" src={cup8} alt="" />
      </div>
    </div>
  );
};

export default Follow;
