import { userModel } from "../models/UserModel.js";

 const getUserProfile = async(req,res) =>{
    try {
        const result = await userModel.find({"_id":process.env.USER_TEST_ID});//it bydefault has a _it to create other functionalities
        res.json({status:"success",result})
    } catch (error) {
        res.status(500).json({ status: "failed", error: error.message });
    }
 }

export {getUserProfile};