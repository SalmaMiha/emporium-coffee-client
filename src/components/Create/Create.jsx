import { Link } from "react-router-dom";
import createbg from "../../assets/11.png";

const Create = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const coffee = { name, chef, supplier, taste, category, details, photo };

    console.log(coffee);
  };

  return (
    <div style={{ backgroundImage: `url("${createbg}")` }}>
      <div className="mx-40 my-10">
        <Link to="/">
          <p className="font-rancho text-xl">Back to Home</p>
        </Link>
        <div className="bg-[#F4F3F0] px-10 py-5 space-y-2">
          <h2 className="font-rancho text-center text-3xl">Add New Coffee</h2>
          <p className="font-raleway text-center text-sm pb-5">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
          <form onSubmit={handleAddCoffee} className="grid grid-cols-2 gap-5">
            <div className="form-control">
              <label className="font-raleway font-semibold mb-2">Name</label>
              <input
                className="px-5 py-2"
                type="text"
                placeholder="Enter coffee name"
                name="name"
                id=""
              />
            </div>
            <div className="form-control">
              <label className="font-raleway font-semibold mb-2">Chef</label>
              <input
                className="px-5 py-2"
                type="text"
                placeholder="Enter coffee chef"
                name="chef"
                id=""
              />
            </div>
            <div className="form-control">
              <label className="font-raleway font-semibold mb-2">
                Supplier
              </label>
              <input
                className="px-5 py-2"
                type="text"
                placeholder="Enter coffee supplier"
                name="supplier"
                id=""
              />
            </div>
            <div className="form-control">
              <label className="font-raleway font-semibold mb-2">Taste</label>
              <input
                className="px-5 py-2"
                type="text"
                placeholder="Enter coffee taste"
                name="taste"
                id=""
              />
            </div>
            <div className="form-control">
              <label className="font-raleway font-semibold mb-2">
                Category
              </label>
              <input
                className="px-5 py-2"
                type="text"
                placeholder="Enter coffee category"
                name="category"
                id=""
              />
            </div>
            <div className="form-control">
              <label className="font-raleway font-semibold mb-2">Details</label>
              <input
                className="px-5 py-2"
                type="text"
                placeholder="Enter coffee details"
                name="details"
                id=""
              />
            </div>
            <div className="form-control col-span-2">
              <label className="font-raleway font-semibold mb-2">Photo</label>
              <input
                className="px-5 py-2"
                type="text"
                placeholder="Enter photo URL"
                name="photo"
                id=""
              />
            </div>
            <button className="bg-[#D2B48C] text-[#331A15] font-rancho col-span-2 py-1 text-lg border-2 border-[#331A15]">
              <input type="submit" value="Add Coffee" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
