import {Outlet} from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import {Toaster} from "react-hot-toast";
import Footer from "../Components/Footer/Footer";

const MainLayouts = () => {
  return (
    <>
      <Toaster />
      {/* navbar */}
      <Navbar></Navbar>
      {/* routes */}
      <Outlet></Outlet>
      {/* footer */}
      <Footer></Footer>
    </>
  );
};

export default MainLayouts;
