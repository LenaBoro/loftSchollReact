import {
    fetchLogin,
    fetchSingIn,
    fetchLogout
} from './actions';

// const initialState = {
//     isLoggedIn: localStorage.getItem('isLoggedIn') || false,
//     emailUser: localStorage.getItem('emailUser') || '',
//     passwordUser: localStorage.getItem('passwordUser') || '',
//     nameUser: localStorage.getItem('nameUser') || '',
//     surnameUser:localStorage.getItem('surname') || '',
//     token: localStorage.getItem('userToken') ||''
// };
const initialState = {
    isLoggedIn: false,
    emailUser: '',
    passwordUser:  '',
    nameUser:  '',
    surnameUser: '',
    token: ''
};
console.log(initialState)
export default (state = initialState, action) => {
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
