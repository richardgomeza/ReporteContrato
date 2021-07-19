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
      <a
                className="ver-contrato"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Editar lista de contratos
              </a>
      <table class="table" style={{
        marginLeft: '5vw',
        marginRight: '5vw'
      }}>
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
          <tr style={{
                        background: 'var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box',
                        border: '1px solid var(--unnamed-color-707070)',
                        background: '#FFFFFF 0% 0% no-repeat padding-box',
                        border: '1px solid #707070',
                        // borderRadius: '40px',
                        borderRadius: '15px'}}>
            <th scope="row">Instalaciones Electricas</th>
            <td>Edificio Milenio III</td>
            <td>21 julio 2021</td>
            <td>21 julio 2022</td>
            <td>
            <button className="btn btn-success btn-block" >Ver Contrato</button>
            </td>
          </tr>
          <tr>
            <th scope="row">Obras Civiles</th>
            <td>Edificio Milenio III</td>
            <td>21 julio 2021</td>
            <td>21 julio 2022</td>
            <td>
            <button className="btn btn-success btn-block" >Ver Contrato</button>
            </td>            
          </tr>
          <tr>
            <th scope="row">Obras Mecánica</th>
            <td>Edificio Milenio III</td>
            <td>21 julio 2021</td>
            <td>21 julio 2022</td>
            <td><button className="btn btn-success btn-block" >Ver Contrato</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Contratos;
