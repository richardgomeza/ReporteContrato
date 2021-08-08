import React from 'react';
import Tabla from "./Tabla";
import Formulario1 from "./Formulario";
// eslint-disable-next-line
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


class Formulario extends React.Component {
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     value: 'Algo'
    //   };
  
    //   this.handleChange = this.handleChange.bind(this);
    //   this.handleSubmit = this.handleSubmit.bind(this);
    // }
  
    // handleChange(event) {
    //   this.setState({value: event.target.value});
    // }
  
    // handleSubmit(event) {
    //   alert('An essay was submitted: ' + this.state.value);
    //   event.preventDefault();
    // }
  
    // render() {
    //   return (
    //     <form onSubmit={this.handleSubmit}>
    //       <label>
    //         Essay:
    //         <textarea value={this.state.value} onChange={this.handleChange} />
    //       </label>
    //       <input type="submit" value="Submit" />
    //     </form>
    //   );
    // }
    
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2,
            value1: new Date(),
            value2: new Date(),
            onChange1: new Date(),
            onChange2: new Date(),
            date1: new Date(),
            date2: new Date(),
            characters: [],
            editar:{},
            modalActualizar: false,
            modalInsertar: false,
            form: {
              descripcion: "",
              unidad: "",
              cantidad: "",
              vunitario: "",
            },
        };   
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
      };

      mostrarModalActualizar(dato) {
        this.setState({
          form: dato,
          modalActualizar: true,
        });
      };

      cerrarModalActualizar = () => {
        this.setState({ modalActualizar: false });
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

      handleChange(event) {
        this.setState({value: event.target.value1});
        this.setState({value: event.target.value2});
        }
    
        handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value1 + ","+this.state.value2);
        event.preventDefault();
        }
      
        _onDateChange(e) {
          let state = this.state;
          state['date1'] = e.target.value1;
          state['date2'] = e.target.value2;
          // Or (you can use below method to access component in another method)
          state['date1'] = this.dateRef.value1;
          state['date2'] = this.dateRef.value2;
          this.setState(state);
      }
  
      handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
      // state = {
      //   characters: [],
      // };
      removeCharacter = (index) => {
        const { characters } = this.state ;
    
        this.setState({
          characters: characters.filter((characters, i) => {
            return i !== index;
          }),
        });
      };
      // editCharacter = (index) => {
      //   const { characters } = this.state;
      //   this.state = {
      //     characters: characters.filter((character, i) => {
      //       return i !== index;
      //     }),
      //   };
        // this.setState({
        //   characters: characters.filter((character, i) => {
        //     return i !== index;
        //   }),
        // });
      // };
    
      handleSubmit = (character) => {
        this.setState({ characters: [...this.state.characters, character] });
      };                                 
    
      render() {
        const { characters } = this.state;
        return (
            <div>
                <h4>Nuevo Contrato:</h4> <br />
                <h5>Detalles de contrato</h5><br />
                <form className="container d-flex center">
                  <div className="row">

                    <label className="col">
                    <span style={{margin:'2vw'}}>Contrato</span>  
                    <input
                        name="isGoing"
                        type="text"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                    </label>

                    <label className="col">
                    <span style={{margin:'2vw'}}>Proyecto</span>  
                    <input
                        name="isGoing"
                        type="text"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                    </label>
                  </div>
                  <div className="row">
                    <label className="col">
                    <span style={{margin:'2vw'}}>Fecha de inicio:</span>
                    <input type="date" ref={(date1) => {this.dateRef = date1;}} value={this.state.date1} onChange={this._onDateChange.bind(this)}/>
                    </label>

                    <label className="col">
                    <span style={{margin:'2vw'}}>Fecha de fin:</span>
                    <input type="date" ref={(date2) => {this.dateRef = date2;}} value={this.state.date2} onChange={this._onDateChange.bind(this)}/>
                    </label>
                  </div>
                </form>
                <div className="row">

                  <h5>Cantidades:</h5>
                </div>
                <Formulario1 
                  handleSubmit={this.handleSubmit} 
                />
                <Tabla
                  characterData={characters}
                  removeCharacter={this.removeCharacter}
                  mostrarModalActualizar={this.mostrarModalActualizar}
                  // editCharacter={this.editCharacter}
                />
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
            </div>
        );
        
      }
  }

export default Formulario