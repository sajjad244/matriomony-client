import {useQuery, useMutation} from "@tanstack/react-query";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";
import LoadingSpinner from "../../../Shared/LoadingSpinner";
import toast from "react-hot-toast";
import {useContext} from "react";
import AuthContext from "../../../Provider/AuthContext";

const MyContactRequest = () => {
  const axiosPublic = UseAxiosPublic();
  const {user} = useContext(AuthContext);

  //! Fetch contact requests
  const {
    isLoading,
    data: contactRequests = [],
    refetch,
  } = useQuery({
    queryKey: ["contactRequests"],
    queryFn: async () => {
      const {data} = await axiosPublic.get("/payments");
      return data.filter((req) => req.email === user?.email);
    },
  });

  //! Mutation for deleting a contact request
  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      const {data} = await axiosPublic.delete(`/payments/${id}`);
      return data;
    },
    onSuccess: () => {
      toast.success("Contact request deleted successfully!");
      refetch();
    },
    onError: () => {
      toast.error("Failed to delete the contact request.");
    },
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Contact Requests</h1>

      {/* ✅ Responsive wrapper added */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-800">
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Biodata ID</th>
              <th className="border px-4 py-2">Status</th>
              <th className="border px-4 py-2">Mobile No</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contactRequests.map((request) => (
              <tr key={request._id} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{request.payingInfo.name}</td>
                <td className="border px-4 py-2">
                  {request.payingInfo.bioDataId}
                </td>
                <td className="border px-4 py-2">
                  {request.status === "Approved" ? (
                    <span className="text-green-600 font-bold">Approved</span>
                  ) : (
                    <span className="text-yellow-600 font-bold">Pending</span>
                  )}
                </td>
                <td className="border px-4 py-2">
                  {request.status === "Approved"
                    ? request.payingInfo.phone
                    : "-"}
                </td>
                <td className="border px-4 py-2">
                  {request.status === "Approved"
                    ? request.payingInfo.email
                    : "-"}
                </td>
                <td className="border px-4 py-2">
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                    onClick={() => deleteMutation.mutate(request._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyContactRequest;
