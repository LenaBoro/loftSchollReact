import React from "react";

// child class
export  default class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <header>
                <nav>
                    <button onClick={this.props.changePage}>profile</button>
                    <button onClick={this.props.changePage}>map</button>
                    <button onClick={this.props.changePage}>login</button>
                    <button onClick={this.props.changePage}>singin</button>

                </nav>
            </header>
        )
    }
}
