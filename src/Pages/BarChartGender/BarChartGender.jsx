/* eslint-disable react/prop-types */

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const BarChartGender = ({males, females}) => {
  const data = [
    {name: "Male", count: males},
    {name: "Female", count: females},
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" fill="#38bdf8" radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartGender;
