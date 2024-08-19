import '../css/Forms.css';
import {useState} from 'react';
import {signUp} from "../store/api/auth";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

export default () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = event => {
        event.preventDefault();
        dispatch(signUp(email, password));
        navigate("/", {replace: true});

    };

    return (
        <div>
            <form className="login-form" onSubmit={onSubmit}>
                <div className="form-control">
                    <label>Email Address</label>
                    <input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="email"
                    />
                </div>
                <div className="form-control">
                    <label>Password</label>
                    <input
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                        className="password"
                    />
                </div>
                <button className="btn">Sign Up</button>
            </form>
        </div>
    );
};
