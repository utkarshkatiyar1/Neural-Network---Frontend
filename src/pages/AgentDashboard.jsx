import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { FaUsers, FaChartLine, FaMoneyBillWave, FaHandshake, FaRegClock } from "react-icons/fa";
import agentVector from "../assets/image.png";

const salesData = [
  { name: "Jan", sales: 120 },
  { name: "Feb", sales: 180 },
  { name: "Mar", sales: 250 },
  { name: "Apr", sales: 300 },
  { name: "May", sales: 400 },
  { name: "Jun", sales: 500 },
];

const leadConversionData = [
  { name: "Reached Out", value: 300, color: "#007bff" },
  { name: "Interested", value: 150, color: "#28a745" },
  { name: "Converted", value: 90, color: "#FFC107" },
];

const engagementData = [
  { name: "Website Visits", value: 2000 },
  { name: "Inquiries", value: 400 },
  { name: "Follow-ups", value: 150 },
];

const AgentDashboard = () => {
  const [revenue, setRevenue] = useState("₹ 45,000");
  const [clients, setClients] = useState(85);
  const [leadConversionRate, setLeadConversionRate] = useState("30%");
  const [avgResponseTime, setAvgResponseTime] = useState("2h 30m");

  return (
    <div className="bg-gradient-to-r from-[#C10046] to-[#2E176F] min-h-screen text-white">
      <Navbar />
      
      {/* Header Section */}
      <div className="p-8 mt-15">
        <h2 className="text-4xl font-bold text-white">Agent Insights Dashboard</h2>
        <p className="text-lg text-gray-300">Monitor your sales, lead conversions, and customer engagement.</p>
      </div>

      <div className="p-8 flex flex-col md:flex-row gap-6">
        
        {/* Left Section - Charts & Insights */}
        <div className="md:w-2/3 space-y-6">

          {/* KPI Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-900 rounded-lg shadow-md flex items-center gap-4">
              <FaMoneyBillWave className="text-green-400 text-3xl" />
              <div>
                <p className="text-lg font-bold text-white">Total Revenue</p>
                <p className="text-xl font-semibold text-yellow-400">{revenue}</p>
              </div>
            </div>

            <div className="p-6 bg-gray-900 rounded-lg shadow-md flex items-center gap-4">
              <FaUsers className="text-blue-400 text-3xl" />
              <div>
                <p className="text-lg font-bold text-white">Total Clients</p>
                <p className="text-xl font-semibold text-yellow-400">{clients}</p>
              </div>
            </div>

            <div className="p-6 bg-gray-900 rounded-lg shadow-md flex items-center gap-4">
              <FaRegClock className="text-red-400 text-3xl" />
              <div>
                <p className="text-lg font-bold text-white">Avg Response Time</p>
                <p className="text-xl font-semibold text-yellow-400">{avgResponseTime}</p>
              </div>
            </div>
          </div>

          {/* Sales Performance Chart */}
          <div className="p-6 bg-gray-900 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-white">Sales Performance</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={salesData}>
                <XAxis dataKey="name" stroke="white" />
                <YAxis stroke="white" />
                <Tooltip />
                <Line type="monotone" dataKey="sales" stroke="#FFC107" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Lead Conversion Chart */}
          <div className="p-6 bg-gray-900 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-white">Lead Conversion</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={leadConversionData} dataKey="value" cx="50%" cy="50%" outerRadius={80}>
                  {leadConversionData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

        </div>

        {/* Right Section - Engagement & Image */}
        <div className="md:w-1/3">
          <img src={agentVector} alt="Agent Dashboard" className="w-full rounded-lg shadow-lg" />

          {/* Engagement Data */}
          <div className="p-6 bg-gray-900 rounded-lg shadow-md mt-6">
            <h3 className="text-lg font-bold flex items-center text-white">
              <FaHandshake className="mr-2 text-blue-300" /> Client Engagement
            </h3>
            <ul className="mt-3 space-y-2 text-gray-300">
              {engagementData.map((item, index) => (
                <li key={index} className="flex justify-between border-b border-gray-700 pb-2">
                  <span>{item.name}</span>
                  <span className="text-yellow-400 font-semibold">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AgentDashboard;
