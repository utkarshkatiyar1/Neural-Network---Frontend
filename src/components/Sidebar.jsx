import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`h-screen bg-gray-800 text-white p-5 transition-all ${isOpen ? "w-64" : "w-20"}`}>
      <button onClick={() => setIsOpen(!isOpen)} className="mb-4 p-2 bg-gray-700 rounded">
        {isOpen ? "Close" : "☰"}
      </button>
      <nav className="space-y-4">
        <a href="#" className="block p-2 hover:bg-gray-700 rounded">Dashboard</a>
        <a href="#" className="block p-2 hover:bg-gray-700 rounded">Analytics</a>
        <a href="#" className="block p-2 hover:bg-gray-700 rounded">Settings</a>
      </nav>
    </div>
  );
};

export default Sidebar;
