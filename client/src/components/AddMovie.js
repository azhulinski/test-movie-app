import "../css/Forms.css"
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addOneMovie} from "../store/api/movies";
import {useNavigate, useParams} from "react-router-dom";

export default () => {
    const params = useParams();
    const storedMovie = useSelector(state => state.moviesReducer?.movies).find(movie => movie.id === params.id);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        title: storedMovie?.title || "",
        description: storedMovie?.description || "",
        director: storedMovie?.director || "",
        actors: storedMovie?.actors || [],
        genre: storedMovie?.genre || "",
        rating: storedMovie?.rating || 0,
        releaseDate: "",
        image: "",
    })

    const handleChange = event => {
        const {value, name} = event.target;
        setFormData({...formData, [name]: value});
    }

    const handleFileChange = event => {
        const file = event.target.files[0];

        setFormData({...formData, image: file});
    };

    const onSubmit = event => {

        event.preventDefault();
        dispatch(addOneMovie(formData, moviesList))
        navigate("/");
    }

    return (
        <div>
            <form className="movie-form" onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" value={formData.title} onChange={handleChange}/>
                </div>
                <div className="form-control">
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" id="description" value={formData.description}
                           onChange={handleChange}/>
                </div>
                <div className="form-control">
                    <label htmlFor="title">Director</label>
                    <input type="text" name="director" id="director" value={formData.director} onChange={handleChange}/>
                </div>
                <div className="form-control">
                    <label htmlFor="actors">Actors</label>
                    <input type="text" name="actors" id="actors" value={formData.actors} onChange={handleChange}/>
                </div>
                <div className="form-control">
                    <label htmlFor="genre">Genre</label>
                    <input type="text" name="genre" id="genre" value={formData.genre} onChange={handleChange}/>
                </div>
                <div className="form-control">
                    <label htmlFor="rating">Rating</label>
                    <input type="number" name="rating" id="rating" value={formData.rating} onChange={handleChange}/>
                </div>
                <div className="form-control">
                    <label htmlFor="releaseDate">Release Date</label>
                    <input type="date" name="releaseDate" id="release" onChange={handleChange}/>
                </div>
                <div className="file-upload">
                    <h3>Click box to upload</h3>
                    <input type="file" name="image" id="image" onChange={handleFileChange}/>
                </div>
                <p/>
                <button className="btn">Create</button>
            </form>
        </div>
    )
}