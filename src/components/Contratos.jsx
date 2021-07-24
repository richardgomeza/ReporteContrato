import React from "react";

// import {obtenerContratosAccion} from '../../redux/contratosDuck.js'
// function Contratoss(){
//   const contratos =  useSelector(store => store.contratos.array)
//   return contratos
// }
// eslint-disable-next-line
// hooks react redux
import {useDispatch, useSelector} from 'react-redux'

// importamos la acción
import {obtenerContratosAccion} from '../redux/contratosDuck.js'
// function contratos({contratos}) {
//   return (
    
//     <tr>
//       <th scope="row">{contratos.contrato}</th>
//       <td>{contratos.proyecto}</td>
//       <td>{21 julio 2021}</td>
//       <td>21 julio 2022</td>
//       <td>
//       <a href="/contratos/detalles" role="button" className="btn btn-success btn-block" >Ver Contrato</a>
//       </td>
//     </tr>
//   )
// }

export default function Contratos () {
  // declaramos displach para llamar a la acción o acciones
  const dispatch = useDispatch()
  const obteniendoContratos = async() => {
    await dispatch(obtenerContratosAccion())
    return console.log("contratos obtenidos")
  }
  obteniendoContratos()
  // crearmos el state utilizando nuestra tienda y extraemos los contratos
  const contratos =  useSelector(store => store.contratos.array)
  console.log(useSelector(store=>store.contratos))
  console.log(contratos)
  // constructor (props){
  //   super(props)
  //   this.state = {
  //     contratos: []
  //   }
  // }
  // getContratos(){
  //   // axios
  //   // axios.get('http://jsonplaceholder.typicode.com/users').then(res => {
  //   //       var data = res.data
  //   //         this.setState({data : data})
  //   //     })
  //   this.setState({contratos : Contratoss()})
  //   // document.setItem({contratos: this.setState})
  // }
  // componentDidMount(){
  //   this.getContratos()
  // }
  // render(){ 
    return (
      <div className="contratos">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Contrato</th>
              <th scope="col">Proyecto</th>
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
                  <td>{d.inicio}</td>
                  <td>{d.fin}</td>
                  <td>
                  <a href="/contratos/detalles" role="button" className="btn btn-success btn-block" >Ver Contrato</a>
                  </td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
// };

