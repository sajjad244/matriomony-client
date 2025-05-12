import {useQuery} from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import UseAllData from "../../../Hooks/AllData/UseAllData";
import usePayment from "../../../Hooks/AllData/usePayment";
import PieChart from "../../../Components/chart/PieChart";
import BarChartGender from "../../BarChartGender/BarChartGender";
import PaymentLineChart from "../../PaymentLineChart/PaymentLineChart";

const AdminDashboard = () => {
  const axiosSecure = UseAxiosSecure();
  const [allData] = UseAllData();
  const [allPay] = usePayment();

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

  // Calculate total payment amount
  const totalPaymentAmount = allPay.reduce(
    (total, payment) => total + payment.amount,
    0
  );

  return (
    <div className="container mx-auto mt-20 text-white">
      <h1 className="text-2xl font-bold mb-4 text-black dark:text-white">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Total Biodata */}
        <div className="bg-blue-700 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Total Biodata</h2>
          <p className="text-lg">{totalBiodata}</p>
        </div>

        {/* Total Males */}
        <div className="bg-blue-700 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Male Biodata</h2>
          <p className="text-lg">{totalMales}</p>
        </div>

        {/* Total Females */}
        <div className="bg-blue-700 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Female Biodata</h2>
          <p className="text-lg">{totalFemales}</p>
        </div>

        {/* Total Premium Biodata */}
        <div className="bg-blue-700 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Premium Biodata</h2>
          <p className="text-lg">{totalPremium}</p>
        </div>

        {/* Total Payment Amount */}
        <div className="bg-green-700 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Total Payment</h2>
          <p className="text-lg">${totalPaymentAmount}</p>{" "}
          {/* Display total payment */}
        </div>
      </div>

      {/* Bar Chart Section */}
      <div className="my-8">
        <h3 className="text-xl font-semibold text-center mb-4 text-black dark:text-white">
          Gender Count Chart
        </h3>
        <BarChartGender males={totalMales} females={totalFemales} />
      </div>
      {/* Line Chart Section */}
      <div className="my-8">
        <h3 className="text-xl font-semibold text-center mb-4 text-black dark:text-white">
          Monthly Payment Trend
        </h3>
        <PaymentLineChart />
      </div>
      {/* Display Pie Chart */}
      <div className="my-8 p-6 rounded-lg w-full sm:w-3/4 md:w-2/3 lg:w-2/3 mx-auto">
        <h3 className="text-xl font-semibold mb-4 text-center text-black dark:text-white">
          Biodata Distribution
        </h3>
        {/* Pie Chart Section */}
        <PieChart
          data={{
            totalBiodata,
            totalMales,
            totalFemales,
            totalPremium,
          }}
        />
      </div>
    </div>
  );
};

export default AdminDashboard;
