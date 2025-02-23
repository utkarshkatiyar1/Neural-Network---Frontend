import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { FaMoneyBillWave, FaShieldAlt, FaHeadset, FaCheckCircle } from "react-icons/fa";
import dashboardVector from "../assets/image1.png";

const policyData = [
  { name: "Active Policies", value: 500, color: "#FFC107" },
  { name: "Expired Policies", value: 150, color: "#FF3D00" },
  { name: "Claims Settled", value: 250, color: "#4CAF50" },
];

const UserDashboard = () => {
  const [renewalStatus, setRenewalStatus] = useState(null);
  const [paymentHistory, setPaymentHistory] = useState([]);
  const [claims, setClaims] = useState([]);
  const [supportChat, setSupportChat] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  // Fetch payment history
  useEffect(() => {
    fetch("https://api.example.com/payments")
      .then((res) => res.json())
      .then((data) => setPaymentHistory(data))
      .catch((err) => console.error("Error fetching payments", err));
  }, []);

  // Fetch insurance claims
  useEffect(() => {
    fetch("https://api.example.com/claims")
      .then((res) => res.json())
      .then((data) => setClaims(data))
      .catch((err) => console.error("Error fetching claims", err));
  }, []);

  // Handle policy renewal
  const handleRenewPolicy = () => {
    setRenewalStatus("Processing...");
    setTimeout(() => setRenewalStatus("Renewal Successful! ✅"), 3000);
  };

  // Handle new chat message
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
      <div className="p-8 mt-20 text-center md:text-left">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-[#2E176F] to-[#7F265D] inline-block text-transparent bg-clip-text">Welcome, John Doe</h2><h2 className="text-4xl font-bold"> 👋</h2>
        <p className="text-lg">
          Your membership: <span className="text-yellow-400 font-semibold">Premium User</span>
        </p>
      </div>

      <div className="p-8 flex flex-col md:flex-row items-start justify-between gap-6">
        {/* Left Side: Dashboard Content */}
        <div className="md:w-2/3">
          <h2 className="text-2xl font-semibold mb-4">Your Policy Overview</h2>

          {/* Stats & Charts Section */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white bg-opacity-10 rounded-lg shadow-md hover:scale-105 transition">
              <h3 className="text-lg font-bold">Policy Performance</h3>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie data={policyData} dataKey="value" cx="50%" cy="50%" outerRadius={60}>
                    {policyData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Upcoming Renewals */}
            <div className="p-6 bg-white bg-opacity-10 rounded-lg shadow-md hover:scale-105 transition">
              <h3 className="text-lg font-bold">Upcoming Renewals</h3>
              <ul className="list-disc pl-5 text-gray-200">
                <li>🏥 Health Plan - Due in 7 days</li>
                <li>🚗 Car Insurance - Due in 15 days</li>
                <li>🔶 Life Plan - Due in 30 days</li>
              </ul>
              <button
                onClick={handleRenewPolicy}
                className="mt-4 bg-yellow-400 text-black font-bold px-6 py-2 rounded-lg hover:bg-yellow-300 transition"
              >
                Renew Now
              </button>
              {renewalStatus && <p className="mt-2">{renewalStatus}</p>}
            </div>
          </div>

          {/* Payment History & Claims */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="p-6 bg-white bg-opacity-10 rounded-lg shadow-md hover:scale-105 transition">
              <h3 className="text-lg font-bold flex items-center">
                <FaMoneyBillWave className="mr-2 text-yellow-300" /> Payment History
              </h3>
              <ul className="mt-2 text-gray-200">
                {paymentHistory.map((payment, index) => (
                  <li key={index} className="text-sm">
                    {payment.date} - {payment.amount} - {payment.status}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-white bg-opacity-10 rounded-lg shadow-md hover:scale-105 transition">
              <h3 className="text-lg font-bold flex items-center">
                <FaCheckCircle className="mr-2 text-green-400" /> Claims Status
              </h3>
              <ul className="mt-2 text-gray-200">
                {claims.map((claim, index) => (
                  <li key={index} className="text-sm">
                    {claim.policy} - {claim.status}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Support Chat */}
          <div className="p-6 bg-white bg-opacity-10 rounded-lg shadow-md hover:scale-105 transition mt-6">
            <h3 className="text-lg font-bold flex items-center">
              <FaHeadset className="mr-2 text-blue-300" /> Customer Support
            </h3>
            <div className="h-40 overflow-y-auto bg-gray-800 p-3 rounded-md">
              {supportChat.map((chat, index) => (
                <p key={index} className="text-sm">
                  <strong>{chat.user}:</strong> {chat.message}
                </p>
              ))}
            </div>
            <input
              type="text"
              className="w-full p-2 mt-2 text-black rounded-md"
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button
              onClick={sendMessage}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            >
              Send
            </button>
          </div>
        </div>

        {/* Right Side: Illustration */}
        <div className="md:w-1/3 hidden md:block">
          <img src={dashboardVector} alt="Dashboard Vector" className="w-full rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
