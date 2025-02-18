import {Link, useLocation, useNavigate} from "react-router-dom";
import toast from "react-hot-toast";
import {useContext} from "react";
import AuthContext from "../../Provider/AuthContext";
import SocialLogin from "../../Shared/SocialLogin";

const Login = () => {
  const {loginUser} = useContext(AuthContext);

  //! for navigate path
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(location?.state || "/");
        toast.success(`Welcome successfully logged in.`);
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(` Don’t have an account? Register please _!!`);
      });

    form.reset();
  };

  return (
    <div className="flex justify-center h-screen items-center container mx-auto p-8 bg-white dark:bg-gray-900">
      {/* Login Form Section */}
      <div className="flex flex-col justify-center w-full md:w-1/2 px-8 md:px-16  text-gray-800 dark:text-white rounded-lg">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Login to your Account
        </h2>
        <form onSubmit={handleLogin} className="space-y-6 shadow-lg p-8">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white shadow-sm"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-3 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white shadow-sm"
              placeholder="Enter your password"
            />
          </div>

          {/* Social login */}
          <SocialLogin />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full font-semibold px-4 py-3 text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-md shadow-sm"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="mt-4 text-center">
          Don&apos;t have an account?{" "}
          <Link
            to="/register"
            className="text-blue-500 hover:underline dark:text-blue-400"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
