import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";



const BarChartCommon = (props) => {
  return (
    <ResponsiveContainer width="100%" height="80%">
      <BarChart
        width={500}
        height={200}
        data={props.data}
        syncId="anyId"
        margin={{
          top: 10,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar
          dataKey={props.dataKey}
          fill={props.color}
          barSize={20}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartCommon;
