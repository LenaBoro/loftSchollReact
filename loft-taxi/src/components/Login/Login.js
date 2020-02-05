import  React, {Component, useState} from "react";
import {Redirect} from 'react-router-dom';
import PropTypes from "prop-types";
import LoginForm from './LoginForm';
//style
import '../../scss/Login.scss';


let Login = (props) =>
        <LoginForm />

export default Login;
