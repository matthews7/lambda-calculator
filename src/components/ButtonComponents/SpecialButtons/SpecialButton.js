import React from "react";

const SpecialButton = (props) => {
  // const [specialState, setSpecialState] = usedState();
  return (
    <button className="blue buttonWidth"  onClick={ () => {
      console.log(props.button)
    }
  } className="special">
      {props.button}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default SpecialButton;