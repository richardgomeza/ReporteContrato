import React, { useState } from 'react'

//function Estado() {
export const Estado = () => {
    
    const [contador, setContador] = useState(0)

    const incrementar = () => {
        setContador(contador + 1)
    }
    
    const decrementar = () => {
        setContador(contador - 1)
    }

    return (
        <div className='container-fluid'>
            <h2> La temperatura es {contador} grados C°.
            </h2>
            <p>
                {
                    contador > 21 ? 'Hace Calor' : 'Hace Frio'
                }
            </p>

            <button className="btn btn-success btn-block" onClick={incrementar}>Incrementar</button>
            <button className="btn btn-success btn-warning" onClick={decrementar}>Decrementar</button>
        </div>
    )
}

export default Estado   



    


