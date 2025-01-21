import mongoose from "mongoose";

const cardSchema = new mongoose.Schema(
    {
        _id: {
          type: String,
          required: true,
          unique: true
        },
        name: {
          type: String,
          required: true
        },
        supertype: {
          type: String,
          required: true
        },
        subtypes: [{
          type: String,
          required: true
        }],
        level: {
          type: String,
          required: false
        },
        hp: {
          type: String,
          required: false
        },
        types: [{
          type: String,
          required: false
        }],
        evolvesFrom: {
          type: String,
          required: false
        },
        evolvesTo: {
            type: String,
            required: false
          },
        abilities: [{
          name: {
            type: String,
            required: true
          },
          text: {
            type: String,
            required: true
          },
          type: {
            type: String,
            required: true
          }
        }],
        attacks: [{
          name: {
            type: String,
            required: true
          },
          cost: [{
            type: String,
            required: true
          }],
          convertedEnergyCost: {
            type: Number,
            required: true
          },
          damage: {
            type: String,
            required: false
          },
          text: {
            type: String,
            required: false
          }
        }],
        weaknesses: [{
          type: {
            type: String,
            required: true
          },
          value: {
            type: String,
            required: true
          }
        }],
        retreatCost: [{
          type: String,
          required: false
        }],
        convertedRetreatCost: {
          type: Number,
          required: false
        },
        number: {
          type: String,
          required: true
        },
        artist: {
          type: String,
          required: true
        },
        rarity: {
          type: String,
          required: false
        },
        flavorText: {
          type: String,
          required: false
        },
        nationalPokedexNumbers: [{
          type: Number,
          required: false
        }],
        legalities: {
          unlimited: {
            type: String,
            enum: ['Legal', 'Banned', null],
            default: null
          }
        },
        images: {
          small: {
            type: String,
            required: true
          },
          large: {
            type: String,
            required: true
          }
        }
      }, {
        timestamps: false,
        versionKey: false
      }
);

const CardModel = mongoose.model("Card",cardSchema);

export {CardModel};