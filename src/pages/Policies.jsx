import React from 'react';
import { motion } from 'framer-motion';
import { Shield, AlertTriangle, CheckCircle } from 'lucide-react';

const policies = [
  {
    id: 1,
    name: 'Life Insurance Plus',
    type: 'Term Life Insurance',
    coverage: '25,00,000',
    premium: '2,500',
    nextDue: 'Mar 15, 2024',
    status: 'Active',
    details: {
      policyNumber: 'LIP123456789',
      startDate: 'Mar 15, 2023',
      endDate: 'Mar 14, 2033',
      nominee: 'Priya Kumar',
      relation: 'Spouse'
    }
  },
  {
    id: 2,
    name: 'Health Guard Premium',
    type: 'Health Insurance',
    coverage: '15,00,000',
    premium: '1,800',
    nextDue: 'Apr 1, 2024',
    status: 'Active',
    details: {
      policyNumber: 'HGP987654321',
      startDate: 'Apr 1, 2023',
      endDate: 'Mar 31, 2024',
      covered: ['Self', 'Spouse', 'Children']
    }
  }
];

export function Policies() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-6 rounded-xl shadow-sm"
      >
        <h1 className="text-2xl font-bold text-gray-800">My Policies</h1>
        <p className="text-gray-600 mt-2">
          Manage and view all your active insurance policies
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-6">
        {policies.map((policy) => (
          <motion.div
            key={policy.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <div className="flex justify-between items-start">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">{policy.name}</h2>
                  <p className="text-gray-600">{policy.type}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                policy.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
              }`}>
                {policy.status}
              </span>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">Coverage Amount</p>
                <p className="text-lg font-semibold text-gray-800">₹{policy.coverage}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">Premium Amount</p>
                <p className="text-lg font-semibold text-gray-800">₹{policy.premium}/month</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">Next Premium Due</p>
                <p className="text-lg font-semibold text-gray-800">{policy.nextDue}</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-gray-800 mb-3">Policy Details</h3>
              <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Policy Number</p>
                    <p className="font-medium text-gray-800">{policy.details.policyNumber}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Start Date</p>
                    <p className="font-medium text-gray-800">{policy.details.startDate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">End Date</p>
                    <p className="font-medium text-gray-800">{policy.details.endDate}</p>
                  </div>
                  {policy.details.nominee && (
                    <div>
                      <p className="text-sm text-gray-600">Nominee</p>
                      <p className="font-medium text-gray-800">{policy.details.nominee} ({policy.details.relation})</p>
                    </div>
                  )}
                  {policy.details.covered && (
                    <div className="col-span-2">
                      <p className="text-sm text-gray-600">Covered Members</p>
                      <p className="font-medium text-gray-800">{policy.details.covered.join(', ')}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end space-x-4">
              <button className="px-4 py-2 text-primary hover:bg-primary/5 rounded-lg transition-colors">
                Download Policy
              </button>
              <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                Renew Policy
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}