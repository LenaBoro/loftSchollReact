import React, {useState, useEffect, useContext, createContext} from "react";

export const authContext = React.createContext();


export const ProvideAuth = ({children}) => {
    const [isLoggedIn, setInLoggedIn] = useState(false);

    const login = (email, password) => {
        return
        setInLoggedIn(true);
    };

    const logout = () => {
        return
        setInLoggedIn(false);
    };
    useEffect(
        () => {
           console.log(isLoggedIn)
        },
        [isLoggedIn]
    );
    return (
        <authContext.Provider>{children}</authContext.Provider>
)
}