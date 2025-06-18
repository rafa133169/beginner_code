import React from 'react';

const TodayPillCard: React.FC = () => {
  return (
    <div className="flex items-center justify-between bg-white border-2 border-pink-300 rounded-xl shadow-md p-4 mx-4 mt-4">
      {/* ícono de reloj */}
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE2QfvJ23egn5F9onjExdH6fzLpXIRNEqkuA&s"
        alt="clock"
        className="w-16 h-16 object-contain"
      />

      {/* información central */}
      <div className="flex flex-col items-center flex-1 px-4">
        <h2 className="text-black font-bold text-lg">TOMA DE HOY</h2>
        <p className="text-gray-500 text-sm">21 de mayo</p>

        <div className="flex items-end mt-2 space-x-1">
          <div className="bg-pink-100 border border-pink-400 rounded-md px-2 py-1 text-2xl font-mono">
            0
          </div>
          <div className="bg-pink-100 border border-pink-400 rounded-md px-2 py-1 text-2xl font-mono">
            8
          </div>
          <span className="text-2xl font-bold text-pink-400">:</span>
          <div className="bg-pink-100 border border-pink-400 rounded-md px-2 py-1 text-2xl font-mono">
            3
          </div>
          <div className="bg-pink-100 border border-pink-400 rounded-md px-2 py-1 text-2xl font-mono">
            0
          </div>
          <span className="ml-1 text-sm font-semibold text-gray-500">Pm</span>
        </div>

        <p className="text-gray-400 text-xs mt-2">Próxima toma en 02:00 hrs</p>
      </div>
    </div>
  );
};

export default TodayPillCard;