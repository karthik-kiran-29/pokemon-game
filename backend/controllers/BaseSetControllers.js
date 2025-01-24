import { baseSetModel } from "../models/BaseSetModel.js";

const getAllBaseSet = async (req,res) =>{
    const page = parseInt(req.query.page) || 1;
    const limit = 10;

    try {
        const query = {
            ...(req.query.name &&  { name: { $regex: req.query.name, $options: 'i' } })  //not sure if name should be a parameter, could change latter
        }
    
        const result = await baseSetModel.find(query)
                .skip((page - 1) * limit)
                .limit(limit);
        
        const total = await baseSetModel.countDocuments(query);
    
        res.json({
            status: "success",
            data: result,
            page,
            totalPages: Math.ceil(total / limit),
            totalItems: total
        });
    } catch (error) {
        res.status(500).json({ status: "failed", error: error.message })
    }        
}

const getSingleBaseSet = async (req,res) =>{
    const baseSetId = req.params.baseSetId;
    try {
        const result = await baseSetModel.find({"_id":baseSetId});
        res.json({status:"success",data:result})
    } catch (error) {
        res.status(500).json({ status: "failed", error: error.message });
    }
}

export {getAllBaseSet,getSingleBaseSet};