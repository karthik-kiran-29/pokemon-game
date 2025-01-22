import {CardModel} from '../models/CardModel.js';

const getSingleCard = async (req,res) =>{
    const cardId = req.params.cardId;
    try {
        const result = await CardModel.find({"_id":cardId});
        res.json({new:"success",result})
    } catch (error) {
        res.json({new:"failed",error: error.message})
    }

}

export {getSingleCard};