import '../css/Header.css'
import {NavLink} from "react-router-dom";

export default ({authToken}) => {
    return (
        authToken ?
            <header className="main-header">
                <nav className="main-header__nav">
                    <ul className="main-header__item-list">
                        <li className="main-header__item"><NavLink to="/">Home</NavLink></li>
                        <li className="main-header__item"><NavLink to="/addmovie">Add Movie</NavLink></li>
                        <li className="main-header__item"><NavLink to="/favorites">Favorites</NavLink></li>
                    </ul>
                    <ul className="main-header__item-list">
                        <li className="main-header__item"><NavLink to="/signout">Sign Out</NavLink></li>
                    </ul>
                </nav>
            </header>
            :
            <header className="main-header">
                <nav className="main-header__nav">
                    <ul className="main-header__item-list">
                        <li className="main-header__item"><NavLink to="/signup">Sign Up</NavLink></li>
                        <li className="main-header__item"><NavLink to="/signin">Sign In</NavLink></li>
                    </ul>
                </nav>
            </header>
    )
}