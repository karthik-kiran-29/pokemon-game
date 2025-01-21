import mongoose from "mongoose";

const cardSchema = new mongoose.Schema(
    {
        cardId: { type: String, required: true, unique: true },
        name: { type: String, required: true, index: true },
        supertype: { type: String, required: true },
        subtypes: [String],
        hp: String,
        types: [{ type: String, index: true }],
        evolvesTo: [String],
        
        // Reference to which base set this card belongs to
        baseSetId: { 
          type: String, 
          required: true, 
          ref: 'BaseSet',
          index: true 
        },
        
        attacks: [{
          name: String,
          cost: [String],
          convertedEnergyCost: Number,
          damage: String,
          text: String
        }],
        
        
        images: {
          small: String,
          large: String
        },
        
        // TCG Online specific fields
        tcgPlayer: {
          url: String,
          prices: {
            normal: Number,
            holofoil: Number,
            reverseHolofoil: Number
          },
          updatedAt: Date
        }
      }
);

const CardModel = mongoose.model("Card",cardSchema);

export {CardModel};