import {Outlet} from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const MainLayouts = () => {
  return (
    <>
      {/* navbar */}
      <Navbar></Navbar>
      {/* routes */}
      <Outlet></Outlet>
    </>
  );
};

export default MainLayouts;
