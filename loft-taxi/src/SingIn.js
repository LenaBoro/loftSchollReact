import React, {useState, useEffect} from "react";
import './SingIn.scss'
import Map from './Map'

//
function SingIn(props) {
    return (
        <div>
            <h1 className="h1">Sign in</h1>
            <LoginSingIn />
        </div>
    );
}

export default SingIn;


// form
function LoginSingIn (props){

    return (
            <form>
                <label>
                    Name:
                    <input name="firstName" type="text"/>
                </label>
                <label>
                    Surname:
                    <input name="lastName" type="text"/>
                </label>
                <button>Submit</button>
            </form>
        );
}