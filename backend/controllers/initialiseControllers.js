import { CardModel } from "../models/CardModel.js";
import { baseSetModel } from "../models/BaseSetModel.js";
import { userModel } from "../models/UserModel.js";

const initialise = () =>{
    CardModel.create({
        "id": "base1-1",
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
            "type": "Pokémon Power"
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
            "text": "Flip a coin. If heads, the Defending Pokémon is now Confused."
          }
        ],
        "weaknesses": [
          {
            "type": "Psychic",
            "value": "×2"
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
      })

    baseSetModel.create({
        "id": "base1",
        "name": "Base",
        "series": "Base",
        "printedTotal": 102,
        "total": 102,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "BS",
        "releaseDate": "1999/01/09",
        "updatedAt": "2022/10/10 15:12:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/base1/symbol.png",
          "logo": "https://images.pokemontcg.io/base1/logo.png"
        }
      })  

    userModel.create({
        username:"admin",
        email:"karthikkiran029@gmail.com",
        collection:[],
        checkIn: {streak:0,totalCheckIns:0},
        stats:{totalCards:0,uniqueCards:0,setsProgress:[{baseSetId:"",completed:0,totalOwned:0}],}

    })  
}

export {initialise};