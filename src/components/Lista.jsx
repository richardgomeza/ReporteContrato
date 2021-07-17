import React from 'react'
//Este componente haae un listado de nombres de una lista
//Para iterar por un arreglo se utiliza el MAP
const lista = () => {

    const names = ["Pedro", "Juan", "German"]

    return (
        <div>
            <h1>Lista de Nombres:</h1>
            <ul>
                {names.map((name, index) =>
                <li key={index}>{index} - {name}</li>
                )} 
            </ul>
                       
        </div>
    )
}

export default lista



