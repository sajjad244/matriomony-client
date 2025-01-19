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
      {
        path: "editBioData",
        element: <EditBio></EditBio>,
      },
      {
        path: "viewBio",
        element: <ViewBio></ViewBio>,
      },
    ],
  },
]);
export default router;
