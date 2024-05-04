import React, { useReducer, useState } from "react";
import Board from "./Board";
import "./gameStyle.css";
import { chooseWinner } from "../../helper";


//initialize State
const initialState = {
  board: Array(9).fill(null),
  xIsNext: true,
}

const gameReducer = (state, action) => {
 return state;
}

const GameTic = () => {
  //Cách 1
  // const [board, setBoard] = useState(Array(9).fill(null));
  // const [xIsNext, setXIsNext] = useState(true);

  // useReducer
  const [state,dispatch] = useReducer(gameReducer, initialState);
  // const action = {type: 'CLICK', payload:  {}}
  //Cách 2
  // const[state, setState] = useState({
  //   board: Array(9).fill(null),
  //   xIsNext: true,
  //   name: "Len Vo",
  // });
  const winner = chooseWinner(state.board); 
  const handleClick = (index) => {
    const boardCopy = [...state.board]; //clone board
    if (winner || boardCopy[index]) return;
    dispatch({
      type: 'CLICK',
      payload: {
        index, //ES6 cách 2: index : index,
      },
    })
    // boardCopy[index] = state.xIsNext ? "X" : "O";
    // setBoard(boardCopy); //update board
    // setXIsNext(!xIsNext); // click vô thành cái ngược lại.Vd nhấn X xong đến O; O xong đến X
    // setState({
    //   ...state, //spread operator
    //   board: boardCopy,
    //   xIsNext: !state.xIsNext
    // });
    // console.log(state);
  };
  const handleReplay = () => {
    // setBoard(Array(9).fill(null));
    // setXIsNext(true); // Set X đánh trước khi replay game
  };
  return (
    <div>
      <Board cells={state.board} onClick={handleClick}></Board>
      <div className="Winner">
        {winner ? `The winner is ${winner}` : ""}
      </div>
      <button className="replayBtn" onClick={handleReplay}>
        Replay
      </button>
    </div>
  );
};

export default GameTic;
