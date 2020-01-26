import React, {useState, useEffect, useContext} from 'react';

import Profile from './components/Profile';
import Map from './components/Map';
import Login from './components/Login';
import SingIn from './components/SingIn';
import Header from './components/Header';
import Context from './context/Context';

import './App.scss';


//parent class
function App() {
    const [currentPage, setCurrentPage] = useState(<Login/>);
    const [isLoggedIn, setLoggedIn] = useState(false);

    // menu
    const handlerHeaderChangePage = (e) => {
        let checkPage = e.target.dataset.link;
        setCurrentPage(pages[checkPage].pageComponent);
    };

    const login = (email, password) => {
        setLoggedIn(true);
        setCurrentPage(<Profile/>);
    };

    const logout = () => {
        setLoggedIn(false);

    };

    // routing
    //bad practice
    const pages = {
        profile: {pageComponent: <Profile/>, nameLink: "Profile", nameId: "profile"},
        map: {pageComponent: <Map/>, nameLink: "Map", nameId: "map"},
        //login: {pageComponent: <Login {...props}/>, nameLink: "Login", nameId: "login"},

        login: {pageComponent: <Login/>, nameLink: "Login", nameId: "login"},
        // singin: {pageComponent: <SingIn {...props}/>, nameLink: "Sing In", nameId: "singin"}
        singin: {pageComponent: <SingIn />, nameLink: "Sing In", nameId: "singin"}

    };
    return (
        <>
            <Context.Provider
                value={{
                    login: login,
                    logout: logout,
                    isLoggedIn: isLoggedIn,
                    handlerHeaderChangePage: handlerHeaderChangePage
                }}
            >
                {currentPage}
                 </Context.Provider>
        </>
    )
}

export default App;
// {/*<div className="container">*/}
// {/*<link href='https://api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.css' rel='stylesheet' />*/}
//
// {/*<Header handlerHeaderChangePage={handlerHeaderChangePage} list={pages}/>*/}
// {/*{currentPage}*/}
//
// {/*</div>*/}