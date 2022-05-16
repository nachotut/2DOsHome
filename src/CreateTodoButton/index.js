import React from 'react';
import { TodoContext } from '../TodoContext';
import './CreateTodoButton.css';

// function CreateTodoButton({ setOpenModal, openModal }) {
//   const onClickButton = () => {
//     if (openModal) {
//       setOpenModal(false);
//     } else {
//       setOpenModal(true);
//     }
//   };

//   return (
//     <button className="CreateTodoButton" onClick={() => onClickButton()}>
//       +
//     </button>
//   );
// }
function CreateTodoButton(props){
  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState);
  };

  return (
      <button  
              className="CreateTodoButton" 
              onClick={onClickButton}
      >
          +
      </button>
  );
}

export { CreateTodoButton };