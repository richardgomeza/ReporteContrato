// eslint-disable-next-line
import {combineReducers} from 'redux'
import axios from 'axios';
import {obtenerContratosAccion} from './contratosDuck';
import jwt_decode from "jwt-decode";
import swal from 'sweetalert';
// Constantes
// const usuario = {
//     array:  []
// }

// Type
// const GET_obtenerUsuario_EXITO = 'GET_obtenerUsuario_EXITO'
const USER_LOADING = "USER_LOADING";
const SET_CURRENT_USER = "SET_CURRENT_USER";
const GET_ERRORS = "GET_ERRORS";


// Reducer
const isEmpty = require("is-empty");
// export function userReducer(state = initialStateReducerLogin, action) {
//     switch (action.type) {
//         case GET_ERRORS:
//             return action.payload;
//         default:
//             return state;
//     }
// }
const initialStateActionLogin = {
    isAuthenticated: false,
    user: {},
    loading: false
};
export default function obtenerUsuarioAccion(state = initialStateActionLogin, action) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
        case USER_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_ERRORS:
            return action.payload;
        default:
            return state;
    }
}
// export default {
//     auth: obtenerUsuarioAccion
// };

// Acciones

export const setAuthToken = token => {
    if (token) {
    // Apply authorization token to every request if logged in
        axios.defaults.headers.common["Authorization"] = token;
        console.log(axios.defaults.headers)
        axios.defaults.headers.common["token"] = token;
    } else {
    // Delete auth header
        delete axios.defaults.headers.common["Authorization"];
    }
};

// Login - get user token
export const loginUser = (userData) => (dispatch) => {
    axios
    .post("/api/users/login", userData)
    .then((res) => {
        // Save to localStorage
        // Set token to localStorage
        const { token } = res.data;
        localStorage.setItem("jwtToken", token);
        // Set token to Auth header
        setAuthToken(token);
        // Decode token to get user data
        const decoded = jwt_decode(token);
        // Set current user
        localStorage.setItem('user',decoded);
        // console.log(setCurrentUser(decoded));
        if(token){
            swal("Bienvenido!", "Has ingresado correctamente!", "success").then(function(){
                dispatch(obtenerContratosAccion());
                window.location = '/contratos';
                

            });
            // this.$router.push('/contratos');
            return 'done'

        }
    })
    .catch((err) =>
        dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
        })
    );
};
// Set logged in user
export const setCurrentUser = (decoded) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded,
    };
};
// User loading
export const setUserLoading = () => {
    return {
        type: USER_LOADING,
    };
};
// Log user out
export const logoutUser = () => (dispatch) => {
    // Remove token from local storage
    localStorage.removeItem("jwtToken");
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to empty object {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
};