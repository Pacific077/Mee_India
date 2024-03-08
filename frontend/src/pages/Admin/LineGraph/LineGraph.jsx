import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Day 1',
    users: 4000,
    business: 2400,
    amt: 2400,
  },
  {
    name: 'Day 2',
    users: 3000,
    business: 1398,
    amt: 2210,
  },
  {
    name: 'Day 3',
    users: 2000,
    business: 9800,
    amt: 2290,
  },
  {
    name: 'Day 4',
    users: 2780,
    business: 3908,
    amt: 2000,
  },
  {
    name: 'Day 5',
    users: 1890,
    business: 4800,
    amt: 2181,
  },
  {
    name: 'Day 6',
    users: 2390,
    business: 3800,
    amt: 2500,
  },
  {
    name: 'Day 7',
    users: 3490,
    business: 4300,
    amt: 2100,
  },
];

const LineGraph = () => {
  return (
    <ResponsiveContainer width="100%" height="80%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 10,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="users" strokeWidth={3} stroke="#e76901" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="business" strokeWidth={3} stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineGraph;
