import React from "react";
import '../scss/Header.scss';

// child component
function Header(props) {
    return (
        <header className="header">
            <nav className="header-nav">
                {
                    Object.values(props.list).map(li =>
                        <li key={li.nameId} onClick={props.handlerHeaderChangePage}
                            data-link={li.nameId}>{li.nameLink}</li>
                    )
                }
            </nav>
        </header>
    )
}

export default Header;