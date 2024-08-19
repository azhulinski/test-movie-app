export const FETCH_MOVIES = 'FETCH_MOVIES';
export const SET_MOVIE = 'SET_MOVIE';
export const SET_FAVORITE = 'SET_FAVORITE'

export function fetchMovies(movies) {
    return {
        type: FETCH_MOVIES,
        payload: movies
    }
}

export function addMovie(movie) {
    return {
        type: SET_MOVIE,
        payload: movie
    }
}

export function addToFavorites(favorite) {
    return {
        type: SET_FAVORITE,
        payload: favorite
    }
}