import axios from "axios";
import {useContext} from "react";
import {useNavigate} from "react-router-dom";
import AuthContext from "../Provider/AuthContext";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});

const UseAxiosSecure = () => {
  // !!ccc!!!

  const navigate = useNavigate();
  const {logOut} = useContext(AuthContext);

  // Request Interceptor
  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  // Response Interceptor
  axiosSecure.interceptors.response.use(
    (response) => response, // If response is OK
    async (error) => {
      const status = error.response?.status;
      if (status === 401 || status === 403) {
        console.warn("Unauthorized or Forbidden - Logging out...");
        await logOut();
        navigate("/login");
      }
      return Promise.reject(error); // Propagate error
    }
  );

  return axiosSecure;
};

export default UseAxiosSecure;
