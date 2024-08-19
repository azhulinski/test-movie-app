import mongoose = require('mongoose');

interface MovieAttributes {
    title: string;
    description: string;
    director: string;
    actors: string[],
    genre: string,
    rating: number;
    releaseDate: Date;
    image: string | undefined;
}

interface MovieModel extends mongoose.Model<MovieDoc> {
    build(attributes: MovieAttributes): MovieDoc
}

interface MovieDoc extends mongoose.Document {
    title: string;
    description: string;
    director: string;
    actors: [],
    genre: string,
    rating: number;
    releaseDate: Date;
    image: string;
}

const movieSchema = new mongoose.Schema({
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        director: {
            type: String,
            required: true
        },
        actors: {
            type: mongoose.Schema.Types.Array,
            required: true
        },
        genre: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            required: true
        },
        releaseDate: {
            type: mongoose.Schema.Types.Date
        },
        image: {
            type: String
        }
    },
    {
        toJSON: {
            transform(doc, ret) {
                ret.id = ret._id;
                delete ret._id
            }
        }
    }
)

movieSchema.statics.build = (attributes: MovieAttributes) => {
    return new Movie(attributes);
}

const Movie = mongoose.model<MovieDoc, MovieModel>('Movie', movieSchema);

export {Movie}