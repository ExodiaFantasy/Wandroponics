import React from 'react';

interface ProfileModalProps {
  userData: {
    name: string;
    birthdate: string;
    country: string;
    password: string;
    username: string;
    email: string;
    profilePicture: string;
  };
  editMode: boolean;
  toggleProfileModal: () => void;
  toggleEditMode: () => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({
  userData,
  editMode,
  toggleProfileModal,
  toggleEditMode,
}) => {
  return (
    <div className="fixed inset-0 overflow-y-scroll flex items-center justify-center z-30 bg-gray-800 bg-opacity-75">
      <div className="z-30 w-1/2 bg-white p-8 rounded-2xl flex">
        {/* Left Column - User Information */}
        <div className="w-1/2 p-2">
        <h2 className="mb-5 font-extrabold text-2xl text-green-900"> User Information </h2>

          <div className="mb-2">
            <p className="text-gray-900">Name:</p>
            {editMode ? (
              <input
                type="text"
                value={userData.name}
                onChange={(e) => console.log(e.target.value)} // Handle input changes
                className="border border-gray-300 p-2" // Add a border to the input field in edit mode
              />
            ) : (
              <p className="text-gray-600">{userData.name}</p>
            )}
          </div>

          <div className="mb-2">
            <p className="text-gray-900">Birthdate:</p>
            {editMode ? (
              <input
                type="text"
                value={userData.birthdate}
                onChange={(e) => console.log(e.target.value)} // Handle input changes
                className="border border-gray-300 p-2" // Add a border to the input field in edit mode
              />
            ) : (
              <p className="text-gray-600">{userData.birthdate}</p>
            )}
          </div>

          <div className="mb-2">
            <p className="text-gray-900">Country:</p>
            {editMode ? (
              <input
                type="text"
                value={userData.country}
                onChange={(e) => console.log(e.target.value)} // Handle input changes
                className="border border-gray-300 p-2" // Add a border to the input field in edit mode
              />
            ) : (
              <p className="text-gray-600">{userData.country}</p>
            )}
          </div>

          <div className="mb-2">
            <p className="text-gray-900">Password:</p>
            {editMode ? (
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={userData.password}
                onChange={(e) => console.log(e.target.value)} // Handle input changes
                className="border border-gray-300 p-2" // Add a border to the input field in edit mode
              />
            ) : (
              <p className="text-gray-600">{userData.password}</p>
            )}
          </div>

          <div className="mb-2">
            <p className="text-gray-900">Username:</p>
            {editMode ? (
              <input
                type="text"
                value={userData.username}
                onChange={(e) => console.log(e.target.value)} // Handle input changes
                className="border border-gray-300 p-2" // Add a border to the input field in edit mode
              />
            ) : (
              <p className="text-gray-600">{userData.username}</p>
            )}
          </div>

          <div className="mb-2">
            <p className="text-gray-900">Email:</p>
            {editMode ? (
              <input
                type="text"
                value={userData.email}
                onChange={(e) => console.log(e.target.value)} // Handle input changes
                className="border border-gray-300 p-2" // Add a border to the input field in edit mode
              />
            ) : (
              <p className="text-gray-600">{userData.email}</p>
            )}
          </div>

          <div className="flex mt-8">
            <button
              className="flex-1 text-center py-2 mt-2 text-base font-semibold bg-gray-300 hover:bg-green-900 hover:text-white mr-2"
              onClick={toggleEditMode}
            >
              {editMode ? 'Save' : 'Edit'}
            </button>

            <button
              className="flex-1 text-center py-2 mt-2 text-base font-semibold bg-gray-300 hover:bg-green-900 hover:text-white ml-2"
              onClick={toggleProfileModal}
            >
              Close
            </button>
          </div>
          
        </div>

        {/* Right Column - Profile Picture */}
        <div className="z-30 w-1/2 text-center flex flex-col items-center">
          <img
            src={userData.profilePicture}
            alt={`${userData.username}'s profile`}
            className="rounded-full mt-20 w-64 h-64 mx-auto mb-4"
          />

          {/* Change Picture */}
          <button className="text-sm text-blue-600 mb-2">Change Picture</button>

          {/* Delete */}
          <button className="text-sm text-red-600 ml-2">Delete</button>
        </div>

      </div>
    </div>
  );
};

export default ProfileModal;
