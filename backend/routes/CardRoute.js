import express from 'express';
import { getSingleCard } from '../controllers/cardControllers.js';


const router = express.Router();

//router.route('/products').get(getProducts)

router.route('/cards/:cardId').get(getSingleCard);

export default router;