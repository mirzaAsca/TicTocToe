import React, { useState } from 'react'
import Board from "./components/Board"
import { Route, Routes } from "react-router-dom";
import PlayerInput from './components/PlayerInput';

export default function App() {
  const [player1, setPlayer1]= useState("");
  const [player2, setPlayer2]= useState("");


  return (
  
      <Routes>
      <Route path = "/" element = {<Board  player1={player1} player2={player2}/>} />
      <Route path = "/new-game" element = {<PlayerInput setPlayer1={setPlayer1} setPlayer2={setPlayer2}/>} />
      </Routes>
     
  )
}
