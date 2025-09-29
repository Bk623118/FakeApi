import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,Bar,
  PieChart,
  Pie,Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ComposedChart,
  AreaChart,
  Area,
  ScatterChart,
  Scatter,


} from "recharts";

export const ChartExample = () => {
  // ✅ Your custom array
  const data = [
    { name: "Jan", sales: 400, profit: 240 },
    { name: "Feb", sales: 300, profit: 139 },
    { name: "Mar", sales: 200, profit: 980 },
    { name: "Apr", sales: 278, profit: 390 },
    { name: "May", sales: 189, profit: 480 },
  ];

  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />

           ✅ Use your custom values 
          <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={3} />
          <Line type="monotone" dataKey="profit" stroke="#82ca9d" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};


export const BarChartExample = () => {
  // ✅ Your custom array
  const data = [
    { name: "Jan", sales: 400, profit: 240 },
    { name: "Feb", sales: 300, profit: 139 },
    { name: "Mar", sales: 200, profit: 980 },
    { name: "Apr", sales: 278, profit: 390 },
    { name: "May", sales: 189, profit: 480 },
  ];

  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />

          {/* ✅ Bar for sales */}
          <Bar dataKey="sales" fill="#8884d8" />
          {/* ✅ Bar for profit */}
          <Bar dataKey="profit" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};


export const PieChartExample = () => {
  // ✅ Your custom array
  const data = [
    { name: "Sales", value: 400 },
    { name: "Profit", value: 240 },
    { name: "Expenses", value: 150 },
    { name: "Investment", value: 100 },
  ];

  // Colors for each slice
  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={150}
           
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};



export const RadarChartExample = () => {
  // ✅ Custom data array
  const data = [
    { subject: "Math", A: 120, B: 110 },
    { subject: "Physics", A: 98, B: 130 },
    { subject: "Chemistry", A: 86, B: 90 },
    { subject: "Biology", A: 99, B: 95 },
    { subject: "English", A: 85, B: 100 },
  ];

  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <RadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar name="Student A" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Radar name="Student B" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
          <Tooltip />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};


export const ComposedChartExample = () => {
  // ✅ Custom data array
  const data = [
    { name: "Jan", sales: 400, profit: 240, revenue: 300 },
    { name: "Feb", sales: 300, profit: 139, revenue: 250 },
    { name: "Mar", sales: 200, profit: 980, revenue: 500 },
    { name: "Apr", sales: 278, profit: 390, revenue: 350 },
    { name: "May", sales: 189, profit: 480, revenue: 200 },
  ];

  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <ComposedChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />

          {/* Bars for sales */}
          <Bar dataKey="sales" barSize={20} fill="#8884d8" />
          {/* Line for profit */}
          <Line type="monotone" dataKey="profit" stroke="#82ca9d" strokeWidth={3} />
          {/* Area for revenue */}
          <Line type="monotone" dataKey="revenue" stroke="#ffc658" strokeWidth={3} strokeDasharray="5 5" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};


export const AreaChartExample = () => {
  // ✅ Custom data array
  const data = [
    { name: "Jan", sales: 400, profit: 240 },
    { name: "Feb", sales: 300, profit: 139 },
    { name: "Mar", sales: 200, profit: 980 },
    { name: "Apr", sales: 278, profit: 390 },
    { name: "May", sales: 189, profit: 480 },
  ];

  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />

          {/* Area for sales */}
          <Area type="monotone" dataKey="sales" stroke="#8884d8" fill="#8884d8" fillOpacity={0.5} />
          {/* Area for profit */}
          <Area type="monotone" dataKey="profit" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.5} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};




export const ScatterChartExample = () => {
  // ✅ Custom data array
  const data = [
    { x: 10, y: 20 },
    { x: 20, y: 35 },
    { x: 30, y: 40 },
    { x: 40, y: 50 },
    { x: 50, y: 65 },
  ];

  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <ScatterChart
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="X Value" />
          <YAxis type="number" dataKey="y" name="Y Value" />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Legend />
          <Scatter name="Sample Data" data={data} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};





