/* eslint-disable react/prop-types */
import {Navigate} from "react-router-dom";
import LoadingSpinner from "../Shared/LoadingSpinner";
import useAdmin from "../Hooks/Admin/useAdmin";

const AdminRoutes = ({children}) => {
  const [isAdmin, isLoading] = useAdmin();

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  if (isAdmin) {
    return children;
  }

  return <Navigate to="/dashboard"></Navigate>;
};

export default AdminRoutes;
