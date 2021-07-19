import React from "react";

const Cantidadeditar = () => {
  return (
    <div className="cantidadeditar" >
      <h2>
        <h2> Editar Cuadro de Cantidades: </h2>
        <h2> Contrato:Instalaciones Eléctricas </h2>
      </h2>
      
      <table class="table" >
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
      <div class="d-flex justify-content-evenly">
        <a href="/Cantidades">
          <button class="btn btn-primary btn-block">Guadar</button>
        </a>
        <a href="/Cantidades">
          <button class="btn btn-danger btn-block">Volver</button>
        </a>
      </div>
    </div>
  );
};

export default Cantidadeditar;
