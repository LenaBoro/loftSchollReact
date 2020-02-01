import React from "react";
import '../scss/Header.scss';
import SimpleRouting from '../components/Routing/SimpleRouting'

// child component
function Header(props) {
    return (
        <header className="header">
            <nav className="header-nav">
                <SimpleRouting/>
            </nav>
        </header>
    )
}

export default Header;