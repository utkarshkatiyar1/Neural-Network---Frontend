import { useState } from "react";
import { getAIRecommendations } from "../utils/api";

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    const aiResponse = await getAIRecommendations(input);
    const botMessage = { text: aiResponse, sender: "bot" };
    setMessages((prev) => [...prev, botMessage]);

    setInput("");
  };

  return (
    <div className="flex flex-col w-full max-w-lg mx-auto p-4 bg-white shadow-lg rounded-lg">
      <div className="h-64 overflow-y-auto p-2 border border-gray-300 rounded">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 my-1 rounded-md ${
              msg.sender === "user" ? "bg-blue-500 text-white self-end" : "bg-gray-200"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="flex mt-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about policies..."
          className="border p-2 flex-1 rounded-l-md"
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;