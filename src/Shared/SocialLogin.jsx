import {useContext} from "react";
import {FaGoogle} from "react-icons/fa";
import AuthContext from "../Provider/AuthContext";
import {useLocation, useNavigate} from "react-router-dom";
import toast from "react-hot-toast";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";

const SocialLogin = () => {
  const {googleLogIn} = useContext(AuthContext);
  const axiosPublic = UseAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleLogin = () => {
    googleLogIn()
      .then((result) => {
        console.log(result.user);
        const userInfo = {
          name: result.user.displayName,
          email: result.user.email,
          photoURL: result.user.photoURL,
        };

        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
          // Navigate and show success message
          navigate(location?.state || "/");
        });

        toast.success(`Welcome successfully logged in.`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {/* Google Login */}
      <div className="my-2">
        <button
          onClick={handleGoogleLogin}
          type="button"
          className="w-full bg-green-500 hover:bg-red-600 text-white py-2 rounded-md focus:outline-none focus:ring focus:ring-red-300 flex items-center justify-center"
        >
          <FaGoogle className="inline-block mr-1 text-lg" /> Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
