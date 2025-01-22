import {CardModel} from '../models/CardModel.js';

const getSingleCard = async (req,res) =>{
    const cardId = req.params.cardId;
    try {
        const result = await CardModel.find({"_id":cardId});
        res.json({result:"success",result})
    } catch (error) {
        res.json({result:"failed",error: error.message})
    }

}


// implementing pagination using limit and skip
const getAllCards = async (req,res) =>{
    const name = req.query.name?req.query.name:{};
    const types = req.query.types?req.query.types:{};
    const rarity = req.query.rarity?req.query.rarity:{};
    const baseSet = req.query.baseSet?req.query.baseSet:{};
    const page = req.query.page?req.query.baseSet:1;
    
    try {
        const result = await CardModel.find({name:{$regex:name,$options:'i'}},{types:types},{rarity:rarity},{baseSet:baseSet}).skip((page -1)*10).limit(10); // needs some changes not their yet
        res.json({result:"success",result})
    } catch (error) {
        res.json({result:"failed",error: error.message})
    }

}

export {getSingleCard,getAllCards};