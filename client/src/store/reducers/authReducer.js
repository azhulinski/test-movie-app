import {SET_AUTH} from '../actions/authAction';

export function authReducer(state = {token: ""}, action) {

    switch(action.type) {
        case SET_AUTH: {
            return {
                token: action.payload
            }
        }
        default:
            return state;
    }
}