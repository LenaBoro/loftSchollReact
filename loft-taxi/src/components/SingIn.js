import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";

import '../SingIn.scss';
import SingInForm from './SingInForm'

//
function SingIn(props) {
    return (
        <div>
            <h1 className="h1">Sign in</h1>
            <SingInForm  onSubmit={props.handlerSubmitForm}/>
        </div>
    );
}
SingIn.propTypes = {
    props: PropTypes.func
};

export default SingIn;
