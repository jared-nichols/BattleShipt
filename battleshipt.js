//Variable declaration
var numShips = 5;
var numPlayers = 2;

var fleetDetails = [{"name": "carrier", "length": 5},
                    {"name": "battleship", "length": 4},
                    {"name": "cruiser", "length": 3},
                    {"name": "submarine", "length": 3},
                    {"name": "destroyer", "length": 2}];


//NOTES:
//have a state object
//check the state of the board each time the fire onClick is pressed

// function Fleet(name, fleetDetails) {
//     this.name = name;
//     this.fleetDetails = fleetDetails;
// }

// 2-Dimensional array to hold board information
function gameBoardGen () {
    var hitNumCarrier = 5;
    var hitNumBattleship = 4;
    var hitNumCruiser = 3;
    var hitNumSubmarine = 3;
    var hitNumDestroyer = 2;
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

    // Statements to check whether ships have been sunk or not
    if (hitNumCarrier === length.fleetDetails("carrier")) {
      console.log("Carrier has been sunk");
    } else if (hitNumBattleship === length.fleetDetails("battleship")) {
      console.log("Battleship has been sunk");
    } else if (hitNumCruiser === length.fleetDetails("crusier")) {
      console.log("Cruiser has been sunk");
    } else if (hitNumSubmarine === length.fleetDetails("submarine")) {
      console.log("Submarine has been sunk");
    } else if (hitNumDestroyer === length.fleetDetails("destroyer")) {
      console.log("Destroyer has been sunk");
    } else {
      return false;
    }
              

}

function main(){
   gameBoardGen(); 
}

main();
