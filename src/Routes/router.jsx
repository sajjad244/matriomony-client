import {createBrowserRouter} from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import DashboardLayout from "../Layouts/DashboardLayout";
import PrivetRoutes from "./PrivetRoutes";
import EditBio from "../Pages/Dashboard/UserDashboard/EditBio";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import ViewBio from "../Pages/Dashboard/UserDashboard/ViewBio";
import BioPage from "../Pages/BIoDataPages/BioPage";
import ViewDetails from "../Pages/BIoDataPages/ViewDetails";
import Favorites from "../Pages/Dashboard/UserDashboard/Favorites";
import Checkout from "../Pages/Checkout/Checkout";
import MyContact from "../Pages/Dashboard/UserDashboard/MyContact";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers";
import ApprovedPremium from "../Pages/Dashboard/Admin/ApprovedPremium";
import AdminRoutes from "./AdminRoutes";
import AdminDashboard from "../Pages/Dashboard/Admin/AdminDashboard";
import ApprovedContact from "../Pages/Dashboard/Admin/ApprovedContact";
import ContactUs from "../Pages/Home/ContactUs/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "bioPage",
        element: <BioPage></BioPage>,
      },
      {
        path: "viewDetails/:id",
        element: (
          <PrivetRoutes>
            <ViewDetails></ViewDetails>
          </PrivetRoutes>
        ),
      },
      {
        path: "checkout/:id",
        element: <Checkout></Checkout>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivetRoutes>
        <DashboardLayout></DashboardLayout>
      </PrivetRoutes>
    ),
    children: [
      //! users rotes
      {
        path: "editBioData",
        element: (
          <PrivetRoutes>
            <EditBio></EditBio>
          </PrivetRoutes>
        ),
      },
      {
        path: "viewBio",

        element: (
          <PrivetRoutes>
            <ViewBio></ViewBio>
          </PrivetRoutes>
        ),
      },
      {
        path: "myContact",
        element: (
          <PrivetRoutes>
            <MyContact></MyContact>
          </PrivetRoutes>
        ),
      },
      {
        path: "favorites",
        element: (
          <PrivetRoutes>
            <Favorites></Favorites>
          </PrivetRoutes>
        ),
      },
      //! Admin rotes
      {
        path: "manageUser",
        element: (
          <PrivetRoutes>
            <AdminRoutes>
              <AllUsers></AllUsers>
            </AdminRoutes>
          </PrivetRoutes>
        ),
      },
      {
        path: "approvedPremium",
        element: (
          <PrivetRoutes>
            <AdminRoutes>
              <ApprovedPremium></ApprovedPremium>
            </AdminRoutes>
          </PrivetRoutes>
        ),
      },
      {
        path: "adminDashboard",
        element: (
          <PrivetRoutes>
            <AdminRoutes>
              <AdminDashboard></AdminDashboard>
            </AdminRoutes>
          </PrivetRoutes>
        ),
      },
      {
        path: "approveContact",
        element: (
          <PrivetRoutes>
            <AdminRoutes>
              <ApprovedContact></ApprovedContact>
            </AdminRoutes>
          </PrivetRoutes>
        ),
      },
    ],
  },
]);
export default router;
