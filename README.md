# BattleShipt
Coding challenge for Shipt internship.
## Main File
```
App.js is the main the main file that I am running out of
```
### How it works so far:
```
The number of ships placed onto board is based on number of clicks performed on the board. In the placeShips 
function, I compare the number of clicks against the length of the ships, and depending on conditions, I change 
the state of whether a ship has been placed or not. What needs to happen next is change the background color of 
each cell when a ship has been placed. I have a Player 1 board and Player 2 board. These will alternate depending 
on whose turn it is.
```
### Learning React along the way:

```
I decided to try and build the challenge within the React framework, as I have known it to be a very powerful
language to learn. I initially started this code with vanilla Javascript and HTML, but thought to go ahead 
and try my hand at React. So I scratched my old code, and moved into making the game in React. I have enjoyed 
what I've learned so far, and am excited to continue on learning as much as I can about it. There are still 
several items that I am missing from the challenge provided, but I will continue on trying to finish within 
React. It has proven to be a bit of an undertaking. I have begun to understand it much better, but the time 
frame for submission was getting a bit close for my liking. So I have submitted what I've gotten so far.
```

##### Items To Be Added:

* Make cells on gameboard react to click events
* In first phase of game when placing ships, make sure pieces from same ship can only be placed next to each other
* Display whose turn it is with alternating messages
* Make sure that when player 1 is guessing against player 2's board, that he or she is not able to see ship locations
* Second phase of game of guessing where player ships are.
* Determing winner based on who guessed all ships first
* Player VS Computer gamemode
* Styling
