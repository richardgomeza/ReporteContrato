import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // eslint-disable-next-line
    Link
  
} from 'react-router-dom';

import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import Cantidades from '../components/Cantidades.jsx';
import Contratos from '../components/Contratos.jsx';
import Formulario from '../components/FormularioContrato/FormularioContrato.jsx';

const links = {
    tabla:"/contratos",
    nuevo:"/contratos/crear"
}
export default function ContratosR() {
    return (
        <Router>
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
                <Header links={links} />

                <Switch>
                    <Route path={links.nuevo}>
                        <Formulario />
                    </Route>
                    <Route path="/contratos/detalles">
                        <Cantidades />
                    </Route>
                    <Route exact path={links.tabla}>
                        <Contratos></Contratos>
                    </Route>
                </Switch>

                <Footer />
            </div>                          
        </Router>
)};