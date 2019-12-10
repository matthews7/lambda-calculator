import React from "react";

const OperatorButton = (props) => {
  return (
    <button>
      <span>{props.button.value}</span>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default OperatorButton;