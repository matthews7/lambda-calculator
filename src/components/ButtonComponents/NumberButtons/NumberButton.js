import React from "react";


const NumberButton = (props) => {
  return (
    <button onClick={ () => {
      props.set(props.total + props.button)
    }
  } className="numbers-btn">
    {props.button}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default NumberButton;