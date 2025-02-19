import { useState } from "react";

const ChatWidget = () => {
  const [messages, setMessages] = useState(["Hello! How can I assist you?"]);

  return (
    <div className="w-full h-60 overflow-y-auto bg-white bg-opacity-25 p-4 rounded-md mt-4">
      {messages.map((msg, index) => (
        <p key={index} className="text-white text-left mb-2">{msg}</p>
      ))}
    </div>
  );
};

export default ChatWidget;
