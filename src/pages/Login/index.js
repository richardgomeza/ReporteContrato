import React from 'react';
import Titulo from './components/title/title.jsx'
import './index.css'
import Img_1 from '../../assets/images/img_1.jpg'

const index = () => {
    return (
        <div className='container'>
            <div className='title_container'>
                <label className='title_stile'> <Titulo text='CONSTRUCTORA SOSA & COMPAÑIA S.A.'/> </label>
            </div>
            <div className='center'>
                <div className='divimg'> 
                    <img src={Img_1} alt='' className='img_1' />
                </div>
                <div className='inputs'>
                    <div className='grupo1'>
                        <form>
                            <label className='UsuarioLabel'>
                                Usuario
                                <input type='text' name='Usuario' className='inputuser' />
                            </label>
                            <label className="PasswordLabel">
                                Contraseña
                                <input type='text' name='Password' className='inputpassword' />
                            </label>
                        </form>
                    </div>
                    <div className='Start'>
                        <a href='home' className='start1'>Iniciar sesión</a>
                    </div>
                </div>
            </div>
            <div className='footer'>
                <p className='name1'>Sandra M. Palacio H.</p>
                <p className='name2'>David A. Sosa M.</p>
                <p className='name3'>José D. Delgado</p>
                <p className='name4'>Pablo A. Romero L.</p>
                <p className='name5'>Richard A. Gomez A.</p>
            </div>
        </div>
    )
};

export default index;