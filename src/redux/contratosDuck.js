import modelo from './ContratosProvisionales.js'
// eslint-disable-next-line
import axios from 'axios'
// Constantes
const contratos = {
    array:  []
}

// Type
const GET_obtenerContratos_EXITO = 'GET_obtenerContratos_EXITO'

// Reducer
export default function contratosReduce(state = contratos ,action){
    switch (action.type) {
        case GET_obtenerContratos_EXITO :
            return {...state,array:action.payload}
    
        default:
            return state
    }
}
// Acciones
export const obtenerContratosAccion = () => async (dispatch, getState) => {
    try {
        const res = modelo;
        dispatch({
            type: GET_obtenerContratos_EXITO,
            payload: res
        })
        // const res = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20');
        // dispatch({
        //     type: GET_obtenerContratos_EXITO,
        //     payload: res.data.results
        // })
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}
