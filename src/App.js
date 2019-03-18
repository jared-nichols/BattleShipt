import React, { Component } from "react";
import Board from "./components/board";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.fleetDetails = {
      carrier: { name: "carrier", length: 5, placed: false },
      battleship: { name: "battleship", length: 4, placed: false },
      cruiser: { name: "cruiser", length: 3, placed: false },
      destroyer: { name: "destroyer", length: 2, placed: false }
    };
  }

  //Handling clicks to use as counters for placing ships
  shipClickPlacement() {
    this.setState(setState => ({
      clicks: setState.clicks + 1
    }));
    console.log(this.state.clicks);
    return this.state.clicks;
  }
  
  state = {
    board1: null,
    board2: null,
    turn: "player1",
    placed: {
      carrier: false,
      battleship: false,
      cruiser: false,
      destroyer: false
    },
    player1: {
      areShipsPlaced: false
    },
    player2: {
      areShipsPlaced: false
    },
    clicks : 0
  };

  // General methods
  boardGen = () => {
    let board = [];
    for (let x = 0; x < 10; x++) {
      board.push([]);
      for (let y = 0; y < 10; y++) {
        board[x][y] = {
          hasShipt: false,
          isHit: false,
          isMiss: false,
          shipCoordinates:board[x][y]
        };
      }
    }
    return board;
  };

  startGame() {
    this.placeShips();
  }

  placeShips = () => {
    //Player 1 Board already on display, so no need to change to player 2 board
    //Board1 belongs to player1
    let clickCount = this.shipClickPlacement(); 
     
     if (this.state.placed.carrier === false) {
      console.log("Place your carrier!");
      
      if (clickCount === this.fleetDetails.carrier.length) {
        let state = this.state;
        state.placed.carrier = true;
        this.setState(state);
        this.setState({clicks: 0})
      }
    }
    if (this.state.placed.battleship === false && this.state.placed.carrier === true) {
      console.log("Place your battleship!");
      //Figure out how to check coordinates next
      if (clickCount === this.fleetDetails.battleship.length) {
        let state = this.state;
        state.placed.battleship = true;
        this.setState(state);
        this.setState({ clicks: 0 });
      }
    }
    if (this.state.placed.cruiser === false && this.state.placed.battleship === true && this.state.placed.carrier === true) {
      console.log("Place your cruiser!")
      //Figure out how to check coordinates next
      if (clickCount === this.fleetDetails.cruiser.length) {
        let state = this.state;
        state.placed.cruiser = true;
        this.setState(state);
        this.setState({ clicks: 0 });
      }
    }
    
    if (this.state.placed.destroyer === false && this.state.placed.cruiser === true && this.state.placed.battleship === true && this.state.placed.carrier === true) {
      console.log("Place your destroyer!")
      //Figure out how to check coordinates next
      if (clickCount === this.fleetDetails.destroyer.length) {
        if (this.state.turn === 'player2' && this.state.player1.areShipsPlaced === true) {
          console.log("exit function");
          let state = this.state;
          state.player2.areShipsPlaced = true;
          this.setState(state);
          return
        } else {
          let state = this.state;
          state.player1.areShipsPlaced = true;
          state.placed.carrier = false;
          state.placed.battleship = false;
          state.placed.cruiser = false;
          state.placed.destroyer = false;
          this.setState(state);
          this.setState({ clicks: 0 });
          this.setState({ turn: "player2" });
          //let board = this.state.board2;
        }
      }
    }
  };

  fireButton = (x, y) => {
    console.log("action");

    if (this.state.turn === "player1") {
      let board = this.state.board1;
      board[x][y].isHit = true;
      this.setState({
        board1: board
      });
    } else {
      let board = this.state.board2;
      board[x][y].isHit = true;
      this.setState({
        board2: board
      });
    }

    // change the turn
    this.changeTurn();
  };

  changeTurn = () => {
    if (this.state.turn === "player1") {
      this.setState({ turn: "player2" });
    } else {
      this.setState({ turn: "player1" });
    }
  };

  // React Lifecycle methods
  componentDidMount() {
    this.setState({
      board1: this.boardGen(),
      board2: this.boardGen()
    });
    //this.startGame.placeShips;
  }

  // React Render methods
  render() {
    let displayBoard = this.state.board1;
    console.log("Whose turn is it:" + this.state.turn);

    if (this.state.turn === "player2") {
      displayBoard = this.state.board2;
    
    }

    if (displayBoard !== null) {
      return (
        <div className="App" onClick={this.placeShips}>
          <Board fireButton={this.placeShips} board={displayBoard}/>
        </div>
        
      );
    } else {
      return <div>Loading... </div>;
    }
  }
}

export default App;
