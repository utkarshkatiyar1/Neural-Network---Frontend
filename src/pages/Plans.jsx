import { useState } from "react";
import Navbar from "../components/Navbar";
import { FaCheckCircle, FaTimesCircle, FaStar, FaShieldAlt, FaMedal } from "react-icons/fa";

const Plans = () => {
  const [billingCycle, setBillingCycle] = useState("yearly");

  const plans = [
    {
      name: "Basic Plan",
      price: { yearly: "$100/year", monthly: "$10/month" },
      features: ["Life Cover", "Accident Cover"],
      icon: <FaShieldAlt className="text-blue-400 text-4xl" />,
    },
    {
      name: "Premium Plan",
      price: { yearly: "$250/year", monthly: "$25/month" },
      features: ["Life Cover", "Accident Cover", "Critical Illness"],
      icon: <FaStar className="text-yellow-400 text-4xl" />,
    },
    {
      name: "Gold Plan",
      price: { yearly: "$400/year", monthly: "$40/month" },
      features: ["Life Cover", "Accident Cover", "Investment Benefits"],
      icon: <FaMedal className="text-red-400 text-4xl" />,
    },
  ];

  const benefits = [
    { name: "Life Cover", basic: true, premium: true, gold: true },
    { name: "Accident Cover", basic: true, premium: true, gold: true },
    { name: "Critical Illness", basic: false, premium: true, gold: true },
    { name: "Investment Benefits", basic: false, premium: false, gold: true },
  ];

  return (
    <div className="bg-gradient-to-r from-[#C10046] to-[#2E176F] min-h-screen text-white">
      <Navbar />
      <div className="p-8 mt-16 text-center">
        <h2 className="text-4xl font-bold mb-6">Compare Our Insurance Plans</h2>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="p-6 bg-gray-900 bg-opacity-80 rounded-lg shadow-md hover:scale-105 transition"
            >
              <div className="flex justify-center">{plan.icon}</div>
              <h3 className="text-2xl font-bold mt-2">{plan.name}</h3>
              <p className="text-xl text-yellow-400 font-semibold">{plan.price[billingCycle]}</p>
              <ul className="mt-4 space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-400" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-4 w-full bg-yellow-400 text-black font-bold px-6 py-2 rounded-lg hover:bg-yellow-300 transition">
                Choose Plan
              </button>
            </div>
          ))}
        </div>

        {/* Fixed Comparison Table */}
        <div className="mt-12 bg-gray-900 bg-opacity-80 p-6 rounded-lg shadow-lg max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Plan Benefits Comparison</h3>
          <table className="w-full text-center border-collapse">
            <thead>
              <tr className="bg-gray-800">
                <th className="p-3 border border-gray-700">Feature</th>
                <th className="p-3 border border-gray-700">Basic</th>
                <th className="p-3 border border-gray-700">Premium</th>
                <th className="p-3 border border-gray-700">Gold</th>
              </tr>
            </thead>
            <tbody>
              {benefits.map((benefit, index) => (
                <tr key={index} className="hover:bg-gray-800">
                  <td className="p-3 border border-gray-700">{benefit.name}</td>
                  <td className="p-3 border border-gray-700 text-center">
                    {benefit.basic ? <FaCheckCircle className="text-green-400 mx-auto" /> : <FaTimesCircle className="text-red-400 mx-auto" />}
                  </td>
                  <td className="p-3 border border-gray-700 text-center">
                    {benefit.premium ? <FaCheckCircle className="text-green-400 mx-auto" /> : <FaTimesCircle className="text-red-400 mx-auto" />}
                  </td>
                  <td className="p-3 border border-gray-700 text-center">
                    {benefit.gold ? <FaCheckCircle className="text-green-400 mx-auto" /> : <FaTimesCircle className="text-red-400 mx-auto" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default Plans;
