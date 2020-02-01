import React from 'react';
import {Link, Route} from 'react-router-dom';
// pages
import Profile from '../Profile';
import Map from '../Map';
import Login from '../Login/Login';

class SimpleRouter extends React.Component {
    render() {
        return (
            <div className="header">
                <Link to="/profile">Profile</Link>
                <Link to="/map">Map</Link>
                <Link to="/login">Login</Link>
                <hr />
                <Route path="/profile" component={Profile} />
                <Route path="/map" component={Map} />
                <Route path="/login" component={Login} />
            </div>
        );
    }
}

export default SimpleRouter;