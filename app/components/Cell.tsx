import { Dispatch, SetStateAction } from "react";

type cellProps = {
  id: number;
  turn: string;
  setTurn: Dispatch<SetStateAction<string>>;
  cells: string[];
  setCells: Dispatch<SetStateAction<string[]>>;
  cell: string;
};

const cell = ({ turn, setTurn, id, cells, setCells, cell }: cellProps) => {
  const handelClick = (e) => {
    const nottaken = !cells[id];

    if (nottaken) {
      if (turn === "O") {
        handelCellChange("O");
        setTurn("X");
      } else if (turn === "X") {
        handelCellChange("X");
        setTurn("O");
      }
    }
  };

  const handelCellChange = (cellToChange: string) => {
    //Copy
    let cellsCopy = [...cells];
    //change the value
    cellsCopy[id] = cellToChange;
    //set the state
    setCells(cellsCopy);
  };

  return (
    <div className="cell" onClick={handelClick}>
      <div className={cell}>{cell ? (cell === "O" ? "O" : "X") :""}</div>
    </div>
  );
};
export default cell;
