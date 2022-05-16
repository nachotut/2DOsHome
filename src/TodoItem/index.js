import React from 'react';
import './TodoItem.css';
import { FiCheck } from"react-icons/fi";
import { FaTrash } from"react-icons/fa";

function TodoItem(props) {
  return (
    <li className="TodoItem" >
      <span 
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
      // llamamos a la funcion onComplete de app.js 
        onClick={props.onComplete}
      >
      <FiCheck size="3rem" className=''/>
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span 
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
      <FaTrash/>
      </span>
    </li>
  );
}

export { TodoItem };