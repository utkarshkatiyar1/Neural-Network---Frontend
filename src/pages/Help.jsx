import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, Phone, Mail, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How do I file a claim?',
    answer: 'To file a claim, log in to your account and navigate to the Claims section. Follow the step-by-step process and upload the required documents. Our team will process your claim within 48-72 hours.'
  },
  {
    question: 'How can I update my policy details?',
    answer: 'You can update your policy details by visiting the My Policies section. Click on the policy you want to update and select the Edit option. Make your changes and submit for review.'
  },
  {
    question: 'What documents are needed for policy renewal?',
    answer: 'For policy renewal, you typically need your policy number, valid ID proof, and address proof. Additional documents may be required based on the type of policy and coverage amount.'
  }
];

export function Help() {
  const [openFaq, setOpenFaq] = React.useState(null);

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-6 rounded-xl shadow-sm"
      >
        <div className="flex items-center space-x-3">
          <HelpCircle className="w-8 h-8 text-primary" />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Help & Support</h1>
            <p className="text-gray-600 mt-1">
              Get assistance with your policies and insurance-related queries
            </p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-xl shadow-sm"
        >
          <Phone className="w-6 h-6 text-primary mb-4" />
          <h2 className="text-lg font-semibold text-gray-800">Call Us</h2>
          <p className="text-gray-600 mt-2">24/7 Customer Support</p>
          <p className="text-primary font-semibold mt-2">1800-123-4567</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-6 rounded-xl shadow-sm"
        >
          <Mail className="w-6 h-6 text-primary mb-4" />
          <h2 className="text-lg font-semibold text-gray-800">Email Us</h2>
          <p className="text-gray-600 mt-2">Get response within 24 hours</p>
          <p className="text-primary font-semibold mt-2">support@sbilife.com</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-6 rounded-xl shadow-sm"
        >
          <MessageSquare className="w-6 h-6 text-primary mb-4" />
          <h2 className="text-lg font-semibold text-gray-800">Chat Support</h2>
          <p className="text-gray-600 mt-2">Instant AI assistance</p>
          <button className="text-primary font-semibold mt-2 hover:text-primary/80">
            Start Chat
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-6 rounded-xl shadow-sm"
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <span className="font-medium text-gray-800">{faq.question}</span>
                {openFaq === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openFaq === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}