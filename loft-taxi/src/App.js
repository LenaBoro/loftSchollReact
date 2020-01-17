import React from 'react';
import Profile from './Profile';
import Map from './Map';
import Login from './Login';
import SingIn from './SingIn';
import Header from './Header';

import './App.css';

// routing
const pages = {
    profile: {page: <Profile/>, nameLink: "Profile"},
    map: {page: <Map/>, nameLink: "Map"},
    login: {page: <Login/>, nameLink: "Login"},
    singin: {page: <SingIn/>, nameLink: "Sing In"}
};

//parent class
export default class App extends React.Component {
    constructor() {
        super();
        this.state = {currentPage: pages.profile.page};
        this.handleHeader = this.handleHeader.bind(this)
    }

    handleHeader(e) {
        let current = e.target.textContent;
        this.setState({currentPage: pages[current].page})
    }

    render() {
        return (
            <div>
                <Header changePage={this.handleHeader} list={pages}/>
                {this.state.currentPage}
            </div>
        )
    }
}

