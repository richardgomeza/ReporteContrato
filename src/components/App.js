import React, { Component } from 'react';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";



import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

const data = [
  { 
    idContrato: "1", 
    contrato: "",
    proyecto: "",
    inicio: "",
    fin: "",
    actividades:[{
      idActividad:"1", 
      actividad:"Instalar Tuberia", 
      unidad:"", 
      cantidad:"", 
      valorUnitario:""},]
  },
];
class App2 extends Component {

  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      idContrato: "",
      contrato: "",
      proyecto: "",
      inicio: "",
      fin: ""
    },
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.idContrato === registro.idContrato) {
        arreglo[contador].contrato = dato.contrato;
        arreglo[contador].proyecto = dato.proyecto;
        arreglo[contador].inicio = dato.inicio;
        arreglo[contador].fin = dato.fin;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.idContrato);
    if (opcion === true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.idContrato === registro.idContrato) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    var tamaño= this.state.data.length
    var arreglo = this.state.data;
    
    if (tamaño === 0) {
      valorNuevo.idContrato=this.state.data.length+1
    } else {
      var mayorid= arreglo[tamaño-1].idContrato
      valorNuevo.idContrato=parseInt(mayorid)+1;
    }
    
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    
    return (
      <>
        <Container>
        <br />
          <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Crear</Button>
          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Contrato</th>
                <th>Proyecto</th>
                <th>Inicio</th>
                <th>Fin</th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.idContrato}>
                  <td>{dato.idContrato}</td>
                  <td>{dato.contrato}</td>
                  <td>{dato.proyecto}</td>
                  <td>{dato.inicio}</td>
                  <td>{dato.fin}</td>
                  <td>
                    <Button
                      color="primary" 
                      onClick={() => this.mostrarModalActualizar(dato)}
                      >Editar</Button>
                    <Button 
                      color="danger" 
                      onClick={()=> this.eliminar(dato)}
                      >Eliminar</Button>
                    <Button 
                      color="info" 
                      >Ver Actvidades</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
           <div><h3>Editar Registro</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
               Id:
              </label>
            
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.idContrato}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Contrato: 
              </label>
              <input
                className="form-control"
                name="contrato"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.contrato}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Proyecto: 
              </label>
              <input
                className="form-control"
                name="proyecto"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.proyecto}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Inicio: 
              </label>
              <input
                className="form-control"
                name="inicio"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.inicio}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Fin: 
              </label>
              <input
                className="form-control"
                name="fin"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.fin}
              />
            </FormGroup>




          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Guardar
            </Button>
            <Button
              color="danger"
              onClick={() => this.cerrarModalActualizar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>



        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
           <div><h3>Insertar Personaje</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Id: 
              </label>
              
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.data.length+1}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Contrato: 
              </label>
              <input
                className="form-control"
                name="contrato"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Proyecto: 
              </label>
              <input
                className="form-control"
                name="proyecto"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Inicio: 
              </label>
              <input
                className="form-control"
                name="inicio"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Fin: 
              </label>
              <input
                className="form-control"
                name="fin"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>



          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.insertar()}
            >
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </>
      

    );
  }
}
export default App2;