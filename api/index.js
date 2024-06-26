import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());


/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
const MONGO_URL = process.env.MONGO_URL;

mongoose
    .connect(MONGO_URL)
    .then(async () => {
        app.listen(PORT, () => console.log(`Server Listening on Port: ${PORT}`));
        console.log('MongoDB Connection Successful')
    })
    .catch((error) => console.log(`${error} did not connect`));

/* ROUTES */
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

/* MIDDLEWARE */