import React from 'react';

const LeaderBoardCard = ({ position, name }) => {
  return (
    <div className="flex items-center justify-between p-4 mb-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center space-x-4">
        <div className={`
          flex items-center justify-center w-8 h-8 rounded-full 
          ${position === 1 ? 'bg-yellow-400' : 
            position === 2 ? 'bg-gray-300' : 
            position === 3 ? 'bg-amber-600' : 'bg-gray-100'}
          font-bold text-gray-700
        `}>
          {position}
        </div>
        <div className="font-medium text-gray-800">{name}</div>
      </div>
      <div className="flex items-center space-x-2">
        {position <= 3 && (
          <div className="text-sm font-medium text-gray-500">
            {position === 1 ? '🏆' : position === 2 ? '🥈' : '🥉'}
          </div>
        )}
      </div>
    </div>
  );
};

export default LeaderBoardCard;