import React from 'react';

const Legend: React.FC = () => {
  return (
    <div className="mx-4 mt-4 bg-white rounded-xl shadow-lg p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">Leyenda</h3>
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="text-sm text-gray-600">Tomada</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <span className="text-sm text-gray-600">No tomada</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-blue-500" />
          <span className="text-sm text-gray-600">Hoy</span>
        </div>
      </div>
    </div>
  );
};

export default Legend;