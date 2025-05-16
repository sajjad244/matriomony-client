import {useQuery, useMutation} from "@tanstack/react-query";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";
import LoadingSpinner from "../../../Shared/LoadingSpinner";
import toast from "react-hot-toast";

const ApprovedContact = () => {
  const axiosPublic = UseAxiosPublic();

  // Fetch contact requests
  const {
    isLoading,
    data: contactRequests = [],
    refetch,
  } = useQuery({
    queryKey: ["contactRequests"],
    queryFn: async () => {
      const {data} = await axiosPublic.get("/payments");
      return data;
    },
  });

  // Mutation for approving requests
  const mutation = useMutation({
    mutationFn: async (id) => {
      const {data} = await axiosPublic.patch(`/payments/${id}`);
      return data;
    },
    onSuccess: () => {
      toast.success("Contact request approved!");
      refetch();
    },
    onError: () => {
      toast.error("Failed to approve the request.");
    },
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Approved Contact Requests</h1>

      {/* ✅ Responsive table wrapper */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Biodata ID</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contactRequests.map((request) => (
              <tr key={request._id}>
                <td className="border px-4 py-2">
                  {request.payingInfo?.name || "N/A"}
                </td>
                <td className="border px-4 py-2">
                  {request.payingInfo?.email || "N/A"}
                </td>
                <td className="border px-4 py-2">
                  {request.payingInfo?.bioDataId || "N/A"}
                </td>
                <td className="border px-4 py-2">
                  {request.status === "Pending" ? (
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                      onClick={() => mutation.mutate(request._id)}
                    >
                      Approve
                    </button>
                  ) : (
                    <span className="text-green-500 font-bold">Approved</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApprovedContact;
