import Header from "./components/Header.js";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import MoviesList from "./components/MoviesList";
import {Route, Routes} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import SignOut from "./components/SignOut";
import AddMovie from "./components/AddMovie";
import MovieDetails from "./components/MovieDetails";
import {useEffect} from "react";
import {loadMovies} from "./store/api/movies";
import DeleteMovie from "./components/DeleteMovie";
import FavoriteMovies from "./components/FavoriteMovies";

let isInitial = true

function App() {

    // @ts-ignore
    const movies = useSelector(state => state.moviesReducer?.movies);

    const dispatch = useDispatch();
    const authToken = sessionStorage.getItem('token')

    useEffect(() => {

        if (isInitial) {
            // @ts-ignore
            dispatch(loadMovies())
            isInitial = false;
        }
    }, [movies])

    const routes = (
        authToken
            ? <Routes>
                <Route path="/" element={<MoviesList moviesList={movies}/>}/>
                <Route path="/addmovie" element={<AddMovie/>}/>
                <Route path="/favorites" element={<FavoriteMovies />}/>
                <Route path="/edit/:id" element={<AddMovie/>}/>
                <Route path="/:id" element={<MovieDetails/>}/>
                <Route path="/delete/:id" element={<DeleteMovie moviesList={movies}/>}/>
                <Route path="/signout" element={<SignOut/>}/>
            </Routes>
            : <Routes>
                <Route path="/" element={<SignIn/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/signin" element={<SignIn/>}/>
            </Routes>
    )

    return (
        <div>
            <Header authToken={authToken}/>
            {routes}
        </div>

    )
}

export default App;
