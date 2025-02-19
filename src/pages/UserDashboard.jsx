import Navbar from "../components/Navbar";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import dashboardVector from "../assets/image1.png";

const data = [
  { name: "Active Policies", value: 500, color: "#FFC107" },
  { name: "Expired Policies", value: 150, color: "#FF3D00" },
  { name: "Claims Settled", value: 250, color: "#4CAF50" },
];

const UserDashboard = () => {
  return (
    <div className="bg-gradient-to-r from-[#C10046] to-[#2E176F] min-h-screen text-black">
      <Navbar />
      <div className="p-8 mt-15 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Dashboard Content */}
        <div className="md:w-2/3">
          <h2 className="text-4xl font-bold mb-4">Your AI-Powered Dashboard</h2>
          <p className="text-lg">Monitor your policies, track claims, and manage renewals.</p>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {/* Policy Performance Chart */}
            <div className="p-6 bg-white bg-opacity-20 rounded-lg shadow-md hover:scale-105 transition">
              <h3 className="text-lg font-bold">Policy Performance</h3>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={60}>
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Upcoming Renewals */}
            <div className="p-6 bg-white bg-opacity-20 rounded-lg shadow-md hover:scale-105 transition">
              <h3 className="text-lg font-bold">Upcoming Renewals</h3>
              <ul className="list-disc pl-5">
                <li>🏥 Health Plan - Due in 7 days</li>
                <li>🚗 Car Insurance - Due in 15 days</li>
                <li>🔶 Life Plan - Due in 30 days</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Side: Illustration */}
        <div className="md:w-1/3">
          <img src={dashboardVector} alt="Dashboard Vector" className="w-full rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;


