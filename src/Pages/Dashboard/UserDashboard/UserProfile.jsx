import {useContext, useState} from "react";
import AuthContext from "../../../Provider/AuthContext";
import toast from "react-hot-toast";

const UserProfile = () => {
  const {user, changeUserPassword} = useContext(AuthContext);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChangePassword = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      return toast.error("Passwords do not match");
    }

    try {
      await changeUserPassword(currentPassword, newPassword);
      toast.success("Password updated successfully", {id: "changePassword"});
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      toast.error(error.message);
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto h-screen flex justify-center items-center bg-gray-100 dark:bg-gray-900 mt-10 lg:mt-0 ">
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

        {/* Change Password Heading */}
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white m-5">
          Change Password
        </h1>

        {/* Change Password Form */}
        <form onSubmit={handleChangePassword} className="mt-4 ">
          <input
            type="password"
            placeholder="Current Password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="input input-bordered w-full border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 rounded-md p-2 "
            required
          />

          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="input input-bordered w-full border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 rounded-md p-2 my-4"
            required
          />

          <input
            type="password"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="input input-bordered w-full border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 rounded-md p-2 mb-4"
            required
          />

          <button type="submit" className="w-full btn-outline">
            Update Password
          </button>
        </form>
        {/*  */}
      </div>
    </div>
  );
};

export default UserProfile;
