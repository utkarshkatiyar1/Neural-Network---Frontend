import ChatWidget from "./ChatWidget";

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full p-6 bg-gradient-to-r from-blue-600 to-purple-800">
      <h2 className="text-3xl font-bold text-white mb-6">Welcome to the AI Dashboard</h2>

      <div className="w-full max-w-3xl bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-lg shadow-lg text-center text-white">
        <input
          type="text"
          placeholder="Type your query..."
          className="w-full p-3 my-4 border-none rounded-md text-black text-lg"
        />
        <button className="w-full bg-yellow-400 text-black font-semibold p-3 rounded-md hover:bg-yellow-300 transition">
          Submit
        </button>
        <ChatWidget />
      </div>
    </div>
  );
};

export default Dashboard;
