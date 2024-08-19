import {SET_FAVORITE} from '../actions/moviesAction';

export function favoritesReducer(state = {favorites: []}, action) {
    switch (action.type) {
        case SET_FAVORITE:
            const clonedState = structuredClone(state.favorites);
            clonedState.push(action.payload);
            return {
                ...state,
                favorites: clonedState
            }
        default:
            return state;
    }
}