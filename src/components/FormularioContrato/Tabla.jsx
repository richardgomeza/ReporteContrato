import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Item</th>
        <th>Descripcion</th>
        <th>Unidad</th>
        <th>Cantidad</th>
        <th>V. Unitario</th>
        <th>Remove</th>
      </tr>
    </thead>
  );
};

const TableBody = props => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td> {row.item} </td>
        <td> {row.descripcion} </td>
        <td> {row.unidad} </td>
        <td> {row.cantidad} </td>
        <td> {row.vunitario} </td>        
        <td>
          <button 
              className="btn btn-info btn-block" 
              onClick={() => props.editCharacter(index)}><FontAwesomeIcon icon={faEdit} /> </button>
          <button 
              className="btn btn-danger btn-block" 
              onClick={() => props.removeCharacter(index)}><FontAwesomeIcon icon={faTrash} /> </button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

const Tabla = (props) => {
  const {characterData, removeCharacter, editCharacter} = props
  return(
    <table className="table">
      <TableHeader/>
      <TableBody 
        characterData={characterData} 
        removeCharacter={removeCharacter}
        editCharacter={editCharacter}/>      
    </table>
  )
}

export default Tabla;