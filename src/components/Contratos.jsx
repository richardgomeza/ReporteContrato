import React from "react";

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
