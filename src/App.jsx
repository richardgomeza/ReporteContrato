// import logo from './logo.svg';
// eslint-disable-next-line
import React, { Suspense, lazy, Component } from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import PrivateRoute from './private/privateRoute.jsx';
         
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
import App2 from './components/App.js'
import Login from './components/Login/index.jsx';

import {store} from './redux/store';
import {setAuthToken, setCurrentUser, logoutUser} from './redux/Ducks/userDuck';
import jwt_decode from'jwt-decode'
const ContratosR = lazy(() => import('./router/ContratosR.jsx'));
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
  // Logout user
  store.dispatch(logoutUser());
  // Redirect to login
  window.location.href = "./login";
}}

class App extends Component {
  
  render() { 
    return (
    // Dentro de el componente router se reenderizaran todos los demas componentes
    // Primer ejercicio
    <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script src="https://kit.fontawesome.com/yourcode.js" crossorigin="anonymous"></script>
      <title>Contratos</title>
    </head>
    <body>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <PrivateRoute path="/contratos" component={ContratosR}>
          </PrivateRoute>

          <Route exact path="/pablo">
            <App2 />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>

        </Switch>
        </Suspense>
      </Router>
    </body>
    </html>
  ); 
  }
}

export default App;
