"use client";
import Cell from "./components/cell";
import { useEffect, useState } from "react";


const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export default function Home() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [turn, setTurn] = useState("O");

  const [winningMessage, setWinningMessage] = useState("");

  useEffect(() => {
    winningCombos.forEach((combo) => {
      const circleWins = combo.every((cell) => cells[cell] === "O");
      const crossWins = combo.every((cell) => cells[cell] === "X");

      if (circleWins) {
        setWinningMessage("Circle Wins!");
      } else if (crossWins) {
        setWinningMessage("Cross Wins!");
      }
    });
  }, [cells, winningMessage]);

  useEffect(() => {
    if (cells.every((cell) => cell !== "") && !winningMessage) {
      setWinningMessage("Draw!");
    }
  }, [cells, winningMessage]);


  return (
    <main>
      <div className="gameboard">
        {cells.map((cell, index) => (
          <Cell
            cells={cells}
            setCells={setCells}
            id={index}
            turn={turn}
            setTurn={setTurn}
            key={index}
            cell={cell}
          />
        ))}
      </div>
      <div>
      <h1>{!winningMessage? `Turn: ${turn}`  :winningMessage}</h1>
      </div>
    </main>
  );
}
