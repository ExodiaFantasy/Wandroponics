import React, { useState } from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';

interface Card {
  id: string;
}

export default function Contents() {
  const [cards, setCards] = useState<Card[]>([]);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [counter, setCounter] = useState<number>(100);

  const handleAddCard = () => {
    const newCard: Card = {
      id: String(cards.length + 1),
    };
    setCards([...cards, newCard]);
  };

  const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedItem(event.target.value);
  };

  const handleCounterIncrement = () => {
    setCounter((prevCounter) => prevCounter + 10);
  };

  const handleCounterDecrement = () => {
    setCounter((prevCounter) => (prevCounter > 0 ? prevCounter - 10 : prevCounter));
  };

  return (
    <div className="bg-white flex-col justify-end items-end rounded-lg p-10 m-2 w-3/4 max-h-[400px] overflow-y-auto">
      <div className="flex justify-end mb-4">
        {/* ADD CONDITIONAL CARDS */}
        <button
          className="text-green-800 mr-2 max-w-lg border border-gray-200 rounded-lg px-2 py-1 inline-block font-semibold hover:bg-green-800 hover:text-white"
          onClick={handleAddCard}
        >
          <IoIosAddCircleOutline size={25} />
        </button>

        <button className="text-green-800 max-w-lg border border-gray-200 rounded-lg px-2 py-1 inline-block font-semibold hover:bg-green-800 hover:text-white">
          Save
        </button>
      </div>

      {/* Display Cards */}
      <div className="flex flex-wrap justify-center">
        {cards.map((card) => (
          <div key={card.id} className="bg-green-900 rounded-lg p-5 m-4 w-64">

            {/* Dropdown button */}
            <div className="relative inline-block text-left">
              <select
                className="bg-gray-200 border border-gray-400 text-green-900 font-semibold py-2 px-4 rounded inline-flex items-center"
                onChange={handleDropdownChange}
                value={selectedItem || ''}
              >
                <option value="" disabled hidden>
                  Select an option
                </option>
                <option value="option1">Phosphate Level is high</option>
                <option value="option2">Phosphate Level is low</option>
                <option value="option3">pH Level is low</option>
                <option value="option4">pH Level is high</option>
              </select>
            </div>

            {/* Two buttons */}
            <div className="flex justify-between my-4">
              <button className="bg-gray-200 text-green-900 px-4 py-2 rounded">
                pH Level
              </button>
              <p className="mx-4 text-green-900">is</p>
              <button className="bg-gray-200 text-green-900 px-4 py-2 rounded">
                less than/equal
              </button>
            </div>


            {/* Counter */}
            <div className="flex justify-center items-center my-4">
              <button className="bg-gray-200 text-green-900 px-4 py-2 rounded" onClick={handleCounterIncrement}>
                +
              </button>
              <span className="mx-4 text-green-900">{counter}</span>
              <button className="bg-gray-200 text-green-900 px-4 py-2 rounded" onClick={handleCounterDecrement}>
                -
              </button>
            </div>

            {/* TWO BUTTONS  */}
            <div className="flex justify-between">
              <button className="bg-gray-200 text-green-900 px-4 py-2 rounded">
                pH Up
              </button>
              <button className="bg-gray-200 text-green-900 px-4 py-2 rounded">
                Delay: 5s
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
