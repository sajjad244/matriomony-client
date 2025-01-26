import {useEffect, useState} from "react";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";

const ApprovedPremium = () => {
  const axiosSecure = UseAxiosPublic();
  const [requests, setRequests] = useState([]);

  const requestedData = requests.filter((item) => item.status === "Requested");

  // Fetch all premium approval requests
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const {data} = await axiosSecure.get("/users"); // Replace with your API endpoint
        setRequests(data);
      } catch (error) {
        console.error("Error fetching premium requests:", error);
      }
    };
    fetchRequests();
  }, [axiosSecure]);

  console.log(requestedData);

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
          {requestedData.map((request) => (
            <tr key={request.email}>
              <td className="border px-4 py-2">{request.name}</td>
              <td className="border px-4 py-2">{request.email}</td>
              <td className="border px-4 py-2">{request.bioDataId}</td>
              <td className="border px-4 py-2">{request.status}</td>
              <td className="border px-4 py-2 text-center">
                <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                  Make Premium
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {requestedData.length === 0 && (
        <p className="text-center text-gray-500 mt-4">No requests available.</p>
      )}
    </div>
  );
};

export default ApprovedPremium;
