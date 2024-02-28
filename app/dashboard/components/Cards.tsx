import React from 'react';
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts';

const Cards = ({
  phosphateLevel = 50,
  pHLevel = 7,
  ecLevel = 2,
  temperature = 24,
  humidity = 60,
  waterLevel = 50 
}) => {
  // Function to create RadialBarChart for various parameters
  const createRadialBarChart = (value, label, fill, domainMax) => (
    <ResponsiveContainer width="100%" height={200}>
      <RadialBarChart innerRadius="10%" outerRadius="80%" data={[{ name: label, value, fill }]} startAngle={90} endAngle={450}>
        <PolarAngleAxis type="number" domain={[0, domainMax]} tick={false} />
        <RadialBar background dataKey="value" cornerRadius={5} />
      </RadialBarChart>
    </ResponsiveContainer>
  );

  return (
    <div className="bg-white relative py-12 mt-6 mx-8 rounded-3xl max-container padding-container">
      <div className="flex flex-wrap justify-center">
        {/* Phosphate Level Card */}
        <div className="bg-green-300 w-full md:w-1/3 rounded-lg p-6 m-4 flex flex-col items-center justify-center">
          <h3 className="text-xl font-semibold text-green-900 mb-4">Phosphate Level</h3>
          {createRadialBarChart(phosphateLevel, 'Phosphate', '#82ca9d', 100)}
          <p>{phosphateLevel} mg/L</p>
        </div>

        {/* pH Level Card */}
        <div className="bg-green-300 w-full md:w-1/3 rounded-lg p-6 m-4 flex flex-col items-center justify-center">
          <h3 className="text-xl font-semibold text-green-900 mb-4">pH Level</h3>
          {createRadialBarChart(pHLevel, 'pH', '#8884d8', 14)} 
          <p>{pHLevel} pH level</p>
        </div>

        {/* eC Level Card */}
        <div className="bg-green-300 w-full md:w-1/3 rounded-lg p-6 m-4 flex flex-col items-center justify-center">
          <h3 className="text-xl font-semibold text-green-900 mb-4">eC Level</h3>
          {createRadialBarChart(ecLevel, 'eC', '#83a6ed', 5)} 
          <p>{ecLevel} PPM</p>
        </div>

        {/* Temperature Card */}
        <div className="bg-green-300 w-full md:w-1/3 rounded-lg p-6 m-4 flex flex-col items-center justify-center">
          <h3 className="text-xl font-semibold text-green-900 mb-4">Temperature</h3>
          {createRadialBarChart(temperature, 'Temperature', '#ffc658', 50)} 
          <p>{temperature} °C</p>
        </div>

        {/* Humidity Card */}
        <div className="bg-green-300 w-full md:w-1/3 rounded-lg p-6 m-4 flex flex-col items-center justify-center">
          <h3 className="text-xl font-semibold text-green-900 mb-4">Humidity</h3>
          {createRadialBarChart(humidity, 'Humidity', '#82ca9d', 100)} 
          <p>{humidity} %</p>
        </div>

        {/* Water Level Card */}
        <div className="bg-green-300 w-full md:w-1/3 rounded-lg p-6 m-4 flex flex-col items-center justify-center">
          <h3 className="text-xl font-semibold text-green-900 mb-4">Water Level</h3>
          {createRadialBarChart(waterLevel, 'Water Level', '#a4de6c', 100)} 
          <p>{waterLevel} %</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
