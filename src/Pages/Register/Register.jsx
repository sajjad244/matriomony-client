import {useContext} from "react";
import {Link} from "react-router-dom";
import AuthContext from "../../Provider/AuthContext";
import toast from "react-hot-toast";

const Register = () => {
  const {createNewUser} = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photoURL = form.photoURL.value;

    console.log(name, email, photoURL, password);

    //! Password validation regex
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must have at least 6 characters, including uppercase and lowercase letters."
      );
      return;
    }

    createNewUser(email, password, name, photoURL)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="flex justify-center h-screen items-center container mx-auto p-8">
      {/* Login Form Section */}
      <div className="flex flex-col justify-center w-full md:w-1/2 px-8 md:px-16 bg-white rounded-lg ">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
          Register Now
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6 shadow-lg p-8">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block  font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
              placeholder="Enter your full name"
            />
          </div>

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
          {/*photo url */}
          <div className="">
            <label className="block text-gray-700 font-medium mb-2">
              Photo URL
            </label>
            <input
              type="url"
              name="photoURL"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-400"
              placeholder="Enter your photo URL"
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block font-medium text-gray-700"
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
            Register
          </button>
        </form>

        {/* Register Link */}
        <p className="mt-4  text-center text-gray-600">
          Already have an account?
          <Link to="/login" className="text-blue-500 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
