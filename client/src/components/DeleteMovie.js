import {useDispatch} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import {deleteMovie} from "../store/api/movies";

export default (moviesList) => {
    const params = useParams()
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(deleteMovie(params.id, moviesList))
        navigate("/", {replace: true});
    }, []);
    return <div/>
}