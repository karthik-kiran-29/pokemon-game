import React from "react";

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row items-center bg-white overflow-hidden">
        <div className="w-full md:w-2/5 p-4">
          <img 
            src="static/pokemon.png" 
            alt="Pokémon Daily Login"
            className="w-full h-auto object-cover rounded-lg  transform transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="w-full md:w-3/5 p-6">
          <h1 className="text-6xl md:text-4xl font-extrabold text-blue-800 mb-4 leading-tight">
            Catch 'Em All: 
            <span className="block text-5xl md:text-3xl text-blue-600 mt-2">
              Daily Logins Unlock Exclusive Pokémon Cards
            </span>
          </h1>
          <p className="text-gray-600 text-sm md:text-base mb-4">
            Log in daily to collect unique Pokémon cards and expand your collection!
          </p>
          <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors duration-300 shadow-md">
            Start Collecting
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;