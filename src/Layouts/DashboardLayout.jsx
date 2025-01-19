import {Toaster} from "react-hot-toast";
import {Link, Outlet} from "react-router-dom";

const DashboardLayout = () => {
  return (
    <>
      <Toaster />
      {/*  */}
      <div className="flex flex-col md:flex-row">
        {/* Dashboard sidebar */}
        <div className="w-full md:w-64 h-auto md:min-h-screen bg-gray-100">
          <Link to="/">
            <h1 className="text-xl md:text-2xl font-bold p-3 mt-3 ml-5 ">
              Matrimony
            </h1>
          </Link>

          <ul className="mt-4 md:mt-10 ml-5 flex flex-col gap-1 md:gap-2 text-base md:text-lg">
            <li>
              <Link
                to="/"
                className="hover:bg-blue-700 px-3 py-2 rounded-md font-semibold block"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/editBioData"
                className="hover:bg-blue-700 px-3 py-2 rounded-md font-semibold block"
              >
                EditBioData
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/viewBio"
                className="hover:bg-blue-700 px-3 py-2 rounded-md font-semibold block"
              >
                View-Bio
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/favorites"
                className="hover:bg-blue-700 px-3 py-2 rounded-md font-semibold block"
              >
                Favorites BioData
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-1  p-4 min-h-screen">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
