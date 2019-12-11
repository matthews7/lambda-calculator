import React from "react";

const OperatorButton = (props) => {
  return (
    <button  onClick={ () => {
      console.log(props.button.value)
      
    }
  } className="operator-btn">
      {props.button.char}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default OperatorButton;