import "./bigChartBox.scss";

import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Mon",
    books: 2780,
    clothes: 3908,
    electronic: 2000,
  },
  {
    name: "Tue",
    books: 2810,
    clothes: 3108,
    electronic: 2102,
  },
  {
    name: "Wed",
    books: 2210,
    clothes: 2308,
    electronic: 2502,
  },
  {
    name: "Thu",
    books: 2178,
    clothes: 1897,
    electronic: 2145,
  },
  {
    name: "Fri",
    books: 2578,
    clothes: 2397,
    electronic: 2445,
  },
  {
    name: "Sat",
    books: 2278,
    clothes: 2197,
    electronic: 2145,
  },
  {
    name: "Sun",
    books: 2178,
    clothes: 1997,
    electronic: 2245,
  },
];

const BigChartBox = () => {
  return (
    <div className="bigChartBox">
      <h1>Revenue Analytics</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="electronics"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="clothes"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="books"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChartBox;
