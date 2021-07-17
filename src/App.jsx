// import logo from './logo.svg';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Cantidades from './components/Cantidades.jsx';
import Contratos from './components/Contratos.jsx';
import Login from './components/Login/index.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link

} from 'react-router-dom'

function App() {
  return (
    // <div className="App" style={{
    //   '--color-1': '#F2F2F8',
    //   '--color-2': '#949497',
    //   background: `
    //     linear-gradient(
    //       170deg,
    //       var(--color-1),
    //       var(--color-2) 80%
    //     )
    //   `,

    //   // Unrelated styles:
    //   color: 'white',
    //   textAlign: 'center',
    // }}>
    //   <Header></Header>
    //   <div>
    //     <a href="">Pequeña <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>vista</a>
    //   </div>
    //   <Footer></Footer>
    // </div>


    //Dentro de el componente router se reenderizaran todos los demas componentes
    //Primer ejercicio

    // <Router>
    //   <Link to="/inicio"> Inicio</Link>
    //   <Link to="/"> Base</Link>
    //   {/* dentro de este switch se le indicara que para esta ruta con esta url cargas este contenido */}
    //   <Switch>
    //     <Route exact path='/'>

    //       <Base />
    //     </Route>
    //     {/* <Route path='/inicio/:nombre'> */}
    //     <Route path='/inicio/:nombre/:id/:edad'>
    //       <Inicio />

    //     </Route>

    //   </Switch>

    // </Router>


    <Router>

      {/* <Link to="/">Login</Link> */}

      <Switch>
        
        <Route exact path="/footer">
        <div className="App" style={{
          '--color-1': '#F2F2F8',
          '--color-2': '#949497',
          background: `
            linear-gradient(
              170deg,
              var(--color-1),
              var(--color-2) 80%
            )
          `,
          // Unrelated styles:
          color: 'white',
          textAlign: 'center',
        }}>
          <Header></Header>
          <div>
            <span>Pequeña <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>vista</span>
          </div>
          <Footer></Footer>
        </div>
        </Route>

        <Route path="/contratos">
          <div style={{
            '--color-1': '#F2F2F8',
            '--color-2': '#949497',
            background: `
              linear-gradient(
                170deg,
                var(--color-1),
                var(--color-2) 80%
              )
            `,

            // Unrelated styles:
            color: 'white',
            textAlign: 'center',
          }}>
            <Header></Header>
            <Contratos />
            <Footer></Footer>
          </div>
        </Route>

        <Route path="/vistacontrato">
        <div style={{
            '--color-1': '#F2F2F8',
            '--color-2': '#949497',
            background: `
              linear-gradient(
                170deg,
                var(--color-1),
                var(--color-2) 80%
              )
            `,
            // Unrelated styles:
            color: 'white',
            textAlign: 'center',
          }}>
            <Header></Header>
            <Cantidades />
            <Footer></Footer>
          </div>
        </Route>

        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/">
          <Login />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
