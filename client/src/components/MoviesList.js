import {useState} from "react";
import MovieItem from "./MovieItem";
import "./../css/Movies.css"

export default ({moviesList}) => {

    const [searchField, setSearchField] = useState("");

    const handleChange = e => {
        setSearchField(e.target.value);
    };

    const filteredFilms = moviesList.filter(
        person => {
            return (
                person
                    .title
                    .toLowerCase()
                    .includes(searchField.toLowerCase())
            );
        }
    );

    return (
        <div>
            <input
                className="searchTerm"
                type="search"
                placeholder="Search Movie"
                onChange={handleChange}
            />
            <div className="grid"><MovieItem moviesList={filteredFilms}/></div>
        </div>
    )
}