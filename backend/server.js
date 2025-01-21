import express from 'express';
import mongoose from 'mongoose';
import  cors from 'cors';
import 'dotenv/config';
import { connectDB } from './config/connectDB.js';

connectDB();

const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});