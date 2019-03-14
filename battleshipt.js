//Variable declaration
var numShips = 5;
var numPlayers = 2;

// Variable to hold ship names and length
var fleetDetails = {
    carrier: {
        length: 5,
        name: 'carrier'
    },
    battleship: {
        length: 4,
        name: 'battleship'
    },
    cruiser: {
        length: 3,
        name: 'cruiser'
    },
    submarine: {
        length: 3,
        name: 'submarine'
    },
    destroyer: {
        length: 2,
        name: 'destroyer'
    }
};

// Variables containing ships information. Can be accessed anywhere in the code
var carrier = fleetDetails.carrier;
var battleship = fleetDetails.battleship;
var cruiser = fleetDetails.cruiser;
var submarine = fleetDetails.submarine;
var destroyer = fleetDetails.destroyer;

// 2-Dimensional array to hold board information
function gameBoardGen () {
    var array = [];

    // X-Values
    for (var i = 0; i < 10; i++) {
        array[i] = [];
      
        // Y-values
        for (var j = 0; j < 10; j++) {
            array[i][j] = {};
        }
      
    } 
    console.table(array);

}

//Function to get the cell information on the board from the user
function cellClicks (a,s) {
    var e= document.getElementsByTagName('table');
    e = [0].document.getElementById('td');
    e[s].innerHTML = a;
}

function placeShips() {
    
    // I only need one click counter to 
    // Once the onClicks equal the length of the ship, move onto the next ship
    var onClickCounter = 0;

    // I need an array with each ship size
    // I also need to store the cells in which a ship has been placed into 

    console.log("Place your battleships!")
    //for loop to loop through the 5 itterations of the ship placement
    //Once the onClick counters equal the length of the ship, move onto next
    for (let i = 0; i < numships; i++) {
        console.log("Place your " + fleetDetails.name[i]) // I want to access each name iteratively. How can I do this?
        
        if (onClickCounter === this.cel) {
            
        }
        
    }
}

//Update everything on the board
function calculateBoard(board){
    var hitNumCarrier = 0;
    var hitNumBattleship = 0;
    var hitNumCruiser = 0;
    var hitNumSubmarine = 0;
    var hitNumDestroyer = 0;
    
    //calculating what has been hit, what hasn't, what is missing...

    // Statements to check whether ships have been sunk or not
    if (hitNumCarrier === carrier.length) {
        console.log("Carrier has been sunk");
    } else if (hitNumBattleship === battleship.length) {
        console.log("Battleship has been sunk");
    } else if (hitNumCruiser === cruiser.length) {
        console.log("Cruiser has been sunk");
    } else if (hitNumSubmarine === submarine.length) {
        console.log("Submarine has been sunk");
    } else if (hitNumDestroyer === destroyer.length) {
        console.log("Destroyer has been sunk");
    } else {
        return false;
    }

    //TO DO: Check to see if cell has already been played
    //Player's seleceted cell
        //Run through board and check for hit objects (for loop)
        
    //Change player turns
}

//changing turn 
function changeTurn() {
    var player2Board = this.gameBoardGen;
    var player1Board = this.gameBoardGen;
    if(player1) {
        // load player2 board
        // let player1 go
            //Select cell for guess
        // submit play
            //Check for whether there was a hit or miss
                //If hit is found, inform player (use the hitNum variables to hold the hit cells as well as hit number)
                //Also if miss is found, inform player (place miss object in place of guessed cell)
                //Else valid move and change board to miss
            // Update board (renderBoard function)

        //Change player turn

        // Setup everything
        // Wait for user for turn
        // Call calculate board
        // call render board
        // switch to player 2 turn

    } else {
        //load player1 board
        //let player2 go
            //select cell for guess
        //submit play
            // check board for whether there was a hit or miss
            //display to board the results
    }
}

//Update all the cells and displays it to the page
function renderBoard(board){
  for(var i = 0; i < 10; i++){
    for(var j = 0; j < 10; i++){

      var currentCellId = (i * 10) + j;
      
      var currentCellData = board[i][j];


      var element = document.getElementById(currentCell);

      // miss, hit, empty
      element.style.backgroundColor = 'red';

    }
  }
}

function main(){
   gameBoardGen(); 
}

main();
