import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        
        // Collection management
        collections: [{
          cardId: { type: mongoose.Schema.Types.ObjectId, ref: 'Card' },
          acquiredAt: Date,
          quantity: { type: Number, default: 1 },
          isFavorite: { type: Boolean, default: false }
        }],
        
        // Daily rewards and check-in system
        checkIn: {
          lastCheckIn: Date,
          streak: { type: Number, default: 0 },
          totalCheckIns: { type: Number, default: 0 }
        },
        
        // Collection statistics (cached)
        stats: {
          totalCards: { type: Number, default: 0 },
          uniqueCards: { type: Number, default: 0 },
          setsProgress: [{
            baseSetId: String,
            completed: Number,    // Percentage of completion
            totalOwned: Number
          }],
          lastUpdated: Date
        }
      });

const userModel = mongoose.model('User',userSchema);

export {userModel};