import {Link} from "react-router-dom";
import errorimg from "../../../src/assets/error.jpg";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 relative overflow-hidden">
      {/* Error Illustration */}
      <img
        src={errorimg}
        alt="Error Illustration"
        className="w-full max-w-md mb-6"
      />

      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Oops! Page not found.
        </h2>
        <p className="text-gray-600 mb-6">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition"
        >
          Go Back Home
        </Link>
      </div>

      {/* Decorative Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-200 rounded-full blur-xl opacity-40"></div>
        <div className="absolute top-0 right-0 w-48 h-48 bg-purple-300 rounded-full blur-xl opacity-30"></div>
      </div>
    </div>
  );
};

export default ErrorPage;
