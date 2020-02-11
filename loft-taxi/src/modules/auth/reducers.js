import {
    fetchLogin,
    fetchSingIn,
    fetchLogout,
    fetchLoginSuccess,
    fetchLoginFail
} from './actions';

const initialState = {
    isLoggedIn: false,
    emailUser: '',
    passwordUser: '',
    nameUser: '',
    surnameUser: '',
    token: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case fetchLogin.toString():
            return {
                ...state,
                emailUser: action.payload,
                passwordUser: action.payload,
                token: action.payload,
                isLoggedIn: true,

            };
        case fetchLoginSuccess.toString():
            console.log('login succes');
            return {
                ...state,
            };
        case fetchLogout.toString():
            return {
                ...state,
                isLoggedIn: false,
            };
        case 'LOGIN_FAIL':
            return {
                ...state,
            };
        case fetchSingIn.toString():
            return {
                ...state,
                isLoggedIn: true,
                emailUser: action.payload,
                nameUser: action.payload,
                surnameUser: action.payload,
                passwordUser: action.payload,
                token: action.payload
            };

        default:
            return state;
    }
}
