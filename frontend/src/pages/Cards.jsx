import React, { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";
import Search from "../components/Search";
import { useSearchParams } from "react-router-dom";

const Cards = ()=>{
      const [pokemonData,setPokemonData] = useState([]);
      const [search,useSearch] = useSearchParams();

      useEffect(()=>{
          fetch( process.env.REACT_APP_API_URL + "/cards?" + search)
          .then(res => res.json())
          .then( res => {setPokemonData(res.data)})
      },[search])

      return(
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-center my-6">Pokemon Card Collection</h1>
          <Search/>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {pokemonData.map((card, index) => (
              <PokemonCard key={index} pokemon={card} />
              ))}
          </div>
          {pokemonData.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          Oopsie ! no pokemon found..
        </p>
      )}
        </div>
      )
}

export default Cards