import { useState } from "react";
import Navbar from "../components/Navbar";
import { FaPhone, FaEnvelope, FaHeadset, FaPaperPlane, FaQuestionCircle, FaRegFileAlt } from "react-icons/fa";

const Support = () => {
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const faqs = [
    { question: "How can I check my policy status?", answer: "You can check your policy status in your dashboard under 'Active Policies'." },
    { question: "How do I file an insurance claim?", answer: "Visit the 'Claims' section in your dashboard to start the process." },
    { question: "What documents are needed for a claim?", answer: "You need your policy number, identification, and proof of incident." },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-gradient-to-r from-[#C10046] to-[#2E176F] min-h-screen text-white flex flex-col">
      <Navbar />

      <div className="p-8 mt-16 flex flex-col md:flex-row gap-8">
        {/* Left - AI & Contact Support */}
        <div className="md:w-2/3">
          <h2 className="text-4xl font-bold mb-4">Customer Support</h2>
          <p className="text-lg mb-6">
            Need help? Use our AI assistant, check FAQs, or contact customer service.
          </p>

          {/* AI Support Section */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <FaHeadset className="text-yellow-400" /> AI Help Assistant
            </h3>
            <p className="text-gray-300 mt-2">
              Type your issue and get instant AI suggestions before contacting support.
            </p>
            <form onSubmit={handleSubmit} className="mt-4">
              <input
                type="text"
                placeholder="Describe your issue..."
                className="w-full p-3 rounded-md bg-gray-800 text-white border-none focus:ring-2 focus:ring-blue-400"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button
                type="submit"
                className="mt-3 bg-blue-500 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-600 transition"
              >
                <FaPaperPlane /> Submit
              </button>
            </form>

            {submitted && (
              <p className="mt-4 text-green-400">Your query has been submitted! Our AI is processing it.</p>
            )}
          </div>

          {/* FAQs Section */}
          <div className="bg-gray-900 p-6 mt-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <FaQuestionCircle className="text-yellow-400" /> Frequently Asked Questions
            </h3>
            <ul className="mt-4 space-y-3">
              {faqs.map((faq, index) => (
                <li key={index} className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 cursor-pointer">
                  <strong>{faq.question}</strong>
                  <p className="text-gray-300 text-sm mt-1">{faq.answer}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right - Contact Information & Support Ticket */}
        <div className="md:w-1/3 bg-gray-900 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Contact Customer Service</h3>
          <p className="text-gray-300 mt-2">
            Prefer to talk to a human? Contact us directly.
          </p>

          <div className="mt-4 space-y-4">
            <div className="flex items-center gap-3">
              <FaPhone className="text-green-400" />
              <p>+1 (800) 123-4567</p>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-yellow-400" />
              <p>support@insuranceai.com</p>
            </div>
          </div>

          {/* Live Chat Button */}
          <button className="mt-6 w-full bg-yellow-400 text-black font-bold px-6 py-3 rounded-lg hover:bg-yellow-300 transition">
            Live Chat Support
          </button>

          {/* Support Ticket Submission */}
          <div className="bg-gray-800 p-4 mt-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <FaRegFileAlt className="text-blue-400" /> Submit a Support Ticket
            </h3>
            <p className="text-gray-300 text-sm mt-1">
              If your issue is urgent, submit a ticket and we'll get back to you ASAP.
            </p>
            <button className="mt-3 w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              Submit Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
