import Navbar from "../components/Navbar";
import Chatbot from "../components/Chatbot";

const Chat = () => {
  return (
    <div>
      <Navbar />
      <div className="p-6 flex flex-col items-center mt-20">
        <h2 className="text-2xl font-bold mb-4">AI Chatbot</h2>
        <Chatbot />
      </div>
    </div>
  );
};

export default Chat;
