import {Outlet} from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import {Toaster} from "react-hot-toast";

const MainLayouts = () => {
  return (
    <>
      <Toaster />
      {/* navbar */}
      <Navbar></Navbar>
      {/* routes */}
      <Outlet></Outlet>
    </>
  );
};

export default MainLayouts;
