import React from "react";
import './Login.scss';
// page
function Login() {
    return (
        <div className="Login">
            <h1 className="h1">Login page</h1>
            <LoginForm/>
        </div>
    );
}

export default Login;

// form
class LoginForm extends React.Component {
    handleSubmit=(e)=>{
        console.log(e.target)
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input name="firstName" type="text" />
                </label>
                <label>
                    Surname:
                    <input name="lastName" type="text" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}