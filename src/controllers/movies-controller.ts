import {NextFunction, Request, Response} from 'express';
import {Movie} from "../models/movie";
import {NotFoundError} from "../errors/not-found-error";
import {User} from "../models/user";
import {BadRequestError} from "../errors/bad-request-error";

export const index = async (req: Request, res: Response, next: NextFunction) => {
    const movies = await Movie.find({});
    res.status(200).send(movies);
}

export const addMovie = async (req: Request, res: Response, next: NextFunction) => {

    const image = req.file?.filename;
    const {title, description, director, actors, genre, rating, releaseDate} = req.body;
    const movie = Movie.build({title, description, director, actors, genre, rating, releaseDate, image});

    await movie.save();

    res.status(201).send(movie);
}

export const updateMovie = async (req: Request, res: Response, next: NextFunction) => {

    const {title, description, director, actors, genre, rating, releaseDate} = req.body;
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
        throw new NotFoundError('Movie with the given id not found');
    }

    movie.set({
        title, description, director, actors, genre, rating, releaseDate
    })
    await movie.save()

    res.status(200).send(movie);

}

export const deleteMovie = async (req: Request, res: Response, next: NextFunction) => {
    const movie = await Movie.findById(req.params.id);

    if (!movie) {
        throw new NotFoundError('Movie with the given id not found');
    }

    await Movie.deleteOne({_id: req.params.id});

    return res.status(200).json();
}

