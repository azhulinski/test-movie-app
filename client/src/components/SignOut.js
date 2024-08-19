import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {signOut} from "../store/api/auth";

export default () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(signOut())
        navigate("/", {replace: true});
    }, []);
    return <div/>

}