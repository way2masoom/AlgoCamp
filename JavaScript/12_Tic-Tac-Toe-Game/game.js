// Console based Tic-Tac-Toe game
// _____|____|____
// _____|____|____
// _____|____|____
//      |    |    

// 1. Create a 3x3 array to represent the board
// 2. Create a function to print the board
// 3. Create a function to check if the game is over
// 4. Create a function to check if a player has won
// 5. Create a function to check if the board is full
// 6. Create a function to play the game


// const grid = [
//     ['X', null, 'O'],
//     [, 'O',],
//     ['X', 'X', null]
// ]


// let currPlayer = 'O';
// 0 0 -> grid[0][0] = currPlayer
// if(currPlayer == 'O') currPlayer = 'X';
// else currPlayer = 'O';

// currPlayer = 'x'
// 1 2 => grid[1][2] = currPlayer

// if(currPlayer == 'O') currPlayer = 'X';
// else currPlayer = 'O';

// let currPlayer = 'O';
// for (let i = 0; i < 9; i++) {
//     console.log("Turn of ", currPlayer);
//     // Input
//     let i = 1, j = 1;

//     grid[i][j] = currPlayer;
//     if (currPlayer === 'O') currPlayer = 'X';
//     else currPlayer = 'O';

    // dispaly();

// }

// dispaly(){

//     for(let i = 0; i < 3; i++){
//         for(let j = 0; j < 3;j++){
//             if(i == 1){
//                 console.log("|");
//             }
//             if(!grid[i][j]){
//                 console.log('_____');
//             }else {
//                 console.log('__' + grid[i][j] + "__");
//             }

//             if(i == 1){
//                 console.log("|");
//             }
//         }
//     }
// }


// ['X', null, 'O'],
//     [, 'O',],
//     ['X', 'X', null]

//0 ->  __X__|____|__O_
//1 ->  _____|____|____
//2 ->  _____|____|____
//           |    |


// for (let row = 0; row <= 2; row++) {
//     let pattern = "";
//     for (col = 0; col <= 2; col++) {
//         if (col == 1) {
//             pattern += '|';
//         }
//         if (grid[i][j]) {
//             pattern += '__' + grid[row][col] + "__";
//         } else {
//             pattern += "_____";
//         }

//         if (col == 1) {
//             pattern += '|';
//         }
//     }

//     console.log(pattern);
// }

// Game Board
//0 ->  __X__|____|__O_
//1 ->  _____|____|____
//2 ->  _____|____|____
//           |    |

function displayBoard() {
    // Create the tic-tac-toe board as a string
    let board =
        " 1 | 2 | 3 \n" +
        "---|---|---\n" +
        " 4 | 5 | 6 \n" +
        "---|---|---\n" +
        " 7 | 8 | 9 ";

    // Print the board in a single line
    console.log(board);

}

function UserInput(row, col) {
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            let userInput = prompt("Enter your name:");
        }
    }
}
// Taking input from the user
// let userInput = prompt("Enter your name:");

// // Displaying the input
// console.log("Hello, " + userInput + "!");

let person = prompt("Please enter your name", "Harry Potter");

if (person != null) {
  document.getElementById("demo").innerHTML =
  "Hello " + person + "! How are you today?";
}