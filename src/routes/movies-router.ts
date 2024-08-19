import express from "express";
import {body} from "express-validator";
import {addMovie, deleteMovie, index, updateMovie} from "../controllers/movies-controller";
import {validateRequest} from "../middlewares/validate-request";
import mongoose from "mongoose";

const router = express.Router();

router.get('/api/movies', index);

router.post('/api/movies',
    [
        body('title')
            .notEmpty()
            .withMessage('Title is required'),
        body('description')
            .notEmpty()
            .withMessage('Description is required'),
        body('director')
            .notEmpty()
            .withMessage('Director field is required'),
        body('genre')
            .notEmpty()
            .withMessage('Genre field is required'),
        body('rating')
            .notEmpty()
            .isAlphanumeric()
            .withMessage('rating field is required'),
    ],
    validateRequest,
    addMovie);

router.put('/api/movies/:id',
    [
        body('title')
            .notEmpty()
            .withMessage('Title is required'),
        body('description')
            .notEmpty()
            .withMessage('Description is required'),
        body('director')
            .notEmpty()
            .withMessage('Director field is required'),
        body('genre')
            .notEmpty()
            .withMessage('Genre field is required'),
        body('rating')
            .notEmpty()
            .isAlphanumeric()
            .withMessage('rating field is required'),
    ],
    validateRequest,
    updateMovie)

router.delete('/api/movies/:id',
    body('id')
        .custom((input: string) => mongoose.Types.ObjectId.isValid(input))
        .withMessage('id should be valid'),
    deleteMovie)

export {router as moviesRouter};