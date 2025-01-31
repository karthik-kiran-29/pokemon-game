import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="relative w-40 h-40">
        {/* Pokéball Base */}
        <div className="absolute inset-0 animate-spin">
          <div className="w-full h-full relative">
            {/* Top Half */}
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-red-600 rounded-t-full border-4 border-black z-10"></div>
            
            {/* Bottom Half */}
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-white rounded-b-full border-4 border-black z-10"></div>
            
            {/* Center Button */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white border-4 border-black rounded-full z-20"></div>
            
            {/* Divider */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-black z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;