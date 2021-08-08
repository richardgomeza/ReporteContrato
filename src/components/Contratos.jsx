import React,{useEffect} from "react";

// eslint-disable-next-line
// hooks react redux
import {useDispatch, useSelector} from 'react-redux'

// importamos la acción
import {obtenerContratosAccion} from '../redux/Ducks/contratosDuck.js'

function Contratos () {
  const dispatch = useDispatch()
  const obteniendoContratos = async() => {
    await dispatch(obtenerContratosAccion())
    return console.log("contratos obtenidos")
  }
  useEffect( ()=>(
    obteniendoContratos()
  ));
  const contratos =  useSelector(store => store.contratos.array)
  // declaramos displach para llamar a la acción o acciones
  // crearmos el state utilizando nuestra tienda y extraemos los contratos
    return (
      <div className="contratos">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Contrato</th>
              <th scope="col">Proyecto</th>
              <th scope="col">Código</th>
              <th scope="col">Inicio</th>
              <th scope="col">Fin</th>
              <th scope="col"></th>            
            </tr>
          </thead>
          <tbody>
            {contratos.map(d => (
                <tr>
                  <th scope="row">{d.contrato}</th>
                  <td>{d.proyecto}</td>
                  <td>{d.ncontrato}</td>
                  <td>{d.inicio}</td>
                  <td>{d.fin}</td>
                  <td>
                  <a href='/contratos/detalles?id' role="button" className="btn btn-success btn-block" >Ver Contrato</a>
                  </td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}


export default Contratos;