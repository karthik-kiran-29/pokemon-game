import mongoose from "mongoose";

const baseSetSchema = new mongoose.Schema(
 {
    baseId: { type: String, required: true, unique: true },  // e.g., "bw10"
    name: { type: String, required: true },                  // e.g., "Plasma Blast"
    series: { type: String, required: true, index: true },   // e.g., "Black & White"
    printedTotal: { type: Number, required: true },
    total: { type: Number, required: true },
    
    legalities: {
      unlimited: String,
      expanded: String
    },
    
    ptcgoCode: String,                                       // e.g., "PLB"
    releaseDate: Date,
    updatedAt: Date,
    
    images: {
      symbol: String,
      logo: String
    }
  });

  const baseSetModel = mongoose.model('BaseSet',baseSetSchema);

  export {baseSetModel};

