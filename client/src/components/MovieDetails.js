import {NavLink, useParams} from "react-router-dom";
import {useSelector} from "react-redux";

export default () => {

    const params = useParams()

    const movie = useSelector(state => state.moviesReducer?.movies).find(movie => movie.id === params.id);

    return <div className="grid">
        <main className="centered">
            <h1 className="movie__title">{movie.title}</h1>
            <hr/>
            <div className="detailed__image">
                <img src={`http://localhost:3000/images/${movie.image}`} alt="movie poster"/>
            </div>
            <div className="card__content">
                <h1 className="movie__director">
                    director: {movie.director}</h1>
            </div>
            <div className="card__content">
                <h1 className="movie__actors">
                    actors: {movie.actors}</h1>
            </div>
            <div className="movie__description">
                description: {movie.description}
            </div>
            <div className="movie__description">
                genre: {movie.genre}
            </div>
            <div className="movie__description">
                rating: {movie.rating}
            </div>
            <div className="movie__description">
                release date: {movie.releaseDate.split("T")[0]}
            </div>
            <div>
                <NavLink to={`/edit/${movie.id}`} className="btn">Edit</NavLink>
            </div>
        </main>

    </div>
}