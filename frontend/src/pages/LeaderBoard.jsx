import React from 'react';
import LeaderBoardCard from '../components/LeaderBoardCard';

const LeaderBoard = () => {
  const leaderboardData = [
    { position: 1, name: "kazomako" },
    { position: 2, name: "player2" },
    { position: 3, name: "player3" },
    { position: 4, name: "player4" }
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Leaderboard</h2>
        <p className="text-gray-600">Top players ranking</p>
      </div>
      
      <div className="space-y-2">
        {leaderboardData.map((player) => (
          <LeaderBoardCard
            key={player.position} 
            {...player} 
          />
        ))}
      </div>
    </div>
  );
};

export default LeaderBoard;