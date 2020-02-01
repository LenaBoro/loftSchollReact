import React, {useState} from "react";

//HOC auth
export function AuthProvide(WrappedComponent) {
    return class extends React.Component{
        render(){
            return <WrappedComponent {...props}/>
        }
    }
}
