import React from "react";
import PokemonCard from "../components/PokemonCard";

const Cards = ()=>{
  const SamplePokemon = [{
        "_id": "base1-1",
        "name": "Alakazam",
        "supertype": "Pokémon",
        "subtypes": [
          "Stage 2"
        ],
        "level": "42",
        "hp": "80",
        "types": [
          "Psychic"
        ],
        "evolvesFrom": "Kadabra",
        "abilities": [
          {
            "name": "Damage Swap",
            "text": "As often as you like during your turn (before your attack), you may move 1 damage counter from 1 of your Pokémon to another as long as you don't Knock Out that Pokémon. This power can't be used if Alakazam is Asleep, Confused, or Paralyzed.",
            "type": "Pokémon Power",
            "_id": {
              "$oid": "678fcd2406c4a0f14289963d"
            }
          }
        ],
        "attacks": [
          {
            "name": "Confuse Ray",
            "cost": [
              "Psychic",
              "Psychic",
              "Psychic"
            ],
            "convertedEnergyCost": 3,
            "damage": "30",
            "text": "Flip a coin. If heads, the Defending Pokémon is now Confused.",
            "_id": {
              "$oid": "678fcd2406c4a0f14289963e"
            }
          }
        ],
        "weaknesses": [
          {
            "type": "Psychic",
            "value": "×2",
            "_id": {
              "$oid": "678fcd2406c4a0f14289963f"
            }
          }
        ],
        "retreatCost": [
          "Colorless",
          "Colorless",
          "Colorless"
        ],
        "convertedRetreatCost": 3,
        "number": "1",
        "artist": "Ken Sugimori",
        "rarity": "Rare Holo",
        "flavorText": "Its brain can outperform a supercomputer. Its intelligence quotient is said to be 5000.",
        "nationalPokedexNumbers": [
          65
        ],
        "legalities": {
          "unlimited": "Legal"
        },
        "images": {
          "small": "https://images.pokemontcg.io/base1/1.png",
          "large": "https://images.pokemontcg.io/base1/1_hires.png"
        }
      },
      {
        "_id": "base1-1",
        "name": "Alakazam",
        "supertype": "Pokémon",
        "subtypes": [
          "Stage 2"
        ],
        "level": "42",
        "hp": "80",
        "types": [
          "Psychic"
        ],
        "evolvesFrom": "Kadabra",
        "abilities": [
          {
            "name": "Damage Swap",
            "text": "As often as you like during your turn (before your attack), you may move 1 damage counter from 1 of your Pokémon to another as long as you don't Knock Out that Pokémon. This power can't be used if Alakazam is Asleep, Confused, or Paralyzed.",
            "type": "Pokémon Power",
            "_id": {
              "$oid": "678fcd2406c4a0f14289963d"
            }
          }
        ],
        "attacks": [
          {
            "name": "Confuse Ray",
            "cost": [
              "Psychic",
              "Psychic",
              "Psychic"
            ],
            "convertedEnergyCost": 3,
            "damage": "30",
            "text": "Flip a coin. If heads, the Defending Pokémon is now Confused.",
            "_id": {
              "$oid": "678fcd2406c4a0f14289963e"
            }
          }
        ],
        "weaknesses": [
          {
            "type": "Psychic",
            "value": "×2",
            "_id": {
              "$oid": "678fcd2406c4a0f14289963f"
            }
          }
        ],
        "retreatCost": [
          "Colorless",
          "Colorless",
          "Colorless"
        ],
        "convertedRetreatCost": 3,
        "number": "1",
        "artist": "Ken Sugimori",
        "rarity": "Rare Holo",
        "flavorText": "Its brain can outperform a supercomputer. Its intelligence quotient is said to be 5000.",
        "nationalPokedexNumbers": [
          65
        ],
        "legalities": {
          "unlimited": "Legal"
        },
        "images": {
          "small": "https://images.pokemontcg.io/base1/1.png",
          "large": "https://images.pokemontcg.io/base1/1_hires.png"
        }
      }]

      return(
        <>
          <div>This is Card Collection.</div>
          <div className="md:flex">
          {
           SamplePokemon.map((card)=>{
            return <PokemonCard pokemon={card}/>
           })
          }
          </div>
        </>
      )
}

export default Cards