import toast, {Toaster} from "react-hot-toast";
import {Link, Outlet} from "react-router-dom";
import AuthContext from "../Provider/AuthContext";
import {useContext} from "react";
import useAdmin from "../Hooks/Admin/useAdmin";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Navbar from "../Components/Navbar/Navbar";

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
      <Navbar></Navbar>
      <div className="flex flex-col md:flex-row">
        {/* Dashboard sidebar */}
        <div className="w-full md:w-64 h-auto md:min-h-screen ">
          {/* <Link to="/">
            <h1 className="text-xl md:text-2xl font-bold p-3 mt-3 ml-5 text-gray-900 dark:text-white">
              Matrimony
            </h1>
          </Link> */}

          <ul className="mt-4 md:mt-10 ml-5 flex flex-col gap-1 md:gap-2 md:text-sm lg:text-lg">
            {isAdmin ? (
              //! Admin Dashboard
              <>
                <li>
                  <Link
                    to="/dashboard/adminDashboard"
                    className="hover:bg-black hover:text-white px-3 py-2 rounded-md font-semibold block dark:text-gray-200"
                  >
                    Admin Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/manageUser"
                    className="hover:bg-black hover:text-white px-3 py-2 rounded-md font-semibold block dark:text-gray-200"
                  >
                    Manage Users
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/approvedPremium"
                    className="hover:bg-black hover:text-white px-3 py-2 rounded-md font-semibold block dark:text-gray-200"
                  >
                    Approved Premium
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/approveContact"
                    className="hover:bg-black hover:text-white px-3 py-2 rounded-md font-semibold block dark:text-gray-200"
                  >
                    Approved Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/payedUsers"
                    className="hover:bg-black hover:text-white px-3 py-2 rounded-md font-semibold block dark:text-gray-200"
                  >
                    Payed Users
                  </Link>
                </li>
              </>
            ) : (
              //! User Dashboard
              <>
                <li>
                  <Link
                    to="/dashboard/editBioData"
                    className="hover:bg-black hover:text-white px-3 py-2 rounded-md font-semibold block dark:text-gray-200"
                  >
                    EditBioData
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/viewBio"
                    className="hover:bg-black hover:text-white px-3 py-2 rounded-md font-semibold block dark:text-gray-200"
                  >
                    View-Bio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/myContact"
                    className="hover:bg-black hover:text-white px-3 py-2 rounded-md font-semibold block dark:text-gray-200"
                  >
                    My Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/favorites"
                    className="hover:bg-black hover:text-white px-3 py-2 rounded-md font-semibold block dark:text-gray-200"
                  >
                    Favorites BioData
                  </Link>
                </li>
              </>
            )}
            <div className="border border-dotted mt-2 dark:border-gray-600"></div>
            {/* shared link */}
            <li>
              <Link
                to="/dashboard/userProfile"
                className="hover:bg-black hover:text-white px-3 py-2 rounded-md font-semibold block dark:text-gray-200"
              >
                User Profile
              </Link>
            </li>
            <li>
              <Link to="/">
                <button className="hover:bg-black hover:text-white px-3 py-2 rounded-md font-semibold block dark:text-gray-200">
                  Home
                </button>
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogOut}
                className="hover:bg-black hover:text-white px-3 py-2 rounded-md font-semibold block dark:text-gray-200"
              >
                Logout
              </button>
            </li>
            {/* shared link */}
          </ul>
        </div>
        <div className="flex-1 p-4 min-h-screen ">
          <Dashboard />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
