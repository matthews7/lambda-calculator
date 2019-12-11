import React from "react";

const SpecialButton = (props) => {
  // const [specialState, setSpecialState] = usedState();
  return (
    <button className="special-btn"  onClick={ () => {
      console.log(props.button)
    }
  }>
      {props.button}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default SpecialButton;