import {useQuery} from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import toast from "react-hot-toast";
import LoadingSpinner from "../../../Shared/LoadingSpinner";

const AllUsers = () => {
  const axiosSecure = UseAxiosSecure();

  // Fetching users data from backend
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  //! for making Admin Patch req to backend

  const handleMakeAdmin = async (user) => {
    await axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        toast.success("User successfully made Admin!");
      }
    });
  };

  //! for making Admin Patch req to backend

  //? for making premium Patch req to backend

  const handleMakePremium = async (user) => {
    await axiosSecure.patch(`/users/premium/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        toast.success("User successfully made Admin!");
      }
    });
  };

  //? for making Admin Patch req to backend

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div className="container mx-auto p-6 bg-white shadow rounded-md h-screen">
      <h1 className="text-2xl font-bold mb-4 text-center">Manage Users</h1>
      <h2 className="text-lg text-gray-600 mb-6">
        Total Users: {users.length}
      </h2>
      <div className="overflow-x-auto ">
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-4 py-2">Name</th>
              <th className="border border-gray-200 px-4 py-2">Email</th>
              <th className="border border-gray-200 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="hover:bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">
                  {user.name || "N/A"}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {user.email}
                </td>
                {/*  */}
                {/*  */}
                {/*  */}
                <td className="border border-gray-200 px-4 py-2 space-y-2">
                  <button
                    onClick={() => handleMakeAdmin(user)}
                    className={`${
                      user?.role === "admin"
                        ? "bg-red-500 text-white px-3 py-1 rounded-md mr-2 hover"
                        : "bg-blue-500 text-white px-3 py-1 rounded-md mr-2  hover:bg-green-600"
                    }`}
                    disabled={user?.role === "admin"}
                  >
                    {user?.role === "admin" ? "Admin" : "Make Admin"}
                  </button>
                  {/*  */}
                  <button
                    onClick={() => handleMakePremium(user)}
                    className={`${
                      user?.role === "premium"
                        ? "bg-yellow-500 text-white px-3 py-1 rounded-md mr-2 hover"
                        : "bg-blue-500 text-white px-3 py-1 rounded-md mr-2 hover:bg-green-600"
                    }`}
                    disabled={user?.role === "premium"}
                  >
                    {user?.role === "premium" ? "Premium" : "Make Premium"}
                  </button>
                </td>
                {/*  */}
                {/*  */}
                {/*  */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
