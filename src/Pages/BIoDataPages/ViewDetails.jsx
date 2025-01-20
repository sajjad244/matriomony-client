import {Link, useParams} from "react-router-dom";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import {useQuery} from "@tanstack/react-query";
import LoadingSpinner from "../../Shared/LoadingSpinner";
import UseAllData from "../../Hooks/AllData/UseAllData";
const ViewDetails = () => {
  const {id} = useParams();
  const axiosSecure = UseAxiosSecure();
  const [allData] = UseAllData(); // Fetch all bioData using TanStack Query and hook

  //! Fetch bioData using TanStack Query
  const {data: singleData = {}, isLoading} = useQuery({
    queryKey: ["viewDetails", id],
    queryFn: async () => {
      const {data} = await axiosSecure.get(`/bioDataAll/${id}`);
      return data;
    },
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }
  //! Fetch bioData using TanStack Query

  console.log(singleData.bioFormData);

  return (
    <>
      <div className="container mx-auto mt-10 p-6 bg-white rounded-md shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8">Bio Details</h1>
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Left Section: Profile Image */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="w-64 h-64 relative">
              <img
                src={singleData?.bioFormData?.img}
                alt={singleData?.bioFormData?.name}
                className="w-full h-full rounded-lg object-cover border shadow-lg"
                style={{aspectRatio: "1 / 1"}}
              />
            </div>
          </div>

          {/* Right Section: Details */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              {singleData?.bioFormData?.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <p>
                <strong className="text-gray-600">Gender:</strong>{" "}
                {singleData?.bioFormData?.biodataType}
              </p>
              <p>
                <strong className="text-gray-600">Age:</strong>{" "}
                {singleData?.bioFormData?.age} years
              </p>
              <p>
                <strong className="text-gray-600">Height:</strong>{" "}
                {singleData?.bioFormData?.height}
              </p>
              <p>
                <strong className="text-gray-600">Weight:</strong>{" "}
                {singleData?.bioFormData?.weight}
              </p>
              <p>
                <strong className="text-gray-600">Occupation:</strong>{" "}
                {singleData?.bioFormData?.occupation}
              </p>
              <p>
                <strong className="text-gray-600">Race:</strong>{" "}
                {singleData?.bioFormData?.race}
              </p>
              <p>
                <strong className="text-gray-600">Father Name:</strong>{" "}
                {singleData?.bioFormData?.fathersName}
              </p>
              <p>
                <strong className="text-gray-600">Mother Name:</strong>{" "}
                {singleData?.bioFormData?.mothersName}
              </p>
              <p>
                <strong className="text-gray-600">Permanent Division:</strong>{" "}
                {singleData?.bioFormData?.permanentDivision}
              </p>
              <p>
                <strong className="text-gray-600">Present Division:</strong>{" "}
                {singleData?.bioFormData?.presentDivision}
              </p>
              <p>
                <strong className="text-gray-600">Email:</strong>{" "}
                <a
                  href={`mailto:${singleData?.bioFormData?.email}`}
                  className="text-blue-500 underline"
                >
                  {singleData?.bioFormData?.email}
                </a>
              </p>
              <p>
                <strong className="text-gray-600">Contact Number:</strong>{" "}
                <a
                  href={`tel:${singleData?.bioFormData?.contactNumber}`}
                  className="text-blue-500 underline"
                >
                  {singleData?.bioFormData?.contactNumber}
                </a>
              </p>
            </div>

            {/* Expected Partner Info */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                Expected Partner Info
              </h3>
              <p>
                <strong className="text-gray-600">Age:</strong>{" "}
                {singleData?.bioFormData?.expectedPartnerAge} years
              </p>
              <p>
                <strong className="text-gray-600">Height:</strong>{" "}
                {singleData?.bioFormData?.expectedPartnerHeight}
              </p>
              <p>
                <strong className="text-gray-600">Weight:</strong>{" "}
                {singleData?.bioFormData?.expectedPartnerWeight}
              </p>
              {/*  */}
              <div className="mt-5 flex gap-10">
                <button className="mt-5 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-green-500 ">
                  Add to Favorites
                </button>
                <Link to={`/checkout/${singleData._id}`}>
                  <button className="mt-5 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-green-500 ">
                    Request Contact
                  </button>
                </Link>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
      {/*  */} {/*  */} {/*  */}
      {/* Suggestions Section */}
      {/* using filter */}
      {/*  */} {/*  */} {/*  */}
      <div className="container mx-auto mt-10">
        <h2 className="text-2xl font-semibold mb-6">Suggestions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allData
            ?.filter(
              (data) =>
                data.bioFormData.biodataType ===
                  singleData.bioFormData.biodataType &&
                data._id !== singleData._id // Exclude the current data
            )
            .map((data) => (
              <div
                key={data._id}
                className="bg-white p-4 rounded-md shadow-lg flex flex-col items-center"
              >
                <img
                  src={data.bioFormData.img}
                  alt={data.bioFormData.name}
                  className="w-24 h-24 rounded-full mb-4"
                />
                <h3 className="font-semibold text-lg mb-2">
                  {data.bioFormData.name}
                </h3>
                <p>
                  <strong>Age:</strong> {data.bioFormData.age}
                </p>
                <p>
                  <strong>Occupation:</strong> {data.bioFormData.occupation}
                </p>
                <Link to={`/viewDetails/${data._id}`}>
                  <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">
                    View Profile
                  </button>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ViewDetails;
