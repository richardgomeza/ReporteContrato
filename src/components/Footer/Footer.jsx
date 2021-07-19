import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <div class="container">
            <footer class="pt-4 my-md-5 border-top">
                <h4 id="titleFooter"><b>Equipo de trabajo</b></h4>
                <div class="col" style={{marginBottom:'2.292vw'}}>
                    <div class="container">
                        <div class="row justify-content-md-center">
                            <div class="col">
                            </div>
                            <div class="col">
                            <span class="text-decoration-none docs-creator" id="names">Richard Gomez</span>
                            </div>
                            <div class="col">
                            </div>
                            <div class="col">
                            <span class="text-decoration-none docs-creator" id="names">David Sosa</span>
                            </div>
                            <div class="col">
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row justify-content-md-center">
                            <div class="col">
                            <span class="text-decoration-none docs-creator" id="names">Jose Delado</span>
                            </div>
                            <div class="col">
                            </div>
                            <div class="col">
                            <span class="text-decoration-none docs-creator" id="names">Sandra Palacio</span>
                            </div>
                            <div class="col">
                            </div>
                            <div class="col">
                            <span class="text-decoration-none docs-creator" id="names" >Pablo Romero</span>
                            </div>
                        </div>
                    </div>
                </div>
            <div class="row border-top" style={{paddingTop:'2.292vw'}}>
            {/* <div class="col-12 col-md">
            </div> */}
            <div class="col-6 col-md text-#FFFFFF">
                <h4 id="titleFooter"><b>Recursos</b></h4>
                <ul class="list-unstyled text-small" id="names">
                <li class="mb-1"><a class="text-decoration-none docs-creator" href="https://github.com/richardgomeza/ReporteContrato/tree/master" style={{color:'#FFFFFF'}}>Repositorio</a></li>
                </ul>
            </div>
            <div class="col-6 col-md">
                <h5 id="titleFooter"><b>Acerca de nosotros</b></h5>
                <ul class="list-unstyled text-small">
                <li class="mb-1"><i id="names" class="link-#FFFFFF text-decoration-none docs-creator">Somos un grupo de estudiantes inspirados en resolver las necesidades de empresas. Para este proyecto decidimos crear un sistema de contratos.</i></li>
                </ul>
            </div>
            </div>
            <div class="container border-top border-bottom">
                <i class="col-4 col-md">Derechos reservados &copy; 2021</i>
            </div>
            </footer>
        </div>
      
    );
  }
  
  export default Footer;