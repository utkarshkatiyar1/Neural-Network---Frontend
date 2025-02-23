import { useState, useEffect } from "react";
import { getAIRecommendations } from "../utils/api";
import { FaPaperPlane, FaRobot, FaUser } from "react-icons/fa";

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(async () => {
      const aiResponse = await getAIRecommendations(input);
      setMessages((prev) => [...prev, { text: aiResponse, sender: "bot" }]);
      setIsTyping(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto bg-gray-900 text-white shadow-lg rounded-lg h-[75vh]">
      {/* Chat Window */}
      <div className="flex flex-col flex-grow p-4 overflow-y-auto space-y-4">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`p-3 max-w-lg rounded-lg shadow-md ${
                msg.sender === "user"
                  ? "bg-blue-600 text-white self-end"
                  : "bg-gray-700 text-gray-200"
              }`}
            >
              <div className="flex items-center gap-2">
                {msg.sender === "bot" && <FaRobot className="text-yellow-400" />}
                {msg.sender === "user" && <FaUser className="text-green-400" />}
                <p>{msg.text}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Typing Animation */}
        {isTyping && (
          <div className="flex items-center space-x-2 text-gray-400 animate-pulse">
            <FaRobot className="text-yellow-400" />
            <span>AI is typing...</span>
          </div>
        )}
      </div>

      {/* Input Field */}
      <div className="flex p-4 border-t border-gray-700 bg-gray-800 rounded-b-lg">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about policies..."
          className="flex-1 p-3 rounded-l-md bg-gray-700 text-white border-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-6 py-3 rounded-r-md hover:bg-blue-600 flex items-center"
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
