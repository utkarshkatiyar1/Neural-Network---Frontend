import { useState } from "react";
import Navbar from "../components/Navbar";
import Chatbot from "../components/Chatbot";
import { FaBars, FaTimes } from "react-icons/fa";

const Chat = () => {
  const [showHistory, setShowHistory] = useState(true);
  console.log(showHistory);

  return (
    <div className="bg-gradient-to-r from-[#C10046] to-[#2E176F] min-h-screen text-white flex flex-col">
      <Navbar />

      <div className="flex h-screen mt-16 relative">
        {/* Sidebar for Chat History */}
        <div
          // className={`absolute md:relative top-0 left-0 w-64 bg-gray-900 p-4 border-r border-gray-700 h-full transition-transform duration-300 z-40 ${
          //   showHistory ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          // }`}

          className={`fixed md:relative top-0 ${
            showHistory ? "left-0" : "-left-64"
          } md:left-0 w-64 bg-gray-900 p-4 border-r border-gray-700 h-full transition-transform duration-300 z-40`}
          
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Chat History</h3>
            <button
              className=" bg-gray-800 p-2 rounded text-white z-50"
              onClick={() => setShowHistory(!showHistory)}
            >
              {showHistory ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
          <ul className="space-y-2">
            <li className="p-2 bg-gray-800 rounded hover:bg-gray-700 cursor-pointer">
              Today's Conversation
            </li>
            <li className="p-2 bg-gray-800 rounded hover:bg-gray-700 cursor-pointer">
              Insurance Plans
            </li>
            <li className="p-2 bg-gray-800 rounded hover:bg-gray-700 cursor-pointer">
              Premium Benefits
            </li>
          </ul>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col items-center p-6 relative">
          <div className="flex justify-between w-full max-w-4xl mb-4">
            <h2 className="text-3xl font-bold mx-auto">Chat with Our AI Assistant</h2>
          </div>
          <Chatbot />
        </div>
      </div>
    </div>
  );
};

export default Chat;
