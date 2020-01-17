import React from 'react';
import Profile from './Profile';
import Map from './Map';
import Login from './Login';
import SingIn from './SingIn';
import Header from './Header';

import './App.scss';

// routing
const pages = {
    profile: {pageComponent: <Profile/>, nameLink: "Profile", nameId:"profile"},
    map: {pageComponent: <Map/>, nameLink: "Map",nameId:"map"},
    login: {pageComponent: <Login/>, nameLink: "Login", nameId:"login"},
    singin: {pageComponent: <SingIn/>, nameLink: "Sing In", nameId:"singin"}
};

//parent class
export default class App extends React.Component {
    constructor() {
        super();
        this.state = {currentPage: pages.profile.pageComponent};
        this.handleHeader = this.handleHeader.bind(this)
    }

    handleHeader(e) {
        let current = e.target.attributes.getNamedItem('data-link').value;
        this.setState({currentPage: pages[current].pageComponent})
    }

    render() {
        return (
            <div className="container">
                <Header changePage={this.handleHeader} list={pages}/>
                {this.state.currentPage}
            </div>
        )
    }
}

