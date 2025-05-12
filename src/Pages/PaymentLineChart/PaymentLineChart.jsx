// Components/chart/PaymentLineChart.jsx
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {month: "Jan", payment: 200},
  {month: "Feb", payment: 400},
  {month: "Mar", payment: 300},
  {month: "Apr", payment: 500},
  {month: "May", payment: 250},
];

const PaymentLineChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="payment"
          stroke="#16a34a"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PaymentLineChart;
