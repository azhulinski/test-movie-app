import {setAuth} from "../actions/authAction";

export const signIn = (email, password) => dispatch => {

    fetch('http://localhost:3000/api/users/signin', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
    })
        .then(resData => resData.json())
        .then(res => {
            sessionStorage.setItem('token', res.token);
            // sessionStorage.setItem('userId', res.userId);
            dispatch(setAuth(res.token));
        }).catch(err => console.log(err));
}

export const signUp = (email, password) => dispatch => {

    fetch('http://localhost:3000/api/users/signup', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
    })
        .then(resData => resData.json())
        .then(res => {
            dispatch(setAuth(res.token));
        }).catch(err => console.log(err));
}

export const signOut = () => dispatch => {
    fetch('http://localhost:3000/api/users/signout', {
        method: 'POST'
    })
        .then(res => {
            dispatch(setAuth(""));
        }).catch(err => console.log(err));
}
