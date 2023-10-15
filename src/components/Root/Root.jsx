import { Outlet } from "react-router-dom";
import Headline from "../Headline/Headline";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div>
      <Headline></Headline>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
