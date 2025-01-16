/* eslint-disable react/prop-types */
import {useContext} from "react";
import AuthContext from "../Provider/AuthContext";
import {Navigate, useLocation} from "react-router-dom";
import LoadingSpinner from "../Shared/LoadingSpinner";

const PrivetRoutes = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivetRoutes;
