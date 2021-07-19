import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
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
            onChange: new Date()
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

                    <DateTimePickerComponent></DateTimePickerComponent>
                <h4>Nuevo Contrato:</h4>
                <h5>Detalles de contrato</h5><br />
                <form class="container">
                    {/* <label>
                    <span style={{margin:'2vw'}}> Is going:</span>  
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                    </label> */}
                    <br />
                    
                    <label>
                    <span style={{margin:'2vw'}}>Contrato</span>  
                    <input
                        name="isGoing"
                        type="text"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                    </label>
                    <br />

                    <label>
                    <span style={{margin:'2vw'}}>Proyecto</span>  
                    <input
                        name="isGoing"
                        type="text"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                    </label>
                    <br />

                    <br />

                    <label>
                    Number of guests:
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange} />
                    </label>
                    <br />

                    <label>
                    Essay:  
                    <textarea value="" onChange={this.handleChange} />
                </label>
                </form>
            </div>
        );
      }
  }

export default Formulario