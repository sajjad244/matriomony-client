import {useState} from "react";
import {Link} from "react-router-dom";

const BioPage = () => {
  const [filters, setFilters] = useState({
    ageRange: [18, 60],
    biodataType: "",
    division: "",
  });

  const [biodatas, setBiodatas] = useState([
    // Dummy biodata list
    {
      _id: 1,
      type: "Male",
      profileImage: "https://via.placeholder.com/100",
      division: "Dhaka",
      age: 25,
      occupation: "Software Engineer",
    },
    {
      _id: 2,
      type: "Female",
      profileImage: "https://via.placeholder.com/100",
      division: "Chattagra",
      age: 23,
      occupation: "Teacher",
    },
    // Add more dummy biodatas
  ]);

  const handleFilterChange = (key, value) => {
    setFilters({...filters, [key]: value});
  };
  return (
    <div className="flex gap-4 p-6 h-screen container mx-auto">
      {/* Filter Section */}
      <div className="w-1/4 bg-gray-100 p-4 rounded-md shadow-md">
        <h2 className="text-lg font-bold mb-4">Filters</h2>
        {/* Age Range */}
        <div className="mb-4">
          <label className="block text-sm font-semibold">Age Range</label>
          <input
            type="range"
            min="18"
            max="60"
            step="1"
            value={filters.ageRange[0]}
            onChange={(e) =>
              handleFilterChange("ageRange", [
                e.target.value,
                filters.ageRange[1],
              ])
            }
            className="w-full"
          />
          <input
            type="range"
            min="18"
            max="60"
            step="1"
            value={filters.ageRange[1]}
            onChange={(e) =>
              handleFilterChange("ageRange", [
                filters.ageRange[0],
                e.target.value,
              ])
            }
            className="w-full"
          />
          <p>
            {filters.ageRange[0]} - {filters.ageRange[1]}
          </p>
        </div>

        {/* Biodata Type */}
        <div className="mb-4">
          <label className="block text-sm font-semibold">Biodata Type</label>
          <select
            value={filters.biodataType}
            onChange={(e) => handleFilterChange("biodataType", e.target.value)}
            className="w-full border p-2 rounded-md"
          >
            <option value="">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/* Division */}
        <div className="mb-4">
          <label className="block text-sm font-semibold">Division</label>
          <select
            value={filters.division}
            onChange={(e) => handleFilterChange("division", e.target.value)}
            className="w-full border p-2 rounded-md"
          >
            <option value="">All</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Chattagra">Chattagra</option>
            <option value="Rangpur">Rangpur</option>
            <option value="Barisal">Barisal</option>
            <option value="Khulna">Khulna</option>
            <option value="Mymensingh">Mymensingh</option>
            <option value="Sylhet">Sylhet</option>
          </select>
        </div>
      </div>

      {/* card */}
      {/* Biodata List Section card*/}
      <div className="w-3/4">
        <h2 className="text-lg font-bold mb-4">All Biodatas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {biodatas
            .filter((biodata) => {
              const {ageRange, biodataType, division} = filters;
              return (
                (!biodataType || biodata.type === biodataType) &&
                (!division || biodata.division === division) &&
                biodata.age >= ageRange[0] &&
                biodata.age <= ageRange[1]
              );
            })
            .slice(0, 20)
            .map((biodata) => (
              <div
                key={biodata.id}
                className="bg-white p-4 rounded-md shadow-md flex flex-col items-center text-center"
              >
                <img
                  src={biodata.profileImage}
                  alt="Profile"
                  className="w-24 h-24 rounded-full mb-2"
                />
                <h3 className="font-bold">{biodata.type}</h3>
                <p>{biodata.division}</p>
                <p>{biodata.age} years old</p>
                <p>{biodata.occupation}</p>
                <Link to={`/viewDetails/${biodata._id}`}>
                  <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">
                    View Profile
                  </button>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BioPage;
