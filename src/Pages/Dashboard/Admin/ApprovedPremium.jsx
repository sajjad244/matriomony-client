import {useQuery} from "@tanstack/react-query";
import LoadingSpinner from "../../../Shared/LoadingSpinner";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";

const ApprovedPremium = () => {
  const axiosPublic = UseAxiosPublic();

  // Fetching users data from backend
  const {
    data: premium = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["approvalPremium"],
    queryFn: async () => {
      const res = await axiosPublic.get("/all/approved/req");
      return res.data;
    },
  });

  // Filter users by "requested" status
  const requestedData = premium.filter((item) => item.status === "requested");

  // Handle form submission (approve premium user)
  const handleMakePremium = async (email) => {
    try {
      const res = await axiosPublic.patch(`/req/approve`, {email});
      if (res.data.success) {
        alert(res.data.message);
        refetch();
      }
    } catch (error) {
      console.error("Error approving user:", error);
      alert(error.response?.data?.message || "Failed to approve user.");
    }
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Premium Approval Requests</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2 text-left">Name</th>
            <th className="border px-4 py-2 text-left">Email</th>
            <th className="border px-4 py-2 text-left">Biodata ID</th>
            <th className="border px-4 py-2 text-left">Status</th>
            <th className="border px-4 py-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {requestedData.length > 0 ? (
            requestedData.map((request) => (
              <tr key={request._id}>
                <td className="border px-4 py-2">{request.name}</td>
                <td className="border px-4 py-2">{request.email}</td>
                <td className="border px-4 py-2">{request.biodataId}</td>
                <td className="border px-4 py-2">{request.status}</td>
                <td className="border px-4 py-2 text-center">
                  <button
                    onClick={() => handleMakePremium(request.email)}
                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                  >
                    Approve
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="5"
                className="border px-4 py-2 text-center text-gray-500"
              >
                No requests available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ApprovedPremium;
