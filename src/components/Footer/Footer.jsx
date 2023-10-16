import footerbg from "../../assets/13.jpg";
import logo from "../../assets/logo1.png";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsTelephoneFill,
} from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div style={{ backgroundImage: `url("${footerbg}")` }}>
      <div className="flex mx-40 py-20 justify-between">
        <div className="space-y-2">
          <img className="w-10" src={logo} alt="" />
          <h3 className="font-rancho text-2xl text-[#331A15]">
            Espresso Emporium
          </h3>
          <p className="font-raleway text-sm">
            Always ready to be your friend. Come & Contact with us to share your
            <br />
            memorable moments, to share with your best companion.
          </p>
          <div className="flex gap-3 text-2xl pt-3">
            <BsFacebook></BsFacebook>
            <BsTwitter></BsTwitter>
            <BsInstagram></BsInstagram>
            <FaLinkedin></FaLinkedin>
          </div>
          <p className="font-rancho text-2xl text-[#331A15] pt-2">
            Get in Touch
          </p>
          <p className="flex items-center gap-2 font-raleway">
            <BsTelephoneFill></BsTelephoneFill> +88 01533 333 333
          </p>
          <p className="flex items-center gap-2 font-raleway">
            <MdEmail></MdEmail> info@gmail.com
          </p>
          <p className="flex items-center gap-2 font-raleway">
            <FaLocationDot></FaLocationDot> 72, Wall street, King Road, Dhaka
          </p>
        </div>
        <div className="mt-16 space-y-2">
          <h3 className="text-[#331A15] text-2xl font-rancho">
            Connect with Us
          </h3>
          <input
            className="w-full px-3 py-2"
            placeholder="Name"
            type="text"
            name="name"
            id=""
          />
          <br />
          <input
            className="w-full px-3 py-2"
            placeholder="Email"
            type="text"
            name="email"
            id=""
          />
          <br />
          <textarea
            className="w-full px-3 py-2"
            placeholder="Message"
            name="message"
            id=""
            cols="30"
            rows="4"
          ></textarea>
          <button className="px-4 py-1 text-xl font-rancho border-2 border-[#331A15] rounded-full">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
