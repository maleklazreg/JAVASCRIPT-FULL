import express from 'express';
import dotenv from 'dotenv';
import dbConnect from './config/mongose.config.js';



const app = express();

dotenv.config();

const PORT = process.env.PORT;
dbConnect();


app.listen(PORT, () =>console.log(`Listening on port: ${PORT}`));