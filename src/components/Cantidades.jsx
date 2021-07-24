import React from "react";


function getContrato_cantidad(id){
  
  var contrato = document.getItem().id===id;
  console.log(contrato) ;
}
// getContrato_cantidad(1)
export default function Cantidades ({id}) {

    return (
        <div className="cantidades">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Item</th>
                <th scope="col">Descripción</th>
                <th scope="col">Unidad</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Valor Unitario</th>
                <th scope="col">Valor Total</th>            
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1.01</th>
                <td>Instalación de Tuberia metalica EMT 3/4"</td>
                <td>metro</td>
                <td>10</td>
                <td>$21000</td>
                <td>$210000</td>          
              </tr>
              <tr>
                <th scope="row">1.02</th>
                <td>Instalación de Cable Aislado THWN 12awg</td>
                <td>metro</td>
                <td>30</td>
                <td>$1000</td>
                <td>$30000</td>          
              </tr>
              <tr>
                <th scope="row">1.03</th>
                <td>Instalación de Tomacorriente Doble 110V</td>
                <td>unidad</td>
                <td>1</td>
                <td>$10000</td>
                <td>$10000</td>          
              </tr>          
            </tbody>
          </table>
        </div>
    );
  };
