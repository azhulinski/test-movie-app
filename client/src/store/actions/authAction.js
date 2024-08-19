export const SET_AUTH = "SET_AUTH";

export function setAuth(token) {
    return {
        type: SET_AUTH,
        payload: token
    };
}