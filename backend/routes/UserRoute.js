import express from 'express';
import { getUserProfile,putUserProfile } from '../controllers/userControllers.js';

const UserRouter = express.Router();

UserRouter.route("/profile").get(getUserProfile).put(putUserProfile);


export {UserRouter};