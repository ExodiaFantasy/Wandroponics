"use client"
import React, { useState } from 'react';
import Navbar from './Navbar/Navbar';
import { IoIosAddCircleOutline, IoIosArrowDown } from 'react-icons/io';
import Sidebar from './Sidebar/Sidebar';
import Setup from './Sidebar/Setup';
import Contents from './Contents/Contents';

function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [savedSetups, setSavedSetups] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSave = (name: string) => {
    console.log(`Saving setup with name: ${name}`);
    setSavedSetups([...savedSetups, name]);
    closeModal();
  };
  
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className="bg-green-200 min-h-screen">
      <Navbar />

      <div className="flex items-center justify-between mt-6 ml-20">
        {/* TITLE */}
        <div className="text-lg text-green-900 font-bold italic">
          Set proper attributes for your plant!
        </div>

        {/* ADD SETUP BUTTONS */}
        <div className="flex items-center">

          {/* EXISTING SETUPS DROPDOWN BUTTON */}
          <div className="relative inline-block">
            <button
              className="text-green-800 mr-5 max-w-lg px-2 py-2 inline-flex items-center font-sm hover:bg-green-800 hover:text-white"
              onClick={toggleDropdown}
            >
              <IoIosAddCircleOutline size={20} className="mr-1" /> Existing
              <IoIosArrowDown size={16} className="ml-1" />
            </button>

            {/* EXISTING SETUPS DROPDOWN CONTENT */}
            {isDropdownOpen && (
              <div className="absolute max-w-screen bg-white border-2 border-gray-300 mt-2 p-2 rounded-lg max-h-screen overflow-x-auto">                
                <button
                  className="text-green-800 mr-10 mb-3 w-full rounded-lg px-2 py-3 inline-flex items-center font-sm hover:bg-green-800 hover:text-white"
                  > Iceberg Lettuce
                </button>

                <button
                  className="text-green-800 mr-10 mb-3 w-full rounded-lg px-2 py-3 inline-flex items-center font-sm hover:bg-green-800 hover:text-white"
                  > Romaine Lettuce
                </button>

              </div>
            )}

          </div>

          {/* NEW SETUP BUTTON */}
          <button
            className="text-green-800 mr-10 max-w-lg px-2 py-2 inline-flex items-center font-sm hover:bg-green-800 hover:text-white"
            onClick={openModal}
          >
            <IoIosAddCircleOutline size={20} className="mr-1" /> New
          </button>

          {/* CALLING MODAL */}
          <Setup isOpen={isModalOpen} onClose={closeModal} onSave={handleSave} />
        </div>
      </div>

      <div className="flex justify-start mt-8">
        <Sidebar savedSetups={savedSetups} />
        <Contents />
      </div>
    </div>
  );
}

export default Page;
