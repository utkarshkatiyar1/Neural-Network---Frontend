import Navbar from "../components/Navbar";
import homepage from "../assets/homepage.png";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Navbar />
            {/* Hero Section */}
            <div className="flex flex-col md:flex-row items-center justify-center h-screen bg-gradient-to-r from-[#C10046] to-[#2E176F] text-white px-4 pt-20">
                {/* Text Content */}
                <div className="text-center md:text-left max-w-2xl">
                    <h1 className="text-5xl font-extrabold mb-4 hover:scale-105 transition-transform duration-300">
                        Welcome to AI-Powered Insurance
                    </h1>
                    <p className="text-lg">
                        Revolutionizing the insurance industry with AI-driven insights, personalized recommendations, and seamless policy management.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
                        <Link to="/dashboard" className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg shadow-md hover:bg-yellow-300 hover:scale-105 transition">
                            Explore Dashboard
                        </Link>
                        <Link to="/chat" className="px-6 py-3 border border-white text-white font-bold rounded-lg hover:bg-white hover:text-black hover:scale-105 transition">
                            Try AI Chat
                        </Link>
                        <Link to="/plans" className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 hover:scale-105 transition">
                            View Plans
                        </Link>
                        <Link to="/support" className="px-6 py-3 border border-gray-300 text-white font-bold rounded-lg hover:bg-gray-300 hover:text-black hover:scale-105 transition">
                            Customer Support
                        </Link>
                    </div>
                </div>

                {/* Image on Right */}
                <div className="mt-8 md:mt-0 md:ml-10">
                    <img src={homepage} alt="Homepage Illustration" className="max-w-md w-full md:w-[500px] rounded-lg shadow-lg" />
                </div>
            </div>

            {/* Features Section */}
            <div className="bg-gray-100 text-gray-900 py-16 px-6 text-center">
                <h2 className="text-3xl font-bold mb-6">Why Choose Our AI-Powered Solution?</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                        { title: "AI-Driven Policy Recommendations", desc: "Get personalized insurance plans based on your needs using AI-powered analysis." },
                        { title: "Instant Customer Support", desc: "Our AI chatbot provides real-time assistance and answers your queries instantly." },
                        { title: "Seamless Policy Management", desc: "Track and manage your policies effortlessly through our interactive dashboard." }
                    ].map((feature, index) => (
                        <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:scale-105 hover:shadow-xl transition-transform duration-300">
                            <h3 className="text-xl font-bold text-[#C10046]">{feature.title}</h3>
                            <p className="mt-2">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="bg-white py-16 px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What Our Customers Say</h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {[
                        { text: "This AI-powered insurance assistant is a game-changer! It helped me find the perfect policy within minutes.", user: "Ankit Sharma" },
                        { text: "I love how easy it is to track my policies and get personalized suggestions. Highly recommended!", user: "Priya Kapoor" }
                    ].map((testimonial, index) => (
                        <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300">
                            <p className="text-gray-800">"{testimonial.text}"</p>
                            <h4 className="mt-4 font-bold text-[#C10046]">- {testimonial.user}</h4>
                        </div>
                    ))}
                </div>
            </div>

            {/* Call to Action Section */}
            <div className="bg-gradient-to-r from-[#C10046] to-[#2E176F] text-white py-16 text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-lg max-w-2xl mx-auto">
                    Explore our insurance plans and take control of your future with AI-driven insights.
                </p>
                <Link to="/signup" className="mt-6 inline-block px-8 py-3 bg-yellow-400 text-black font-bold rounded-lg shadow-md hover:bg-yellow-300 hover:scale-105 transition">
                    Sign Up Now
                </Link>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-white text-center py-6">
                <p className="text-sm">&copy; 2024 SBI Life. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
