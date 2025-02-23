import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, X } from 'lucide-react';

const notifications = [
  {
    id: 1,
    title: 'Premium Due',
    message: 'Your health policy premium is due in 15 days.',
    type: 'warning',
    time: '2 hours ago'
  },
  {
    id: 2,
    title: 'New AI Recommendation',
    message: 'We have a new policy recommendation based on your profile.',
    type: 'info',
    time: '1 day ago'
  },
  {
    id: 3,
    title: 'Policy Update',
    message: 'Your life insurance policy has been updated successfully.',
    type: 'success',
    time: '2 days ago'
  }
];

export function Notifications({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
        >
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Bell className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-gray-800">Notifications</h3>
              </div>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="max-h-96 overflow-y-auto">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-gray-800">{notification.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                    <span className="text-xs text-gray-500 mt-2 block">{notification.time}</span>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    notification.type === 'warning' ? 'bg-yellow-100 text-yellow-800' :
                    notification.type === 'info' ? 'bg-blue-100 text-blue-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {notification.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-gray-200">
            <button
              className="text-primary hover:text-primary/80 text-sm font-medium w-full text-center"
            >
              View All Notifications
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}