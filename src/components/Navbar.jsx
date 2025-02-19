import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 fixed w-full top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">AI Insurance</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
          <Link to="/dashboard" className="hover:text-yellow-400 transition">Dashboard</Link>
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

