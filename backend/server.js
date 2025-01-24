import express from 'express';
import mongoose from 'mongoose';
import  cors from 'cors';
import 'dotenv/config';
import { connectDB } from './config/connectDB.js';
import router from './routes/CardRoute.js';
import BaseSetRouter from './routes/BaseSetRoute.js';
import { UserRouter } from './routes/UserRoute.js';

connectDB();

const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());

app.use('/api/v1',router)

app.use('/api/v1',BaseSetRouter)

app.use('/api/v1',UserRouter)


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});