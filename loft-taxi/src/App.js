import React, {useState, useEffect} from 'react';
import Profile from './Profile';
import Map from './Map';
import Login from './Login';
import SingIn from './SingIn';
import Header from './Header';

import './App.scss';

//parent class
function App() {
    const [currentPage, setCurrentPage] = useState(<Profile/>);

    // menu
    const handlerHeaderChangePage = (e) => {
        let checkPage = e.target.attributes.getNamedItem('data-link').value;
        setCurrentPage(pages[checkPage].pageComponent);
    };
    const handlerSubmitForm = (e) => {
        e.preventDefault();
       setCurrentPage(<Map/>);
    };

    // routing
   //bad practice
    const pages = {
        profile: {pageComponent: <Profile/>, nameLink: "Profile", nameId: "profile"},
        map: {pageComponent: <Map/>, nameLink: "Map", nameId: "map"},
        login: {pageComponent: <Login handlerSubmitForm={handlerSubmitForm}/>, nameLink: "Login", nameId: "login"},
        singin: {pageComponent: <SingIn handlerSubmitForm={handlerSubmitForm}/>, nameLink: "Sing In", nameId: "singin"}
    };
    return (
        <div className="container">
            <Header handlerHeaderChangePage={handlerHeaderChangePage} list={pages}/>
            {currentPage}
        </div>
    )
}

export default App;
