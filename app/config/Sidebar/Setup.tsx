import React, { useState } from 'react';

interface SetupProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (name: string) => void;
}

const Setup: React.FC<SetupProps> = ({ isOpen, onClose, onSave }) => {
  const [name, setName] = useState('');

  const handleSaveClick = () => {
    onSave(name);
  };

  return (
    <div className={`z-30 fixed inset-0 ${isOpen ? 'flex' : 'hidden'} items-center justify-center`}>
      <div className="absolute bg-gray-800 bg-opacity-75 inset-0" onClick={onClose}></div>
      <div className="w-1/2 z-30 bg-white p-10">
        <h1 className="text-3xl font-extrabold text-green-900 mb-4">Create a new setup!</h1>
        <div className="bg-gray-200 w-full p-3 flex items-center mb-3">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-gray-200 outline-none text-sm flex-1"
          />
        </div>

        <div className="flex justify-end w-full mt-3">
          <button
            className="text-center p-4 mt-2 mr-2 text-sm font-semibold bg-gray-300 hover:bg-green-900 hover:text-white"
            onClick={handleSaveClick}
          >
            Save
          </button>

          <button
            className="text-center p-4 mt-2 text-sm font-semibold bg-gray-300 hover:bg-green-900 hover:text-white"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Setup;
