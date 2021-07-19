// import logo from '../logo.svg';
// import Logo_ from './logo.png';
// console.log(Logo_); 
// const logo = require('./logo.png');
import './Header.css'

function Header() {
  return (
    <div className="container" >
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <span className="d-flex align-items-center  me-md-auto text-decoration-none docs-creator">
          <img src={process.env.PUBLIC_URL + '/logo.png'} id='logo' alt="logo" />
            <span id='titleHeader' className="fs-4">CONSTRUCTORA<br/>SOSA & CÍA S.A.</span>
        </span>
        <span className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-#040D5C text-decoration-none docs-creator">
            <span className="fs-4" id='bienvenida'>Hola <br/> "[NAME]"</span>
        </span>
        <ul className="nav nav-pills d-flex align-items-center">
            {/* <li className="nav-item"><a href="#" className="nav-link active docs-creator" aria-current="page">Home</a></li> */}
            <li className="nav-item"><a href="/contratos" id="navbar" className="nav-link docs-creator">Mis contratos</a></li>
            <li className="nav-item"><a href="/contratos/1" id="navbar" className="nav-link docs-creator">Nuevo Contrato</a></li>
            <li className="nav-item"><a href="/" id="navbar" className="nav-link docs-creator">Salir</a></li>
        </ul>
        </header>
    </div>
    
  );
}

export default Header;
