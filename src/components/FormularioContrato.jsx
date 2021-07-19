import React from 'react';

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
            value: new Date(),
            onChange: new Date(),
            date: new Date(),
            datef: (new Date()).getMonth +1
        };   
        
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
      }
      handleChange(event) {
        this.setState({value: event.target.value});
        }
    
        handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
        }
      
        _onDateChange(e) {
          let state = this.state;
          state['date'] = e.target.value;
          // Or (you can use below method to access component in another method)
          state['date'] = this.dateRef.value;
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
    
      render() {
        // const [value, onChange] = useState(new Date());
        return (
            <div>
                <h4>Nuevo Contrato:</h4> <br />
                <h5>Detalles de contrato</h5><br />
                <form class="container d-flex center">
                  <div class="row">

                    <label class="col">
                    <span style={{margin:'2vw'}}>Contrato</span>  
                    <input
                        name="isGoing"
                        type="text"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                    </label>

                    <label class="col">
                    <span style={{margin:'2vw'}}>Proyecto</span>  
                    <input
                        name="isGoing"
                        type="text"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                    </label>
                  </div>
                  <div class="row">
                    <label class="col">
                    <span style={{margin:'2vw'}}>Fecha de inicio:</span>
                    <input type="date" ref={(date) => {this.dateRef = date;}} value={this.state.date} onChange={this._onDateChange.bind(this)}/>
                    </label>

                    <label class="col">
                    <span style={{margin:'2vw'}}>Fecha de fin:</span>
                    <input type="date" ref={(date) => {this.dateRef = date;}} value={this.state.date} onChange={this._onDateChange.bind(this)}/>
                    </label>
                  </div>
                </form>
                <div class="row">

                  <h5>Cantidades:</h5>
                </div>
              
                <div class="row" style={{margin:'  2vw'}}>
                <table class="table">
                  <thead>
                    <tr class="table-info">
                      <th scope="col">Item</th>
                      <th scope="col">Descripción</th>
                      <th scope="col">Unidad</th>
                      <th scope="col">Cantidad</th>
                      <th scope="col">Valor Unitario</th>            
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <div class="input-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="1.1"
                            //aria-label="1.1"
                            //aria-describedby="basic-addon1"
                          ></input>
                        </div>
                      </th>
                      <td>
                        <textarea
                          type="text"
                          class="form-control"
                          placeholder="Instalación de Tuberia metalica EMT 3/4"
                        ></textarea>
                      </td>
                      <td>
                        <input type="text" class="form-control" placeholder="ml"></input>
                      </td>
                      <td>
                        <input type="text" class="form-control" placeholder="50"></input>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="$10000"
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <input type="text" class="form-control" placeholder="1.2"></input>
                      </th>
                      <td>
                        <textarea
                          type="text"
                          class="form-control"
                          placeholder="Instalación de Cable Aislado THWN 12awg"
                        ></textarea>
                      </td>
                      <td>
                        <input type="text" class="form-control" placeholder="ml"></input>
                      </td>
                      <td>
                        <input type="text" class="form-control" placeholder="35"></input>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="$10000"
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <input type="text" class="form-control" placeholder="1.3"></input>
                      </th>
                      <td>
                        <textarea
                          type="text"
                          class="form-control"
                          placeholder="Instalación de Tomacorriente Doble 110V"
                        ></textarea>
                      </td>
                      <td>
                        <input type="text" class="form-control" placeholder="und"></input>
                      </td>
                      <td>
                        <input type="text" class="form-control" placeholder="1"></input>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="$30000"
                        ></input>
                      </td>
                    </tr>
                  </tbody>
                </table>
                </div>
            </div>
        );
        
      }
  }

export default Formulario