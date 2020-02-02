import React from "react";
import '../scss/Profile.scss';
import {useDispatch} from 'react-redux'

const Profile=()=> {
    const dispatch = useDispatch();
    return (
        <div>
            <h1 className="h1">Profile page</h1>
            <button onClick={
                () => dispatch({type: "LOGOUT"})}>
                Logout
            </button>
        </div>
    );
}

export default Profile;