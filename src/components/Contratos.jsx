import React from "react";

// eslint-disable-next-line
const modelo = {
  contrato: "Nombre",
  proyecto: "Proyecto al que pertenece",
  inicio: "Fecha desde la que es vigente",
  fin: "Fecha de finalización del contrato",
  cantidades: [ // Detalles del contrato, pueden ser mas de una
    {
      item: "id",
      descripción: "Acción que se realiza",
      unidad: "Unidad de medida",
      cantidad: "Cuanto fue necesario del item",
      unitario: "Valor unitario del item"
    }
    // ,{ // Ejemplo de más cantidades
    //   item: "id",
    //   descripción: "Acción que se realiza",
    //   unidad: "Unidad de medida",
    //   cantidad: "Cuanto fue necesario del item",
    //   unitario: "Valor unitario del item"
    // }
  ]
}


const Contratos = () => {
  return (
    
    <div className="contratos">
      <table class="table">
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
          <tr>
            <th scope="row">Instalaciones Electricas</th>
            <td>Edificio Milenio III</td>
            <td>21 julio 2021</td>
            <td>21 julio 2022</td>
            <td>
            <a href="/detalles" role="button" className="btn btn-success btn-block" >Ver Contrato</a>
            </td>
          </tr>
          <tr>
            <th scope="row">Obras Civiles</th>
            <td>Edificio Milenio III</td>
            <td>21 julio 2021</td>
            <td>21 julio 2022</td>
            <td>
            <a href="/detalles" role="button" className="btn btn-success btn-block" >Ver Contrato</a>
            </td>            
          </tr>
          <tr>
            <th scope="row">Obras Mecánica</th>
            <td>Edificio Milenio III</td>
            <td>21 julio 2021</td>
            <td>21 julio 2022</td>
            <td>
            <a href="/detalles" role="button" className="btn btn-success btn-block" >Ver Contrato</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Contratos;
