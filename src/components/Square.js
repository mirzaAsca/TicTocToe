import React from "react";
import "../App.css";

// The Square component represents a single square on the game board.
// It accepts a "value" prop that determines what is displayed within the square.
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;
