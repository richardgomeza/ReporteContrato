import React from "react";

const Contratoeditar = () => {
  return (
    <div className="contratoeditar">
      <h2>
        <h2> Editar Contratos: </h2>
      </h2>

      <table class="table">
        <thead>
          <tr class="table-info">
            <th scope="col">Contrato</th>
            <th scope="col">Proyecto</th>
            <th scope="col">Inicio</th>
            <th scope="col">Fin</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr >
            <th scope="row"><input
                  type="text"
                  class="form-control"
                  placeholder="Instalaciones eléctricas"                  
                ></input></th>
            <td><input
                  type="text"
                  class="form-control"
                  placeholder="Edificio Milenio III"                  
                ></input>              
            </td>
            <td><input
                  type="text"
                  class="form-control"
                  placeholder="21 julio 2021"                  
                ></input></td>
            <td><input
                  type="text"
                  class="form-control"
                  placeholder="21 julio 2022"                  
                ></input></td>
          </tr>
          <tr>
            <th scope="row"><input
                  type="text"
                  class="form-control"
                  placeholder="Obras Civiles"                  
                ></input></th>
            <td><input
                  type="text"
                  class="form-control"
                  placeholder="Edificio Milenio III"                  
                ></input>              
            </td>
            <td><input
                  type="text"
                  class="form-control"
                  placeholder="21 julio 2021"                  
                ></input></td>
            <td><input
                  type="text"
                  class="form-control"
                  placeholder="21 julio 2022"                  
                ></input></td>
          </tr>
          <tr>
            <th scope="row"><input
                  type="text"
                  class="form-control"
                  placeholder="Instalaciones mecánicas"                  
                ></input></th>
            <td><input
                  type="text"
                  class="form-control"
                  placeholder="Edificio Milenio III"                  
                ></input>              
            </td>
            <td><input
                  type="text"
                  class="form-control"
                  placeholder="21 julio 2021"                  
                ></input></td>
            <td><input
                  type="text"
                  class="form-control"
                  placeholder="21 julio 2022"                  
                ></input></td>
          </tr>
          
        </tbody>
      </table>
      <div class="d-flex justify-content-evenly">
        <a href="/Contratos">
          <button className="btn btn-primary btn-block">Guadar</button>
        </a>
        <a href="/Contratos">
          <button className="btn btn-danger btn-block">Volver</button>
        </a>
      </div>
    </div>
  );
};

export default Contratoeditar;
