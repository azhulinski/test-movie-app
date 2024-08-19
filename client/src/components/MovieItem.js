import "../css/Movies.css"
import {NavLink} from "react-router-dom";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addToFavorites} from "../store/actions/moviesAction";

export default ({moviesList}) => {

    const dispatch = useDispatch();
    const [checked, setChecked] = useState(true);

    const handleChange = (id) => {
        let clonedFilms
        if (checked) {
            clonedFilms = moviesList.find(film => film.id === id)
        } else {
            clonedFilms = moviesList.filter(film => film.id !== id)
        }
        dispatch(addToFavorites(clonedFilms))
        setChecked(!checked);
    }

    return (
        moviesList.length !== 0 && moviesList.map(movie => {
            return (
                <div key={movie.id}>
                    <article className="card movie-item">
                        <header className="card__header">
                            <h1 className="movie__title">{movie.title}</h1>
                            <input className="star"
                                   type="checkbox"
                                   title="add to favorites"
                                   checked={checked}
                                   onClick={event => handleChange(movie.id)}/>
                        </header>
                        <div className="card__image">
                            <img
                                src={`http://localhost:3000/images/${movie.image}`}
                                alt="movie poster"/>
                        </div>
                        <div className="card__content">
                            <h2 className="movie__director"> by {movie.director}</h2>
                            <p className="movie__description">{movie.description}</p>
                        </div>
                        <div className="card__actions">
                            <NavLink to={movie.id} className="btn">Details</NavLink>
                            <NavLink to={`/delete/${movie.id}`} className="btn">Delete</NavLink>
                        </div>
                    </article>
                </div>
            )
        })

    )
}