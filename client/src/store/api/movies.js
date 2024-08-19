import {addMovie, fetchMovies} from "../actions/moviesAction";
import axios from "axios";

export const loadMovies = () => dispatch => {
    fetch('http://localhost:3000/api/movies', {
        method: 'GET'
    })
        .then(resData => resData.json())
        .then(res => {
            dispatch(fetchMovies(res));
        }).catch(err => console.log(err));
}

export const addOneMovie = (movie, {moviesList}) => dispatch => {
    axios.post('http://localhost:3000/api/movies', movie, {
        mode: 'no-cors',
        headers: {'Content-Type': 'multipart/form-data'}
    })
        .then(res => {
                const clonedList = structuredClone(moviesList);
                clonedList.push(res.data);
                dispatch(addMovie(clonedList));
            }
        )
}

export const getOneMovie = id => {
    fetch(`http://localhost:3000/api/movies/${id}`, {
        method: 'GET'
    }).then(resData => resData.json())
        .then(res => {
                return res;
            }
        )
        .catch(err => console.log(err));
}

export const deleteMovie = (id, {moviesList}) => dispatch => {
    fetch(`http://localhost:3000/api/movies/${id}`, {
        method: 'DELETE'
    }).then(_ => {
        const clonedList = structuredClone(moviesList).filter(movie => movie.id !== id);
        dispatch(addMovie(clonedList));
    }).catch(err => console.log(err));
}