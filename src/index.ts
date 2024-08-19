import express from "express";
import mongoose from 'mongoose';
import {json} from 'body-parser'
import {moviesRouter} from "./routes/movies-router";
import {authRouter} from "./routes/auth-router";
import {currentUser} from "./middlewares/current-user";
import cookieSession from "cookie-session";

import * as path from "node:path";
import cors from "cors";
import multer from "multer";

const app = express();
const MONGODB_URI = `mongodb://localhost:27017/movies`;

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})

app.use(multer({
    storage: fileStorage
}).single('image'));
app.use("/images", express.static('images'));

app.set('trust proxy', true);
app.use(json());
app.use(cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test'
}));

app.use(currentUser)

app.use(cors());
app.use(moviesRouter);
app.use(authRouter);

app.all('*', async (req, res) => {
    res.sendStatus(404);
});

mongoose.connect(MONGODB_URI)
    .then(_ => {
        console.log('connected to MongoDB...');
        app.listen(3000, () => {
            console.log('Listening on port 3000!');
        });
    })
