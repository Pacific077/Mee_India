import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { GetPast7daysData } from '../../../apis/AdminApis';


const LineGraph = () => {
  const [dataw,setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await GetPast7daysData();
        setData(resp.data.data);
        // console.log("res", resp.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <ResponsiveContainer width="100%" height="80%">
      <LineChart
        width={500}
        height={300}
        data={dataw}
        margin={{
          top: 5,
          right: 10,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis  />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="userCount" strokeWidth={3} stroke="#e76901" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="businessCount" strokeWidth={3} stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineGraph;
