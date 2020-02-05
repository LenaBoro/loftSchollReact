import React from "react";
import '../scss/Header.scss';
import Login from "./Login/Login";
import PrivateRoute from "./Routing/PrivateRoute";
import Profile from "./Profile";
import Map from "./Map";
import SingIn from "./SingIn";
import {Route, Link, Switch,} from 'react-router-dom';

// child component
function Header(props) {
    return (
        <header className="header">
            <Link to="/profile">Profile</Link>
            <Link to="/map">Map</Link>
            <Link to="/singin">Sing In</Link>
            <Switch>
                <Route exact path="/login" render={Login}/>
                <Route exact path="/singin" render={SingIn}/>
                <PrivateRoute path="/profile" component={Profile}/>
                <PrivateRoute path="/map" component={Map}/>
            </Switch>
        </header>
    )
}

export default Header;