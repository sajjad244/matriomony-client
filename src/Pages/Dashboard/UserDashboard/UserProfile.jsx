import {useContext} from "react";
import AuthContext from "../../../Provider/AuthContext";

const UserProfile = () => {
  const {user} = useContext(AuthContext);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto h-screen flex justify-center items-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 w-full max-w-3xl flex flex-col justify-center items-center">
        {/* Left Section: Profile Image */}
        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-blue-500 mb-6">
          <img
            src={user?.photoURL || "/default-profile.png"}
            alt="User Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Section: User Details */}
        <div className="text-center w-full">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            {user?.displayName || "Anonymous"}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-200 mt-2">
            <strong>Email:</strong> {user?.email}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-200 mt-2">
            <strong>Phone:</strong> {user?.phoneNumber || "N/A"}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-200 mt-2">
            <strong>Address:</strong> {user?.address || "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
