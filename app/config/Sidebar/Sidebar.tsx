import React, { useState } from 'react';
import { HiOutlinePencilAlt } from 'react-icons/hi';

interface SidebarProps {
  savedSetups: string[];
}

export default function Sidebar({ savedSetups, }: SidebarProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="bg-white rounded-lg w-1/4 p-8 m-2">
      <h3 className="text-3xl font-extrabold text-green-900 mb-6">Saved Setups</h3>
      <div className="flex flex-wrap max-h-[300px] overflow-y-auto">
        {savedSetups.map((setup, index) => (
          <h1
            key={index}
            className="text-normal mb-4 font-semibold text-green-900 relative"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {setup}
            {hoveredIndex === index && (
              <HiOutlinePencilAlt
                className="text-blue-500 hover:text-blue-800 absolute mr-36 top-0 right-0 mt-1 cursor-pointer"
              />
            )}

            <button
              className="text-sm font-semibold text-blue-500 ml-24"
            >
              Edit
            </button>
            <button
              className="text-sm font-semibold text-red-500 ml-2 hover:text-red-800"
            >
              Delete
            </button>
          </h1>
        ))}
      </div>
    </div>
  );
}
