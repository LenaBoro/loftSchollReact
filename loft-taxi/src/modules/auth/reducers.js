import {
    fetchLogin,
    fetchSingIn,
    fetchLogout
} from './actions';

const initialState = {
    isLoggedIn: false,
    emailUser: '',
    passwordUser:  '',
    nameUser:  '',
    surnameUser: '',
    token: ''
};

export default (state = initialState, action) => {
    console.log(state)
    switch (action.type) {
        case fetchLogin.toString():
            return {
                ...state,
                isLoggedIn: true,
                emailUser: action.payload,
                passwordUser: action.payload,
                token: action.payload
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
