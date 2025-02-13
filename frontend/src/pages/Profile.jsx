import React, { useState ,useEffect } from 'react';
import Loading from './Loading';

const Profile = () => {
    const [userData,setUserData] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
  
    useEffect(()=>{
              fetch( process.env.REACT_APP_API_URL + "/profile" )
              .then(res => res.json())
              .then( res => {setUserData(res.result[0]);setIsLoading(false);console.log(res)})
          },[])

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if(isLoading){
    return <Loading/>
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-xl p-6">
          <div className="flex items-center space-x-4">
            <div className="h-20 w-20 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-2xl text-white font-bold">
                {userData.username.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{userData.username}</h1>
              <p className="text-gray-600">{userData.email}</p>
            </div>
          </div>
        </div>

        {/* Check-in Stats */}
        <div className="bg-white rounded-lg shadow-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Check-in Status</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-600">Current Streak</p>
              <p className="text-2xl font-bold text-blue-600">{userData.checkIn.streak} days</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-600">Total Check-ins</p>
              <p className="text-2xl font-bold text-blue-600">{userData.checkIn.totalCheckIns}</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-600">Last Check-in</p>
              <p className="text-lg font-semibold text-blue-600">
                {formatDate(userData.checkIn.lastCheckIn)}
              </p>
            </div>
          </div>
        </div>

        {/* Collection Stats */}
        <div className="bg-white rounded-lg shadow-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Collection Overview</h2>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-2xl text-green-600">🃏</span>
                <p className="text-2xl font-bold text-green-600">{userData.stats.totalCards}</p>
              </div>
              <p className="text-sm text-gray-600 mt-2">Total Cards</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-2xl text-purple-600">🎴</span>
                <p className="text-2xl font-bold text-purple-600">{userData.stats.uniqueCards}</p>
              </div>
              <p className="text-sm text-gray-600 mt-2">Unique Cards</p>
            </div>
          </div>
        </div>

        {/* Sets Progress */}
        <div className="bg-white rounded-lg shadow-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Sets Progress</h2>
          <div className="space-y-4">
            {userData.stats.setsProgress.map((set, index) => (
              <div key={set.baseSetId} className="space-y-2">
                <div className="flex justify-between items-center">
                  <p className="font-medium text-gray-700">{set.baseSetId}</p>
                  <p className="text-sm text-gray-600">
                    {set.totalOwned} / {set.completed} cards
                  </p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${(set.completed / set.totalOwned) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Collections */}
        <div className="bg-white rounded-lg shadow-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Collections</h2>
          <div className="space-y-4">
            {userData.collections.map((card) => (
              <div
                key={card.cardId}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <p className="font-medium text-gray-800">Card #{card.cardId.slice(-4)}</p>
                  <p className="text-sm text-gray-600">
                    Acquired: {formatDate(card.acquiredAt)}
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">
                    x{card.quantity}
                  </span>
                  {card.isFavorite && (
                    <span className="text-yellow-500">⭐</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;