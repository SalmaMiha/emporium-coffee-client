import { CiCoffeeCup } from "react-icons/ci";
import { Link } from "react-router-dom";

const Coffees = () => {
  return (
    <div className="mx-40 text-center mt-20 space-y-2">
      <p className="font-raleway">--- Sip & Savor ---</p>
      <h2 className="font-rancho text-2xl">Our Popular Products</h2>
      <Link to="/create">
        <button className="bg-[#E3B577] px-2 py-1 border-2 border-[#331A15]">
          <div className="flex items-center gap-1 text-xl font-rancho text-white">
            Add Coffee
            <CiCoffeeCup className="text-2xl text-[#331A15]"></CiCoffeeCup>
          </div>
        </button>
      </Link>
    </div>
  );
};

export default Coffees;
