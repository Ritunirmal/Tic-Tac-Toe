import React, { useState } from 'react'
import './App.css';
const INITIAL_STATE = Array(9).fill(null);
function App() {
  const [board,setboard] = useState(INITIAL_STATE);
  const [xIsNext,setXIsNext] =useState(true);
  const handleClick = (index) => {
    if(calcualteWinner(board) || board[index]){
      return ;
    }
    const newBoard =[...board];
    newBoard[index] = xIsNext ? 'X' : '0';
    setboard(newBoard);
    setXIsNext(!xIsNext);
  }
  const rendersquare = (index) => {
     return(
      <button className="square" onClick={() => handleClick(index)}>{board[index]}</button>
     );
  }
  const winner = calcualteWinner(board);
  const status = winner ? 'winner:' + winner : 'Next Player:' + (xIsNext ? 'X' :'0');


  return (
    <div className="game">
      <div className="game-board">
        <div className="board-row">
          {rendersquare(0)}
          {rendersquare(1)}
          {rendersquare(2)}
        </div>
        <div className="board-row">
        {rendersquare(3)}
        {rendersquare(4)}
        {rendersquare(5)}
          
        </div>
        <div className="board-row">
        {rendersquare(6)}
        {rendersquare(7)}
        {rendersquare(8)}
          
        </div>
      </div>
      <div className="game-info">
        <div>{status}</div>
      </div>
    </div>
  );
}
const calcualteWinner = (squares) => {
  const lines = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
  ];
  for(let i = 0; i < lines.length; i++ ){
  const [a,b,c] = lines[i];
  if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
    return squares[a];

  }
  }
  return null
};

export default App;
