import { userModel } from "../models/UserModel.js";

 const getUserProfile = async(req,res) =>{
    try {
        const result = await userModel.find({"_id":process.env.USER_TEST_ID});//it bydefault has a _it to create other functionalities
        res.json({status:"success",result})
    } catch (error) {
        res.status(500).json({ status: "failed", error: error.message });
    }
 }


// for updating username and email.
 const putUserProfile = async(req,res) =>{
    const query = {
        ...(req.query.email && { email: req.query.email }),
        ...(req.query.username && { email: req.query.username })
    }
    

    const setQuery = {$set:query}
    try {
        const result = await userModel.updateOne({_id:process.env.USER_TEST_ID}, setQuery);
        res.json({status:"success",result})
    } catch (error) {
        res.status(500).json({ status: "failed", error: error.message });
    }
 }

export {getUserProfile,putUserProfile};