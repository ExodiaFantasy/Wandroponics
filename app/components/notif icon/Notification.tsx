"use client"
import React, { useState, useEffect, useRef } from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io';

interface NotificationState {
  id: number;
  text: string;
  time: string;
  date: string;
}

const Notification: React.FC = () => {
  const [showPanel, setShowPanel] = useState(false);
  const [notifications, setNotifications] = useState<NotificationState[]>([]);
  const modalRef = useRef<HTMLDivElement>(null);

  const toggleNotificationPanel = () => {
    setShowPanel(!showPanel);
  };

  const closeNotificationPanel = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setShowPanel(false);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newNotification: NotificationState = {
        id: Date.now(),
        text: 'System Update: Water Level is Low',
        time: new Date().toLocaleTimeString(),
        date: new Date().toLocaleDateString(),
      };

      setNotifications((prevNotifications) => [newNotification, ...prevNotifications]);
    }, 50000); // 50 secs

    
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (showPanel) {
      document.addEventListener('click', closeNotificationPanel);
    } else {
      document.removeEventListener('click', closeNotificationPanel);
    }

    return () => {
      document.removeEventListener('click', closeNotificationPanel);
    };
  }, [showPanel]);

  return (
    <div className="relative">
      <button 
        onClick={toggleNotificationPanel}
        className="text-green-800 mr-5 max-w-lg border-2 border-green-800 rounded-lg px-2 py-2 font-semibold hover:text-white hover:bg-green-900">
        <IoMdNotificationsOutline size={30}  />
      </button>

      {showPanel && (
        <div ref={modalRef} className="mt-2 absolute right-0 w-80 bg-white border border-gray-300 shadow-lg rounded-md p-4 z-50">
          <h1 className="text-4xl font-extrabold text-green-900 mb-4">Alert Notifications</h1>
          <div className="mt-4 max-h-60 overflow-y-auto">
            {notifications.map((notification) => (
              <div key={notification.id} className="p-2 bg-gray-200 rounded mb-2">
                <p className="text-sm text-gray-600">{notification.text}</p>
                <p className="text-xs text-gray-500">
                  Time: {notification.time}, Date: {notification.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;
