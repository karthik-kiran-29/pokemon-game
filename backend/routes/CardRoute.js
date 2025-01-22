import express from 'express';
import { getAllCards, getSingleCard } from '../controllers/cardControllers.js';


const router = express.Router();

router.route('/cards').get(getAllCards)

router.route('/cards/:cardId').get(getSingleCard);



export default router;