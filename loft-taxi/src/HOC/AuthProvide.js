import React, {useState} from "react";

//HOC auth
export function AuthProvide(WrappedComponent, LoginPage) {
    return class extends React.Component{
        render(){
            return this.props.isLoggedIn ?
                <WrappedComponent {...this.props}/>:<LoginPage/>
        }
    }
}
