import {Link} from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center h-screen items-center container mx-auto p-8">
      {/* Login Form Section */}
      <div className="flex flex-col justify-center w-full md:w-1/2 px-8 md:px-16 bg-white rounded-lg ">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
          Login to your account
        </h2>
        <form className="space-y-6">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block  font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block  font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-3 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full font-semibold px-4 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="mt-4  text-center text-gray-600">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
