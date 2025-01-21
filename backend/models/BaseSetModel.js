import mongoose from "mongoose";

const baseSetSchema = new mongoose.Schema(
    {
        id: {
          type: String,
          required: true,
          unique: true
        },
        name: {
          type: String,
          required: true
        },
        series: {
          type: String,
          required: true
        },
        printedTotal: {
          type: Number,
          required: true
        },
        total: {
          type: Number,
          required: true
        },
        legalities: {
          unlimited: {
            type: String,
            enum: ['Legal', 'Banned', null],
            default: null
          }
        },
        ptcgoCode: {
          type: String,
          required: false
        },
        releaseDate: {
          type: String,
          required: true
        },
        updatedAt: {
          type: String,
          required: true
        },
        images: {
          symbol: {
            type: String,
            required: true
          },
          logo: {
            type: String,
            required: true
          }
        }
      }, {
        timestamps: false, // Disable automatic timestamps since we have our own updatedAt
        versionKey: false  // Disable the __v field
      });

  const baseSetModel = mongoose.model('BaseSet',baseSetSchema);

  export {baseSetModel};

