import express from 'express';
import { getUserProfile } from '../controllers/UserControllers.js';

const UserRouter = express.Router();

UserRouter.get("/profile",getUserProfile);

export {UserRouter};