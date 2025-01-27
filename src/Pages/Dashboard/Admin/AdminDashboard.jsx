import {useQuery} from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import UseAllData from "../../../Hooks/AllData/UseAllData";

const AdminDashboard = () => {
  const axiosSecure = UseAxiosSecure();
  const [allData] = UseAllData();

  // Fetching users data from backend
  const {data: PremiumData = []} = useQuery({
    queryKey: ["PremiumData"],
    queryFn: async () => {
      const res = await axiosSecure.get("/all/approved/req");
      return res.data;
    },
  });

  // ======>>>>>> Premium Counts
  const totalPremium = PremiumData.length;

  // ======>>>>>> Biodata Counts
  const totalBiodata = allData.length;
  const totalMales = allData.filter(
    (data) => data.bioFormData?.biodataType === "male"
  ).length;
  const totalFemales = allData.filter(
    (data) => data.bioFormData?.biodataType === "female"
  ).length;

  return (
    <div className="container mx-auto mt-20">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Total Biodata */}
        <div className="bg-blue-100 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Total Biodata</h2>
          <p className="text-lg">{totalBiodata}</p>
        </div>

        {/* Total Males */}
        <div className="bg-blue-100 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Male Biodata</h2>
          <p className="text-lg">{totalMales}</p>
        </div>

        {/* Total Females */}
        <div className="bg-blue-100 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Female Biodata</h2>
          <p className="text-lg">{totalFemales}</p>
        </div>

        {/* Total Premium Biodata */}
        <div className="bg-blue-100 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Premium Biodata</h2>
          <p className="text-lg">{totalPremium}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
