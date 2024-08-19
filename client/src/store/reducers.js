import {combineReducers} from "@reduxjs/toolkit";
import {authReducer} from "./reducers/authReducer";
import {moviesReducer} from "./reducers/moviesReducer";
import {favoritesReducer} from "./reducers/favoritesReducer";

const rootReducer = combineReducers({
    authReducer,
    moviesReducer,
    favoritesReducer
});

export default rootReducer;