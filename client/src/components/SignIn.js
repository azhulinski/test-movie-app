import '../css/Forms.css';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {signIn} from "../store/api/auth";
import {useDispatch} from "react-redux";

export default () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = event => {
        event.preventDefault();
        dispatch(signIn(email, password));
        navigate("/");
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
                <button className="btn">Sign In</button>
            </form>
        </div>
    );
};
