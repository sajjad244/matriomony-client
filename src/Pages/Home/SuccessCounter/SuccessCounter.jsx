import UseAllData from "../../../Hooks/AllData/UseAllData";

const SuccessCounter = () => {
  const [allData] = UseAllData();

  // Filter and count different biodata types
  const totalBiodata = allData.length;
  const totalMales = allData.filter(
    (data) => data.bioFormData?.biodataType === "male"
  ).length;
  const totalFemales = allData.filter(
    (data) => data.bioFormData?.biodataType === "female"
  ).length;
  const totalMarriedCouples = allData.filter(
    (data) => data.bioFormData?.biodataType === "married couple"
  ).length;

  return (
    <div className="container mx-auto my-10 dark:bg-gray-900">
      <h2 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100 text-center mb-10">
        Success Counter
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        {/* Total Biodata */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Total Biodata
          </h3>
          <p className="text-4xl text-blue-500 dark:text-blue-400 font-bold mt-3">
            {totalBiodata}
          </p>
        </div>
        {/* Male Biodata */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Male Biodata
          </h3>
          <p className="text-4xl text-green-500 dark:text-green-400 font-bold mt-3">
            {totalMales}
          </p>
        </div>
        {/* Female Biodata */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Female Biodata
          </h3>
          <p className="text-4xl text-pink-500 dark:text-pink-400 font-bold mt-3">
            {totalFemales}
          </p>
        </div>
        {/* Married Couples */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Married Couples
          </h3>
          <p className="text-4xl text-purple-500 dark:text-purple-400 font-bold mt-3">
            {totalMarriedCouples}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessCounter;
