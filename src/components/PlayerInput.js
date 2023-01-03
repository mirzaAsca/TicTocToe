import React from "react";
import { Link } from "react-router-dom";

function PlayerInput({ setPlayer1, setPlayer2 }) {
  // Add state variables to store the player names

  // Update the player name state variables when the inputs are changed

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <p>Player 1 Name:</p>
      <input type="text" onChange={(e) => setPlayer1(e.target.value)} />
      <p>Player 2 Name:</p>
      <input type="text" onChange={(e) => setPlayer2(e.target.value)} />
      {/* Pass the player names to the Board component as props */}
      <Link to="/">
        <button className="start">Start New Game</button>
      </Link>
    </div>
  );
}

export default PlayerInput;
