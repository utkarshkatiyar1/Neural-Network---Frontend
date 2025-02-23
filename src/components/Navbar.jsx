import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 fixed w-full top-0 z-50 shadow-lg">
      <div className="w-90% mx-10 flex justify-between items-center">
        <h1 className="text-xl font-bold">AI Insurance</h1>
        <div className="space-x-4 relative flex items-center">
          <Link to="/" className="hover:text-yellow-400 transition">Home</Link>

          {/* Dashboard Dropdown */}
          <div className="relative">
            <button
              className="hover:text-yellow-400 transition flex items-center"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              Dashboard <FaCaretDown className="ml-1" />
            </button>
            {showDropdown && (
              <div className="absolute left-0 mt-2 bg-gray-800 text-white shadow-lg rounded-lg w-48">
                <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-700">
                  User Dashboard
                </Link>
                <Link to="/agent" className="block px-4 py-2 hover:bg-gray-700">
                  Agent Dashboard
                </Link>
              </div>
            )}
          </div>

          <Link to="/chat" className="hover:text-yellow-400 transition">Chat</Link>
          <Link to="/plans" className="hover:text-yellow-400 transition">Plans</Link>
          <Link to="/support" className="hover:text-yellow-400 transition">Support</Link>
          <Link to="/signup" className="hover:text-yellow-400 transition">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


