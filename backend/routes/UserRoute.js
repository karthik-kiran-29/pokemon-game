import express from 'express';
import { getUserProfile,putUserProfile } from '../controllers/UserControllers.js';

const UserRouter = express.Router();

UserRouter.route("/profile").get(getUserProfile).put(putUserProfile);


export {UserRouter};