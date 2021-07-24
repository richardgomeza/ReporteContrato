import React, { Component } from "react";

class Formulario extends Component {
  initialState = {
    item: "",
      descripcion: "",
      unidad: "",
      cantidad: "",
      vunitario: "",
  }
  state = this.initialState


// class Formulario extends Component {
//   constructor(props) {
//     super(props);

//     this.initialState = {
//       item: "",
//       descripcion: "",
//       unidad: "",
//       cantidad: "",
//       vunitario: "",
//     };
//     this.state = this.initialState;
//   }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name] : value,
    });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { item, descripcion, unidad, cantidad, vunitario } = this.state;
    
  console.log(this.props)
    return (
      <form onSubmit={this.onFormSubmit}>
        <label for="item" style={{margin:'1vw'}}>Item</label>
        <input
          style={{margin:'1vw'}}
          type="text"
          size="8"
          name="item"
          id="item"
          value={item}
          onChange={this.handleChange}
        />
        <label for="descripcion" style={{margin:'1vw'}}>Descripcion</label>
        <input
          style={{margin:'1vw'}}
          type="text"
          name="descripcion"
          id="descripcion"
          value={descripcion}
          onChange={this.handleChange}
        />
        <label for="unidad" style={{margin:'1vw'}}>Unidad</label>
        <input
          style={{margin:'1vw'}}
          type="text"
          name="unidad"
          size="5"
          id="unidad"
          value={unidad}
          onChange={this.handleChange}
        />
        <label for="cantidad" style={{margin:'1vw'}}>Cantidad</label>
        <input
          style={{margin:'1vw'}}
          type="text"
          size="6"
          name="cantidad"
          id="cantidad"
          value={cantidad}
          onChange={this.handleChange}
        />
         <label for="cvunitario" style={{margin:'1vw'}}>V. Unitario</label>
        <input
          style={{margin:'1vw'}}
          type="text"
          name="vunitario"
          id="vunitario"
          value={vunitario}
          onChange={this.handleChange}
        />

        <button className="btn btn-success btn-block" type="submit"> Agregar </button>
      </form>
    );
  }
}

export default Formulario;
