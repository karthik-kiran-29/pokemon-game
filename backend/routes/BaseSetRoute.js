import express from 'express';
import { getAllBaseSet,getSingleBaseSet } from '../controllers/BaseSetControllers.js';


const BaseSetRouter = express.Router();

BaseSetRouter.route('/base-sets').get(getAllBaseSet)

BaseSetRouter.route('/base-sets/:baseSetId').get(getSingleBaseSet);



export default BaseSetRouter;