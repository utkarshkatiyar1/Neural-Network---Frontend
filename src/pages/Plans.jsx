import Navbar from "../components/Navbar";

const Plans = () => {
  return (
    <div className="bg-gradient-to-r from-[#C10046] to-[#2E176F] min-h-screen text-black">
      <Navbar />
      <div className="p-8 mt-15 text-center">
        <h2 className="text-4xl font-bold mb-6">Compare Our Insurance Plans</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { name: "Basic Plan", price: "$100/year", features: ["Life Cover", "Accident Cover"] },
            { name: "Premium Plan", price: "$250/year", features: ["Life Cover", "Accident Cover", "Critical Illness"] },
            { name: "Gold Plan", price: "$400/year", features: ["Life Cover", "Accident Cover", "Investment Benefits"] },
          ].map((plan, index) => (
            <div key={index} className="p-6 bg-white bg-opacity-20 rounded-lg shadow-md hover:scale-105 transition">
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className="text-xl text-yellow-400 font-semibold">{plan.price}</p>
              <ul className="mt-4 space-y-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>✅ {feature}</li>
                ))}
              </ul>
              <button className="mt-4 bg-yellow-400 text-black font-bold px-6 py-2 rounded-lg hover:bg-yellow-300 transition">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;
