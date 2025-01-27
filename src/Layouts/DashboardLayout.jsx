import toast, {Toaster} from "react-hot-toast";
import {Link, Outlet} from "react-router-dom";
import AuthContext from "../Provider/AuthContext";
import {useContext} from "react";
import useAdmin from "../Hooks/Admin/useAdmin";
import Dashboard from "../Pages/Dashboard/Dashboard";

const DashboardLayout = () => {
  const [isAdmin] = useAdmin();
  const {logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then(() => {
      toast.success("Logout Successfully");
    });
  };

  return (
    <>
      <Toaster />
      <div className="flex flex-col md:flex-row">
        {/* Dashboard sidebar */}
        <div className="w-full md:w-64 h-auto md:min-h-screen bg-gray-100">
          <Link to="/">
            <h1 className="text-xl md:text-2xl font-bold p-3 mt-3 ml-5">
              Matrimony
            </h1>
          </Link>

          <ul className="mt-4 md:mt-10 ml-5 flex flex-col gap-1 md:gap-2 md:text-sm lg:text-lg">
            {isAdmin ? (
              //! Admin Dashboard
              <>
                <li>
                  <Link
                    to="/dashboard/adminDashboard"
                    className="hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md font-semibold block"
                  >
                    Admin Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/manageUser"
                    className="hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md font-semibold block"
                  >
                    Manage Users
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/approvedPremium"
                    className="hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md font-semibold block"
                  >
                    Approved Premium
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/approveContact"
                    className="hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md font-semibold block"
                  >
                    Approved Contact
                  </Link>
                </li>
              </>
            ) : (
              //! User Dashboard
              <>
                <li>
                  <Link
                    to="/dashboard/editBioData"
                    className="hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md font-semibold block"
                  >
                    EditBioData
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/viewBio"
                    className="hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md font-semibold block"
                  >
                    View-Bio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/myContact"
                    className="hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md font-semibold block"
                  >
                    My Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/favorites"
                    className="hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md font-semibold block"
                  >
                    Favorites BioData
                  </Link>
                </li>
              </>
            )}
            <div className="border border-dotted mt-2"></div>
            {/* shared link */}
            <li>
              <Link to="/">
                <button className="hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md font-semibold block">
                  Home
                </button>
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogOut}
                className="hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md font-semibold block"
              >
                Logout
              </button>
            </li>
            {/* shared link */}
          </ul>
        </div>
        <div className="flex-1 p-4 min-h-screen">
          <Dashboard></Dashboard>
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
