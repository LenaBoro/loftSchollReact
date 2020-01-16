import React from 'react';

import './App.css';


const pages = {
    profile: <Profile/>,
    map: <Map/>
};
export default class App extends React.Component {
    constructor() {
        super();
        this.state = {currentPage: pages.profile};
        this.handleHeader = this.handleHeader.bind(this)
    }

    handleHeader(e) {
        let current = e.target.textContent;
        this.setState({currentPage: pages[current]})

    }

    render() {
        return (
            <div>
                <Header func={this.handleHeader}/>
                <h1>page</h1>
                {this.state.currentPage}
            </div>
        )
    }
}

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <header>
                <nav>
                    <button onClick={this.props.func}>profile</button>
                    <button onClick={this.props.func}>map</button>
                    <button onClick={this.props.func}>login</button>
                </nav>
            </header>
        )
    }
}

function Map() {
    return (
        <div>
            Map gape
        </div>
    );
}

function Profile() {
    return (
        <div>
            Profile gape
        </div>
    );
}
