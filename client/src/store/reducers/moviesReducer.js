import {FETCH_MOVIES, SET_MOVIE} from '../actions/moviesAction';

export function moviesReducer(state = {movies: []}, action) {
    switch (action.type) {
        case FETCH_MOVIES:
            return {
                ...state,
                movies: action.payload
            };
        case SET_MOVIE:
            return {
                ...state,
                movies: action.payload
            }
        default:
            return state;
    }
}