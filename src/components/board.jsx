import React from "react";
import "./board.css";
import Cell from "./cell";

class Board extends React.Component {
  render() {
    return <div className="board">{this.returnCells(this.props.board)}</div>;
  }

  //Changed the board name to board1 to represent player1 board
  returnCells = board => {
    let array = [];
    for (let x = 0; x < board.length; x++) {
      let line = board[x];
      for (let y = 0; y < line.length; y++) {
        array.push(
          <Cell
            fireButton={this.props.fireButton}
            placeShips={this.props.placeShips}
            x={x}
            y={y}
            //onClick={this.props.fireButton}
            onClickPlaceShips={this.props.placeShips}
            info={board[x][y]}
            key={Math.random()}
          />
        );
      }
    }
    return array;
  };
}

export default Board;
