import React, { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";

const Cards = ()=>{
      const [pokemonData,setPokemonData] = useState([]);

      useEffect(()=>{
          fetch( process.env.REACT_APP_API_URL + "/cards")
          .then(res => res.json())
          .then( res => {setPokemonData(res.data)})
      },[])

      return(
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-center my-6">Pokemon Card Collection</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {pokemonData.map((card, index) => (
              <PokemonCard key={index} pokemon={card} />
              ))}
          </div>
        </div>
      )
}

export default Cards