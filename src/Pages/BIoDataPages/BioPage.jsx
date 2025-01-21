import {useState} from "react";
import {Link} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import LoadingSpinner from "../../Shared/LoadingSpinner";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";

const BioPage = () => {
  const axiosPublic = UseAxiosPublic();
  const [filters, setFilters] = useState({
    ageRange: [18, 60],
    biodataType: "",
    division: "",
  });

  // Fetch bioData using TanStack Query
  const {data: biodatas, isLoading} = useQuery({
    queryKey: ["bio"],
    queryFn: async () => {
      const {data} = await axiosPublic.get(`/bioDataAll`);
      return data;
    },
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  // Handle filter changes (only updates the state, no logic applied)
  const handleFilterChange = (key, value) => {
    setFilters({...filters, [key]: value});
  };

  return (
    <div className="md:flex  gap-4 p-6 container mx-auto">
      {/* Filter Section */}
      <div className="w-full md:w-1/4 bg-gray-100 p-4 rounded-md shadow-md">
        <h2 className="text-lg font-bold mb-4">Filters</h2>

        {/* Age Range */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Age Range</label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              min="18"
              max="60"
              value={filters.ageRange[0]}
              onChange={(e) =>
                handleFilterChange("ageRange", [
                  parseInt(e.target.value),
                  filters.ageRange[1],
                ])
              }
              className="w-16 border p-2 rounded-md text-center"
            />
            <span>-</span>
            <input
              type="number"
              min="18"
              max="60"
              value={filters.ageRange[1]}
              onChange={(e) =>
                handleFilterChange("ageRange", [
                  filters.ageRange[0],
                  parseInt(e.target.value),
                ])
              }
              className="w-16 border p-2 rounded-md text-center"
            />
          </div>
        </div>

        {/* Biodata Type */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">
            Biodata Type
          </label>
          <select
            value={filters.biodataType}
            onChange={(e) => handleFilterChange("biodataType", e.target.value)}
            className="w-full border p-2 rounded-md"
          >
            <option value="">All</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        {/* Division */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Division</label>
          <select
            value={filters.division}
            onChange={(e) => handleFilterChange("division", e.target.value)}
            className="w-full border p-2 rounded-md"
          >
            <option value="">All</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Chattagong">Chattagong</option>
            <option value="Rangpur">Rangpur</option>
            <option value="Barisal">Barisal</option>
            <option value="Khulna">Khulna</option>
            <option value="Mymensingh">Mymensingh</option>
            <option value="Sylhet">Sylhet</option>
          </select>
        </div>
      </div>

      {/* Biodata List Section */}
      <div className="w-3/4">
        <h2 className="text-lg font-bold mb-4">All Biodatas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {biodatas.map((biodata) => (
            <div
              key={biodata._id}
              className="bg-white p-4 rounded-md shadow-md flex flex-col items-center text-center"
            >
              <img
                src={biodata.bioFormData.img}
                alt="Profile"
                className="w-24 h-24 rounded-full mb-2"
              />
              <h3 className="font-bold">{biodata.bioFormData.name}</h3>
              <p>{biodata?.bioFormData?.biodataType}</p>
              <p>{biodata.bioFormData.permanentDivision}</p>
              <p>{biodata.bioFormData.age} years old</p>
              <p>{biodata.bioFormData.occupation}</p>
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
