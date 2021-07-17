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
                        <a href='/contratos' className='start1'>Iniciar sesión</a>
                    </div>
                </div>
            </div>
            <footer class="pt-4 my-md-5 border-top">
                <h4 id="titleFooterL"><b>Equipo de trabajo</b></h4>
                <div class="col" style={{marginBottom:'2.292vw'}}>
                    <div class="container">
                        <div class="row justify-content-md-center">
                            <div class="col">
                            </div>
                            <div class="col">
                            <span class="text-decoration-none docs-creator" id="namesL">Richard Gomez</span>
                            </div>
                            <div class="col">
                            </div>
                            <div class="col">
                            <span class="text-decoration-none docs-creator" id="namesL">David Sosa</span>
                            </div>
                            <div class="col">
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row justify-content-md-center">
                            <div class="col">
                            <span class="text-decoration-none docs-creator" id="namesL">Jose Delado</span>
                            </div>
                            <div class="col">
                            </div>
                            <div class="col">
                            <span class="text-decoration-none docs-creator" id="namesL">Sandra Palacio</span>
                            </div>
                            <div class="col">
                            </div>
                            <div class="col">
                            <span class="text-decoration-none docs-creator" id="namesL" >Pablo Romero</span>
                            </div>
                        </div>
                    </div>
                </div>
            <div class="row border-top" style={{paddingTop:'2.292vw'}}>
            {/* <div class="col-12 col-md">
            </div> */}
            <div class="col-6 col-md text-#FFFFFF">
                <h4 id="titleFooterL"><b>Recursos</b></h4>
                <ul class="list-unstyled text-small" id="namesL">
                <li class="mb-1"><a class="text-decoration-none docs-creator" href="#" style={{color:'#FFFFFF'}}>Repositorio</a></li>
                </ul>
            </div>
            <div class="col-6 col-md">
                <h5 id="titleFooterL"><b>Acerca de nosotros</b></h5>
                <ul class="list-unstyled text-small">
                <li class="mb-1"><i id="namesL" class="link-#FFFFFF text-decoration-none docs-creator">Somos un grupo de estudiantes inspirados en resolver las necesidades de empresas. Para este proyecto decidimos crear un sistema de contratos.</i></li>
                </ul>
            </div>
            </div>
            <div class="container border-top border-bottom">
                <i class="col-4 col-md">Derechos reservados &copy; 2021</i>
            </div>
            </footer>
        </div>
    )
};

export default index;