import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid,ResponsiveContainer } from 'recharts';
import { GetAllMembershipsCount } from '../../../apis/AdminApis';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const data = [
  {
    name: 'Free',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Shop',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Standrad',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Premium',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Pro',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  }
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const BarGraph = () => {
  const [dataw,setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await GetAllMembershipsCount();
        setData(resp.data.membershipCountsArray);
        // console.log("res", resp.data.membershipCountsArray);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <ResponsiveContainer width="100%" height="80%">

    <BarChart
      width={500}
      height={300}
      data={dataw}
      margin={{
          top: 20,
          right: 10,
          left: 0,
          bottom: 5,
        }}
        >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="membershipType" />
      <YAxis />
      <Bar dataKey="count" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
      </Bar>
    </BarChart>
            </ResponsiveContainer>
  );
};

export default BarGraph;
