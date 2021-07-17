import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Login = () => {

    const [login, setLogin] = useState([])
    const { id } = useParams()

    const obtenerLogin = async () => {


        //dentro de la constante res tengo la respuesta a esta peticion 
        const res = await axios.get(`local`)
        const users = await res.data
        setLogin(users)

    }

    useEffect(() => {


        obtenerLogin()
    })//[] dependencias de useEffect
    return (
        <div>
            <h4>Login</h4>
            <p>Nombre:{usuario.name}</p>
            <p>Email:{usuario.email}</p>
            <small>Telefono:{usuario.phone}</small>
        </div>
    )
}

export default Login