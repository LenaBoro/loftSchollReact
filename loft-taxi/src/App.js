import React, {useState, useEffect} from 'react';
import Profile from './Profile';
import Map from './Map';
import Login from './Login';
import SingIn from './SingIn';
import Header from './Header';

import './App.scss';


// routing
const pages = {
    profile: {pageComponent: <Profile/>, nameLink: "Profile", nameId: "profile"},
    map: {pageComponent: <Map/>, nameLink: "Map", nameId: "map"},
    login: {pageComponent: <Login/>, nameLink: "Login", nameId: "login"},
    singin: {pageComponent: <SingIn/>, nameLink: "Sing In", nameId: "singin"}
};

//parent class
function App() {

    const [currentPage, setCurrentPage] = useState(<Profile/>);

    // menu
    const handlerHeaderChangePage = (e) => {
        let checkPage = e.target.attributes.getNamedItem('data-link').value;
        setCurrentPage(pages[checkPage].pageComponent);
    };
    // submit form ??? changed page after submit
    // const [submitForm, setSubmitForm] = useState('');
    // const handlerSubmitForm = (e) => {
    //
    //     setCurrentPage(<Map/>);
    // };

    return (
        <div className="container">
            <Header handlerHeaderChangePage={handlerHeaderChangePage} list={pages}/>
            {currentPage}
        </div>
    )
}

export default App;
