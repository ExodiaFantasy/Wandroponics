"use client"
import React, { useState, useEffect, useRef } from 'react';
import { FiUser } from 'react-icons/fi';
import { IoLogOutOutline } from 'react-icons/io5';
import { RiProfileLine } from 'react-icons/ri';
import ProfileModal from './ProfileModal';

const Users = () => {
  const [showPanel, setShowPanel] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const panelRef = useRef<HTMLDivElement>(null);

  const toggleNotificationPanel = () => {
    setShowPanel(!showPanel);
  };

  const toggleProfileModal = () => {
    setShowProfileModal(!showProfileModal);
    setEditMode(false); // Close edit mode when showing the profile modal
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const closeNotificationPanel = (event: MouseEvent) => {
    if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
      setShowPanel(false);
    }
  };

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

  // Mock user data 
  const userData = {
    name: 'Novilyn Falcatan',
    birthdate: 'January 1, 1990',
    country: 'Philippines',
    password: '*********', 
    username: 'novilynnn',
    email: 'novilyn.falcatan@tup.edu.ph',
    profilePicture: 'avatar.jpg',
  };

  return (
    <div className="relative">
      <button 
        className="text-green-800 mr-5 max-w-lg border-2 border-green-800 rounded-lg px-2 py-2 font-semibold hover:text-white hover:bg-green-900"
        onClick={toggleNotificationPanel}>
        <FiUser size={30} />
      </button>

      {showPanel && (
        <div ref={panelRef} className="absolute z-30 right-0 mt-2 w-56 bg-white border border-gray-300 shadow-lg rounded-md p-4">
          
          {/* User Profile Section */}
          <div className="flex justify-center items-center mb-4">
            <img
              src={userData.profilePicture}
              alt={`${userData.username}'s profile`}
              className="rounded-full w-20 h-20"
            /> </div>
            <p className="flex justify-center text-xl text-gray-900 font-semibold mb-5">{userData.name}</p>
              
          

          {/* Profile Button */}
          <button 
            className="block w-full text-center py-2 px-4 text-base font-semibold hover:bg-green-900 hover:text-white"
            onClick={toggleProfileModal}
          >
            <RiProfileLine size={20} className="inline" /> Profile 
          </button>
          
          {showProfileModal && (
            <ProfileModal
              userData={userData}
              editMode={editMode}
              toggleProfileModal={toggleProfileModal}
              toggleEditMode={toggleEditMode}
            />
          )}

          {/* Log Out Button */}
          <a href='/' className="block w-full text-center py-2 px-4 text-base font-semibold hover:bg-green-900 hover:text-white">
            <IoLogOutOutline size={20} className="inline" /> Log Out
          </a>
        </div>
      )}
    </div>
  );
};

export default Users;