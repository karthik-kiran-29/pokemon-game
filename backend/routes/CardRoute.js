import express from 'express';
import { getAllCards, getRandomCards, getSingleCard } from '../controllers/cardControllers.js';


const router = express.Router();

router.route('/cards').get(getAllCards)

router.route('/cards/:cardId').get(getSingleCard);

router.route('/random').get(getRandomCards);



export default router;