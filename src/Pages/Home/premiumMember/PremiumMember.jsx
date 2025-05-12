import {Link} from "react-router-dom";
import {useState} from "react";
import UseAllData from "../../../Hooks/AllData/UseAllData";

const PremiumMember = () => {
  const [premiumMembers] = UseAllData();
  const [sortOrder, setSortOrder] = useState("asc");

  // Sort Functionality
  const sortedMembers = [...premiumMembers].sort((a, b) => {
    const ageA = parseInt(a.bioFormData?.age || 0);
    const ageB = parseInt(b.bioFormData?.age || 0);
    return sortOrder === "asc" ? ageA - ageB : ageB - ageA;
  });

  return (
    <div className="container mx-auto px-4 py-10 dark:bg-gray-900">
      <h2 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100 text-center mt-10 mb-5">
        Premium Members
      </h2>

      {/* Sort Dropdown */}
      <div className="flex justify-end mb-5">
        <select
          onChange={(e) => setSortOrder(e.target.value)}
          value={sortOrder}
          className="p-2 border rounded bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 shadow dark:border-gray-600"
        >
          <option value="asc">Sort by Age: Ascending</option>
          <option value="desc">Sort by Age: Descending</option>
        </select>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedMembers.slice(0, 6).map((member) => (
          <div
            key={member.biodataId || member._id}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
          >
            {/* Member Image */}
            <div className="flex justify-center bg-gradient-to-r from-blue-400 to-purple-500 p-4">
              <img
                src={member.bioFormData?.img}
                alt={member.bioFormData?.name}
                className="w-24 h-24 rounded-full border-4 border-white object-cover"
              />
            </div>

            {/* Member Info */}
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                {member.bioFormData?.name || "N/A"}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {member.bioFormData?.occupation || "No Occupation"}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Age: {member.bioFormData?.age || "N/A"} years
              </p>
            </div>

            {/* Address Info */}
            <div className="px-4 pb-4">
              <p className="text-gray-500 dark:text-gray-300">
                <strong>Permanent:</strong>{" "}
                {member.bioFormData?.permanentDivision || "N/A"}
              </p>
              <p className="text-gray-500 dark:text-gray-300">
                <strong>Present:</strong>{" "}
                {member.bioFormData?.presentDivision || "N/A"}
              </p>
            </div>

            {/* View Details Button */}
            <div className="bg-gray-50 dark:bg-gray-800 p-4">
              <Link to={`viewDetails/${member._id}`}>
                <button className="w-full btn-outline">View Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PremiumMember;
