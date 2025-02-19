import Navbar from "../components/Navbar";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import agentVector from "../assets/image.png";

const data = [
  { name: "Jan", sales: 120 },
  { name: "Feb", sales: 180 },
  { name: "Mar", sales: 250 },
  { name: "Apr", sales: 300 },
];

const AgentDashboard = () => {
  return (
    <div className="bg-gradient-to-r from-[#C10046] to-[#2E176F] min-h-screen text-black">
      <Navbar />
      <div className="p-8 mt-15 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Sales Performance */}
        <div className="md:w-2/3">
          <h2 className="text-4xl font-bold mb-4">Agent Insights Dashboard</h2>
          <p className="text-lg">Track your sales, lead conversions, and customer engagement.</p>

          <div className="p-6 bg-white bg-opacity-20 rounded-lg shadow-md mt-6 hover:scale-105 transition">
            <h3 className="text-lg font-bold">Sales Performance</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={data}>
                <XAxis dataKey="name" stroke="white" />
                <YAxis stroke="white" />
                <Tooltip />
                <Bar dataKey="sales" fill="#FFC107" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right Side: Illustration */}
        <div className="md:w-1/3">
          <img src={agentVector} alt="Agent Dashboard" className="w-full rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default AgentDashboard;
