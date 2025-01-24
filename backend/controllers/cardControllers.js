import {CardModel} from '../models/CardModel.js';

const getSingleCard = async (req,res) =>{
    const cardId = req.params.cardId;
    try {
        const result = await CardModel.find({"_id":cardId});
        res.json({status:"success",result})
    } catch (error) {
        res.status(500).json({ status: "failed", error: error.message });
    }

}


// implementing pagination using limit and skip with params
const getAllCards = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = 10;

    try {
        const query = {
            ...(req.query.name && { name: { $regex: req.query.name, $options: 'i' } }),
            ...(req.query.types && { types: { $regex: req.query.types, $options: 'i' } }),
            ...(req.query.rarity && { rarity: { $regex: req.query.rarity, $options: 'i' } }),
            ...(req.query.baseSet && { _id: { $regex: req.query.baseSet, $options: 'i' } })
        };

        const result = await CardModel.find(query)
            .skip((page - 1) * limit)
            .limit(limit);

        const total = await CardModel.countDocuments(query);

        res.json({
            status: "success",
            data: result,
            page,
            totalPages: Math.ceil(total / limit),
            totalItems: total
        });
    } catch (error) {
        res.status(500).json({ status: "failed", error: error.message });
    }
};

export {getSingleCard,getAllCards};