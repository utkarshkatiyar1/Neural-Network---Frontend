import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Legend } from "recharts";
import { FaMoneyBillWave, FaShieldAlt, FaHeadset, FaCheckCircle, FaHistory, FaFileInvoice } from "react-icons/fa";
import dashboardVector from "../assets/image1.png";

const policyData = [
  { name: "Active", value: 500, color: "#007bff" },
  { name: "Expired", value: 150, color: "#dc3545" },
  { name: "Claims Settled", value: 250, color: "#28a745" },
];

const claimStatusData = [
  { name: "Pending", value: 40, color: "#ffc107" },
  { name: "Approved", value: 120, color: "#28a745" },
  { name: "Rejected", value: 30, color: "#dc3545" },
];

const UserDashboard = () => {
  const [renewalStatus, setRenewalStatus] = useState(null);
  const [paymentHistory, setPaymentHistory] = useState([]);
  const [claims, setClaims] = useState([]);
  const [supportChat, setSupportChat] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    fetch("https://api.example.com/payments")
      .then((res) => res.json())
      .then((data) => setPaymentHistory(data))
      .catch((err) => console.error("Error fetching payments", err));

    fetch("https://api.example.com/claims")
      .then((res) => res.json())
      .then((data) => setClaims(data))
      .catch((err) => console.error("Error fetching claims", err));
  }, []);

  const handleRenewPolicy = () => {
    setRenewalStatus("Processing...");
    setTimeout(() => setRenewalStatus("✅ Renewal Successful!"), 3000);
  };

  const sendMessage = () => {
    if (newMessage.trim()) {
      setSupportChat([...supportChat, { user: "You", message: newMessage }]);
      setNewMessage("");
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#C10046] to-[#2E176F] min-h-screen text-white">
      <Navbar />

      {/* Welcome Section */}
      <div className="p-8 mt-15">
        <h2 className="text-4xl font-bold text-white">Welcome, Prakhar Patel👋</h2>
        <p className="text-lg text-gray-300">Membership: <span className="text-yellow-400 font-semibold">Premium User</span></p>
      </div>

      <div className="p-8 flex flex-col md:flex-row gap-6">
        {/* Left Side: Dashboard Content */}
        <div className="md:w-2/3 space-y-6">
          
          {/* Stats & Charts Section */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-900 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-white mb-2">Policy Overview</h3>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie data={policyData} dataKey="value" cx="50%" cy="50%" outerRadius={80}>
                    {policyData.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="p-6 bg-gray-900 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-white mb-2">Claim Status</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={claimStatusData}>
                  <XAxis dataKey="name" stroke="white" />
                  <YAxis stroke="white" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#007bff" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Renewals Section */}
          <div className="p-6 bg-gray-900 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-white">Upcoming Renewals</h3>
            <ul className="list-disc pl-5 text-gray-300">
              <li>🏥 Health Plan - Due in 7 days</li>
              <li>🚗 Car Insurance - Due in 15 days</li>
              <li>🔶 Life Plan - Due in 30 days</li>
            </ul>
            <button
              onClick={handleRenewPolicy}
              className="mt-4 bg-blue-500 text-white font-bold px-6 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Renew Now
            </button>
            {renewalStatus && <p className="mt-2">{renewalStatus}</p>}
          </div>
        </div>

        {/* Right Side: Illustration & Chat */}
        <div className="md:w-1/3">
          <img src={dashboardVector} alt="Dashboard Illustration" className="w-full rounded-lg shadow-lg" />

          {/* Customer Support Chat */}
          <div className="p-6 bg-gray-900 rounded-lg shadow-md mt-6">
            <h3 className="text-lg font-bold flex items-center text-white">
              <FaHeadset className="mr-2 text-blue-300" /> Customer Support
            </h3>
            <div className="h-40 overflow-y-auto bg-gray-800 p-3 rounded-md">
              {supportChat.map((chat, index) => (
                <p key={index} className="text-sm text-gray-200">
                  <strong>{chat.user}:</strong> {chat.message}
                </p>
              ))}
            </div>
            <input
              type="text"
              className="w-full p-2 mt-2 bg-gray-700 text-white rounded-md"
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button
              onClick={sendMessage}
              className="mt-2 bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-300 transition"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;

