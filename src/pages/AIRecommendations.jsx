import React from 'react';
import { motion } from 'framer-motion';
import { Brain, TrendingUp, Shield, Heart } from 'lucide-react';

const recommendations = [
  {
    id: 1,
    title: 'Upgrade Life Coverage',
    description: 'Based on your recent salary increment and family status, we recommend increasing your life coverage.',
    type: 'upgrade',
    details: {
      currentCoverage: '25,00,000',
      recommendedCoverage: '50,00,000',
      additionalPremium: '2,000',
      reason: 'Recent salary increment and family planning'
    }
  },
  {
    id: 2,
    title: 'Add Critical Illness Cover',
    description: 'Enhance your health protection with comprehensive critical illness coverage.',
    type: 'new',
    details: {
      coverage: '10,00,000',
      premium: '1,500',
      illnessesCovered: '30+ Critical Illnesses',
      waitingPeriod: '90 days'
    }
  }
];

export function AIRecommendations() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-6 rounded-xl shadow-sm"
      >
        <div className="flex items-center space-x-3">
          <Brain className="w-8 h-8 text-primary" />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Recommendations</h1>
            <p className="text-gray-600 mt-1">
              Personalized insurance recommendations based on your profile and needs
            </p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 gap-6">
        {recommendations.map((recommendation) => (
          <motion.div
            key={recommendation.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-r from-gradient-start to-gradient-end rounded-lg">
                  {recommendation.type === 'upgrade' ? (
                    <TrendingUp className="w-6 h-6 text-white" />
                  ) : (
                    <Shield className="w-6 h-6 text-white" />
                  )}
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">{recommendation.title}</h2>
                  <p className="text-gray-600 mt-1">{recommendation.description}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                recommendation.type === 'upgrade' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
              }`}>
                {recommendation.type === 'upgrade' ? 'Upgrade' : 'New Policy'}
              </span>
            </div>

            <div className="mt-6 bg-gray-50 p-4 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recommendation.type === 'upgrade' ? (
                  <>
                    <div>
                      <p className="text-sm text-gray-600">Current Coverage</p>
                      <p className="font-medium text-gray-800">₹{recommendation.details.currentCoverage}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Recommended Coverage</p>
                      <p className="font-medium text-gray-800">₹{recommendation.details.recommendedCoverage}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Additional Premium</p>
                      <p className="font-medium text-gray-800">₹{recommendation.details.additionalPremium}/month</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Reason</p>
                      <p className="font-medium text-gray-800">{recommendation.details.reason}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <p className="text-sm text-gray-600">Coverage Amount</p>
                      <p className="font-medium text-gray-800">₹{recommendation.details.coverage}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Premium Amount</p>
                      <p className="font-medium text-gray-800">₹{recommendation.details.premium}/month</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Coverage</p>
                      <p className="font-medium text-gray-800">{recommendation.details.illnessesCovered}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Waiting Period</p>
                      <p className="font-medium text-gray-800">{recommendation.details.waitingPeriod}</p>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="mt-6 flex justify-end space-x-4">
              <button className="px-4 py-2 text-primary hover:bg-primary/5 rounded-lg transition-colors">
                Learn More
              </button>
              <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                Get Started
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}