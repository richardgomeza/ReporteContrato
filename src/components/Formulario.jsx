import React, {useState} from 'react'

const Formulario = () => {

    const [nombre, setNombre] = useState('')
    const [edad, setEdad] = useState('')

    const validar = (event) => {
        
        event.preventDefault()
        console.log('pulsado el boton')
        
        if (!nombre.trim()) {
            console.log('El nombre esta vacio')
            return
        }
        if(!edad.trim()){
            console.log('La edad esta vacia')
            return
        }
    }
    return (
        <div className="container">
            <form 
                onSubmit={validar}   
                className="form-groups">

                <input
                    placeholder='Entra nombre'
                    className='form-control mb-3'
                    type='text'
                    onChange={(e) => { setNombre(e.target.value) }}
                    />           
                                
                <input
                    placeholder='Entra edad'
                    className='form-control mb-3'
                    type='text'
                    onChange={(e) => { setEdad(e.target.value) }}
                    />

                <input
                    className='btn btn-info btn-block mb-3'
                    type='submit'
                    />
            </form>
            
        </div>
    )
}

export default Formulario