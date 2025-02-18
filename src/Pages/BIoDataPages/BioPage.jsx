import {useState} from "react";
import {Link} from "react-router-dom";
import UseAllData from "../../Hooks/AllData/UseAllData";

const BioPage = () => {
  const [allBioData] = UseAllData();
  const [filters, setFilters] = useState({
    ageRange: [18, 60],
    biodataType: "",
    division: "",
    searchQuery: "",
  });

  // Handle filter changes (updates state)
  const handleFilterChange = (key, value) => {
    setFilters({...filters, [key]: value});
  };

  // Filter biodatas based on filters
  const filteredBiodatas = allBioData.filter((biodata) => {
    const {
      ageRange: [minAge, maxAge],
      biodataType,
      division,
      searchQuery,
    } = filters;
    const {
      age,
      biodataType: type,
      name,
      permanentDivision,
    } = biodata.bioFormData;

    return (
      // Filter by age range
      parseInt(age) >= minAge &&
      parseInt(age) <= maxAge &&
      // Filter by biodata type (male, female, etc.)
      (biodataType === "" ||
        type.toLowerCase() === biodataType.toLowerCase()) &&
      // Filter by division
      (division === "" ||
        permanentDivision.toLowerCase() === division.toLowerCase()) &&
      // Filter by search query (name or biodataType match)
      (name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        type.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  return (
    <div className="md:flex gap-4 p-6 container mx-auto bg-white dark:bg-gray-900">
      {/* Filter Section */}
      <div className="w-full md:w-1/4 bg-gray-100 dark:bg-gray-800 p-4 rounded-md shadow-md">
        <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">
          Filters
        </h2>

        {/* Age Range */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-white">
            Age Range
          </label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              min="10"
              max="99"
              value={filters.ageRange[0]}
              onChange={(e) =>
                handleFilterChange("ageRange", [
                  parseInt(e.target.value),
                  filters.ageRange[1],
                ])
              }
              className="w-16 border p-2 rounded-md text-center dark:bg-gray-700 dark:text-white"
            />
            <span>-</span>
            <input
              type="number"
              min="10"
              max="99"
              value={filters.ageRange[1]}
              onChange={(e) =>
                handleFilterChange("ageRange", [
                  filters.ageRange[0],
                  parseInt(e.target.value),
                ])
              }
              className="w-16 border p-2 rounded-md text-center dark:bg-gray-700 dark:text-white"
            />
          </div>
        </div>

        {/* Biodata Type */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-white">
            Biodata Type
          </label>
          <select
            value={filters.biodataType}
            onChange={(e) => handleFilterChange("biodataType", e.target.value)}
            className="w-full border p-2 rounded-md dark:bg-gray-700 dark:text-white"
          >
            <option value="">All</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="married couple">Married Couple</option>
          </select>
        </div>

        {/* Division */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-white">
            Division
          </label>
          <select
            value={filters.division}
            onChange={(e) => handleFilterChange("division", e.target.value)}
            className="w-full border p-2 rounded-md dark:bg-gray-700 dark:text-white"
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

        {/* Search Bar */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-white">
            Search
          </label>
          <input
            type="text"
            placeholder="Search by name or type..."
            value={filters.searchQuery}
            onChange={(e) => handleFilterChange("searchQuery", e.target.value)}
            className="w-full border p-2 rounded-md dark:bg-gray-700 dark:text-white"
          />
        </div>
      </div>

      {/* Biodata List Section */}
      <div className="w-full md:w-3/4">
        <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">
          Filtered Biodatas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredBiodatas.map((biodata) => (
            <div
              key={biodata._id}
              className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md flex flex-col items-center text-center"
            >
              <img
                src={biodata.bioFormData.img}
                alt="Profile"
                className="w-24 h-24 rounded-full mb-2 object-cover"
              />
              <h3 className="font-bold text-gray-800 dark:text-white">
                {biodata.bioFormData.name}
              </h3>
              <p className="text-gray-700 dark:text-white">
                {biodata?.bioFormData?.biodataType}
              </p>
              <p className="text-gray-700 dark:text-white">
                {biodata.bioFormData.permanentDivision}
              </p>
              <p className="text-gray-700 dark:text-white">
                {biodata.bioFormData.age} years old
              </p>
              <p className="text-gray-700 dark:text-white">
                {biodata.bioFormData.occupation}
              </p>
              <Link to={`/viewDetails/${biodata._id}`}>
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
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
