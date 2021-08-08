import { combineReducers } from "redux";
import {obtenerUsuarioAccion, userReducer} from './Ducks/userDuck';
export default combineReducers({
    auth: obtenerUsuarioAccion,
    // auth2: initialStateActionLogin,
    errors: userReducer
});