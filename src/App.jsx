// import logo from './logo.svg';
// eslint-disable-next-line
import React, { Suspense, lazy, Component } from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Provider} from 'react-redux';
         
import generateStore from './redux/store'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
import Login from './components/Login/index.jsx';
const ContratosR = lazy(() => import('./router/ContratosR.jsx'));
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   // eslint-disable-next-line
//   Link

// } from 'react-router-dom'


class App extends Component {
  

  render() { 
  const store = generateStore()
  return (
    //Dentro de el componente router se reenderizaran todos los demas componentes
    //Primer ejercicio
    <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script src="https://kit.fontawesome.com/yourcode.js" crossorigin="anonymous"></script>
      <title>Contratos</title>
    </head>
    <body>

    <Provider store={store}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/contratos" component={ContratosR}>
          </Route>

          <Route exact path="/">
            <Login />
          </Route>

        </Switch>
        </Suspense>
      </Router>
    </Provider>
    </body>
    </html>
  ); 
  }
}

export default App;
