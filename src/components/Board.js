import React, { useState } from "react";
import Square from "./Square";
import "../App.css";

// The Board component represents the game board. It maintains the game's state
// (i.e., which squares are X, which are O, and which are empty) and renders
// the Square components.
function Board(props) {
  // Initialize the game board with an array of null values, representing
  // the 9 squares on the board.x
  const [squares, setSquares] = useState(Array(9).fill(null));

  // The current player (either "X" or "O") is stored in the component's state.
  const [xIsNext, setXIsNext] = useState(true);

  // Initialize the win counts for each player to 0.
  const [player1Wins, setPlayer1Wins] = useState(0);
  const [player2Wins, setPlayer2Wins] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // This function is called when a square is clicked. It updates the squares
  // array with the appropriate value (either "X" or "O") and toggles the
  // current player.
  function handleClick(i) {
    if (gameOver) {
      return;
    }

    const newSquares = squares.slice();
    if (newSquares[i]) {
      return;
    }
    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);

    // Determine if the game is won and if the player who just made a move is the winner
    const winner = calculateWinner(newSquares);
    if (winner === "X" && xIsNext) {
      if (!gameOver) {
        setPlayer1Wins(player1Wins + 1);
      }
      setGameOver(true);
    } else if (winner === "O" && !xIsNext) {
      if (!gameOver) {
        setPlayer2Wins(player2Wins + 1);
      }
      setGameOver(true);
    } else if (winner === "DRAW") {
      setGameOver(true);
    }
    setXIsNext(!xIsNext);
  }

  function handleReset() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setGameOver(false);
  }

  // This function determines if there is a winner or if the game is a draw.
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    // If all squares are filled and no winner was found, the game is a draw
    if (squares.every(Boolean)) {
      return "DRAW";
    }
    // If the game is still ongoing, return null
    return null;
  }

  // This function renders the game board. It creates 9 Square components and
  // passes a "value" prop to each one. The value prop for each Square is set
  // to the corresponding value in the squares array.
  function renderBoard() {
    let rows = [];
    for (let i = 0; i < 3; i++) {
      let cols = [];
      for (let j = 0; j < 3; j++) {
        cols.push(
          <Square
            key={i * 3 + j}
            value={squares[i * 3 + j]}
            onClick={() => handleClick(i * 3 + j)}
          />
        );
      }
      rows.push(
        <div key={i} className="board-row">
          {cols}
        </div>
      );
    }
    return rows;
  }

  // Determine the winner or if the game is a draw.
  const winner = calculateWinner(squares);

  let status;
  if (winner === "X") {
    status = "Winner: " + props.player1;
  } else if (winner === "O") {
    status = "Winner: " + props.player2;
  } else {
    status = "Next player: " + (xIsNext ? props.player1 : props.player2);
  }

  return (
    <div className="board">
      <div className="status">{status}</div>
      {renderBoard()}
      <div className="win-counts">
        <div>
          {props.player1}: {player1Wins}
        </div>
        <div>
          {props.player2}: {player2Wins}
        </div>
      </div>
      <button className="reset" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default Board;
