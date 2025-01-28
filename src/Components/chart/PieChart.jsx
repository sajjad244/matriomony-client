/* eslint-disable react/prop-types */
import {Pie} from "react-chartjs-2";
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({data}) => {
  const chartData = {
    labels: [
      "Total Biodata",
      "Male Biodata",
      "Female Biodata",
      "Premium Biodata",
    ],
    datasets: [
      {
        data: [
          data.totalBiodata,
          data.totalMales,
          data.totalFemales,
          data.totalPremium,
        ],
        backgroundColor: ["#4CAF50", "#2196F3", "#FF9800", "#F44336"],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg ">
      <h3 className="text-xl font-semibold text-center mb-4">
        Biodata Distribution
      </h3>
      <Pie data={chartData} />
    </div>
  );
};

export default PieChart;
