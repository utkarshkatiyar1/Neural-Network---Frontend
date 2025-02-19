// import { useState } from "react";
// import { getAIRecommendations } from "./utils/api";

// const App = () => {
//     const [input, setInput] = useState("");
//     const [response, setResponse] = useState("");

//     const handleSend = async () => {
//         const aiResponse = await getAIRecommendations(input);
//         setResponse(aiResponse);
//     };

//     return (
//         <div className="p-4">
//             <input
//                 type="text"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 placeholder="Ask about policies..."
//                 className="border p-2 w-full"
//             />
//             <button onClick={handleSend} className="bg-blue-500 text-white p-2 mt-2">Ask AI</button>
//             {response && <p className="mt-2 text-lg">{response}</p>}
//         </div>
//     );
// };

// export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserDashboard from "./pages/UserDashboard";
import Chat from "./pages/Chat";
import Signup from "./pages/Signup";
import Support from "./pages/Support";
import Plans from "./pages/Plans";
import AgentDashboard from "./pages/AgentDashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/agent" element={<AgentDashboard />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/support" element={<Support />} />
        <Route path="/plans" element={<Plans />} />
      </Routes>
    </Router>
  );
};

export default App;
