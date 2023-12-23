/*
Initializing Arrays:
This initializes a 9x9 array arr to store references to the HTML elements representing the Sudoku grid.
*/
var arr = [[], [], [], [], [], [], [], [], []]

/*
Populating arr Array with DOM Elements:
This code uses nested loops to populate the arr array with references to the HTML elements using their IDs. It calculates the IDs based on the row and column numbers.
*/
for(var row = 0; row < 9; row++){
    for(var column = 0; column < 9; column++){
        arr[row][column] = document.getElementById(row * 9 + column);
    }
}

/*
Initializing board Array:
This initializes another 9x9 array board, which will represent the Sudoku board.
*/
var board = [[], [], [], [], [], [], [], [], []]

/*
FillBoard Function:
This function is used to fill the HTML grid with numbers from the board array. It sets the innerText property of the corresponding HTML elements to display the Sudoku values.
*/
function FillBoard(board){
    for(var row = 0; row < 9; row++){
        for(var column = 0; column < 9;column++){
            if(board[row][column] != 0){
                arr[row][column].innerText = board[row][column]
            }
            else
            arr[row][column].innerText = ''
        }
    }
}

/*
Array of Sudoku Puzzles:
This is an array containing several predefined Sudoku puzzles represented as 9x9 grids. These puzzles will be used for generating random Sudoku puzzles.
*/
// Array of Sudoku puzzles
const puzzles = [
    [
        [0, 0, 7, 1, 0, 0, 0, 6, 0],
        [1, 0, 5, 2, 0, 8, 0, 0, 0],
        [6, 0, 0, 0, 0, 7, 1, 2, 0],
        [3, 1, 2, 4, 0, 5, 0, 0, 8],
        [0, 0, 6, 0, 9, 0, 2, 0, 0],
        [0, 0, 0, 0, 0, 3, 0, 0, 1],
        [0, 0, 1, 0, 0, 4, 9, 8, 6],
        [8, 0, 3, 9, 0, 6, 0, 0, 0],
        [0, 6, 0, 0, 8, 2, 7, 0, 3]
    ],
    [
        [0, 0, 0, 2, 6, 0, 7, 0, 1],
        [6, 8, 0, 0, 7, 0, 0, 9, 0],
        [1, 9, 0, 0, 0, 4, 5, 0, 0],
        [8, 2, 0, 1, 0, 0, 0, 4, 0],
        [0, 0, 4, 6, 0, 2, 9, 0, 0],
        [0, 5, 0, 0, 0, 3, 0, 2, 8],
        [0, 0, 9, 3, 0, 0, 0, 7, 4],
        [0, 4, 0, 0, 5, 0, 0, 3, 6],
        [7, 0, 3, 0, 1, 8, 0, 0, 0]
    ],
    [
        [0, 2, 0, 6, 0, 8, 0, 0, 0],
        [5, 8, 0, 0, 0, 9, 7, 0, 0],
        [0, 0, 0, 0, 4, 0, 0, 0, 0],
        [3, 7, 0, 0, 0, 0, 5, 0, 0],
        [6, 0, 0, 0, 0, 0, 0, 0, 4],
        [0, 0, 8, 0, 0, 0, 0, 1, 3],
        [0, 0, 0, 0, 2, 0, 0, 0, 0],
        [0, 0, 9, 8, 0, 0, 0, 3, 6],
        [0, 0, 0, 3, 0, 6, 0, 9, 0]
    ],
    [
        [0, 0, 0, 0, 2, 0, 0, 0, 0],
        [5, 0, 0, 0, 0, 0, 0, 8, 4],
        [0, 0, 0, 1, 0, 8, 0, 2, 0],
        [0, 0, 0, 0, 0, 0, 3, 0, 0],
        [9, 0, 7, 0, 0, 0, 0, 0, 1],
        [0, 2, 0, 7, 0, 0, 4, 0, 0],
        [0, 0, 5, 0, 0, 6, 0, 0, 0],
        [0, 0, 0, 0, 4, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0, 0, 7]
    ],
    [
        [5, 0, 0, 0, 3, 0, 0, 0, 0],
        [0, 0, 2, 8, 0, 0, 0, 0, 4],
        [0, 1, 0, 0, 0, 0, 0, 0, 5],
        [0, 0, 0, 0, 2, 4, 0, 0, 0],
        [0, 9, 0, 0, 0, 7, 0, 0, 0],
        [8, 0, 0, 6, 0, 0, 0, 0, 0],
        [4, 0, 0, 0, 0, 0, 0, 2, 0],
        [0, 0, 0, 3, 0, 0, 6, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 8, 0]
    ],
    [
        [0, 0, 0, 0, 0, 1, 0, 0, 0],
        [4, 0, 0, 9, 0, 0, 2, 0, 0],
        [0, 5, 0, 2, 0, 0, 0, 0, 7],
        [0, 0, 3, 0, 0, 0, 1, 6, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 8, 5, 0, 0, 0, 3, 0, 0],
        [9, 0, 0, 0, 0, 2, 0, 1, 0],
        [0, 0, 6, 0, 0, 5, 0, 0, 9],
        [0, 0, 0, 1, 0, 0, 0, 0, 0]
    ],
    [
        [0, 0, 0, 0, 0, 0, 0, 0, 7],
        [0, 1, 0, 0, 0, 8, 6, 0, 5],
        [0, 0, 7, 0, 0, 1, 0, 0, 0],
        [3, 0, 0, 4, 6, 0, 0, 5, 0],
        [5, 0, 0, 3, 0, 0, 0, 0, 0],
        [0, 0, 0, 8, 0, 0, 3, 0, 0],
        [9, 0, 0, 0, 5, 0, 7, 0, 0],
        [1, 2, 0, 9, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 4, 0, 0]
    ],
    [
        [8, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 3, 6, 0, 0, 0, 0, 0],
        [0, 7, 0, 0, 9, 0, 2, 0, 0],
        [0, 5, 0, 0, 0, 7, 0, 0, 0],
        [0, 0, 0, 0, 4, 5, 7, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 3, 0],
        [0, 0, 1, 0, 0, 0, 0, 6, 8],
        [0, 0, 8, 5, 0, 0, 0, 1, 0],
        [0, 9, 0, 0, 0, 0, 4, 0, 0]
    ],
    [
        [1, 0, 0, 0, 0, 7, 0, 0, 0],
        [0, 5, 0, 0, 3, 0, 0, 0, 0],
        [0, 0, 9, 0, 0, 0, 8, 0, 4],
        [0, 4, 0, 0, 2, 0, 0, 0, 0],
        [5, 0, 0, 0, 0, 0, 0, 0, 9],
        [0, 0, 0, 0, 4, 0, 0, 1, 0],
        [2, 0, 7, 0, 0, 0, 5, 0, 0],
        [0, 0, 0, 0, 8, 0, 0, 9, 0],
        [0, 0, 0, 4, 0, 0, 0, 0, 3]
    ],
    [
        [0, 0, 0, 0, 0, 0, 0, 2, 7],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 3, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 6],
        [7, 0, 0, 0, 0, 4, 0, 0, 0],
        [0, 5, 8, 6, 3, 0, 0, 0, 0],
        [0, 1, 3, 2, 6, 0, 0, 0, 0],
        [4, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 8, 0, 0]
    ],
  ];

/*
getRandomPuzzle Function:
This function selects a random Sudoku puzzle from the puzzles array.
*/
  // Function to select a random puzzle from the puzzles array
  function getRandomPuzzle() {
    const randomIndex = Math.floor(Math.random() * puzzles.length);
    return puzzles[randomIndex];
  }

/*
generateSimpleSudoku Function:
This function generates a random Sudoku puzzle by selecting one from the puzzles array. It creates a deep copy of the selected puzzle.
The line JSON.parse(JSON.stringify(puzzle)) is used to create a deep copy of a JavaScript object or array, in this case, the puzzle array. Let's break down what happens step by step:
JSON.stringify(puzzle):
The JSON.stringify() function converts a JavaScript object or array into a JSON-formatted string.
In this context, puzzle is an array representing a Sudoku puzzle.
JSON.parse(...):
The JSON.parse() function takes a JSON-formatted string and converts it back into a JavaScript object or array.
When you combine these two functions, as in JSON.parse(JSON.stringify(puzzle)), you effectively create a new object or array that is a deep copy of the original puzzle array. This is a common technique used to clone objects or arrays in JavaScript when you want to work with a separate copy and avoid modifying the original data. Deep copying ensures that nested objects or arrays are also duplicated, so changes to the copy won't affect the original data.
*/
  // Function to generate a simple Sudoku puzzle locally
  function generateSimpleSudoku() {
    const puzzle = getRandomPuzzle();
    // Create a deep copy of the puzzle array using JSON.parse and JSON.stringify
    return JSON.parse(JSON.stringify(puzzle));
}

/*
Event Handlers for Buttons:
These lines get references to the "GetPuzzle" and "SolvePuzzle" buttons in the HTML.
*/
let GetPuzzle = document.getElementById('GetPuzzle')
let SolvePuzzle = document.getElementById('SolvePuzzle')

/*
Event Handling for "GetPuzzle" Button:
When the "GetPuzzle" button is clicked, this function generates a random Sudoku puzzle using generateSimpleSudoku and fills the HTML grid using FillBoard.
*/
GetPuzzle.onclick = function(){
    board = generateSimpleSudoku();
    FillBoard(board)
}

/*
Event Handling for "SolvePuzzle" Button:
When the "SolvePuzzle" button is clicked, it calls the sudokuSolver function to solve the Sudoku puzzle.
*/
SolvePuzzle.onclick = () => {
    sudokuSolver(board, 0, 0, 9);
};

/*
isValid Function:
This function checks if it's valid to place the number num in the specified row and column of the Sudoku board, based on Sudoku rules (no repeated numbers in the same row, column, or 3x3 subgrid).
*/
function isValid(board, row, column, num, boardSize){   /* This line defines a function named isValid that takes five parameters: board (a 2D Sudoku board represented as an array), row and column (the current position within the board), num (the number to be checked for validity), and boardSize (the size of the Sudoku board, which is typically 9 for a standard 9x9 Sudoku). */
    // row check and column check
    for(let var1 = 0; var1 < boardSize; var1++){    /* This begins a loop that iterates through all the rows and columns in the Sudoku board. */
        if((board[row][var1] == num) || (board[var1][column] == num)){  /* Inside the loop, this line checks if the num being tested is already present in the current row (board[row][var1]) or the current column (board[var1][column]). If num is found in either the row or the column, it returns false, indicating that the number is not valid in this position. */
            return false;
        }
    }

    // submatrix check
    let squareRootValue = Math.sqrt(boardSize);  // The sqrt function returns a floating-point result, but you need an integer value to calculate the starting row and column indices.
                                                // This section of code calculates the square root of boardSize, which is used to determine the dimensions of each submatrix in the Sudoku board. The Math.sqrt() function returns a floating-point number, but it will be converted to an integer later to get the actual submatrix dimensions.
    /*
    These lines calculate the indices at which the current submatrix starts, based on the current position (row, column) and the submatrix dimensions.
    */
    let startingRowIndexOfSubMatrix = row - (row % squareRootValue);
    let startingcolumnIndexOfSubMatrix = column - (column % squareRootValue);
    /* These nested loops iterate through the cells of the current submatrix. */
    for(let var1 = startingRowIndexOfSubMatrix; var1 < startingRowIndexOfSubMatrix + squareRootValue; var1++){
        for(let var2 = startingcolumnIndexOfSubMatrix; var2 < startingcolumnIndexOfSubMatrix + squareRootValue; var2++){
            if(board[var1][var2] == num){   // Inside the submatrix loop, it checks if num is already present in the current submatrix.
                return false;   // If num is found in the submatrix, it returns false, indicating that the number is not valid in this position.
            }
        }
    }
    return true;    // If num passes all checks and is not found in the current row, column, or submatrix, the function returns true, indicating that it is a valid number for the current position.
}


function sudokuSolver(board, row, column, boardSize){   // This line defines a function named sudokuSolver that takes four parameters: board (a 2D Sudoku board represented as an array), row and column (the current position within the board), and boardSize (the size of the Sudoku board).
    /* This is the base case of the Sudoku-solving recursion. It checks if the row index has reached the boardSize, which means all rows have been filled. If this condition is met, it calls the FillBoard function to display the solved Sudoku board and returns true to indicate success. */
    // base case
    if(row == boardSize){
        FillBoard(board)
        return true;
    }

    /* If the column index has reached the boardSize, it means we have completed the current row and need to move to the next row. It recursively calls sudokuSolver for the next row (row+1) and the first column (0). */
    // if we are not inside the board
    if(column == boardSize){
        return sudokuSolver(board, row+1, 0, boardSize);
    }

    /* If the current cell is already filled (not equal to 0), it simply moves to the next column by recursively calling sudokuSolver. */
    // if cell is already filled -> just move ahead
    if(board[row][column] != 0){
        return sudokuSolver(board, row, column+1, boardSize);
    }

    /*
    This loop iterates from 1 to 9, attempting to fill the current cell with numbers from 1 to 9.
    Within the loop, it checks if the current number num can be placed in the current cell using the isValid function.
    If it's a valid placement, it sets board[row][column] to num and recursively calls sudokuSolver for the next column.
    If the recursive call (subAns) returns true, it means the Sudoku puzzle was successfully solved, so it returns true to the caller.
    If the recursive call returns false, it means the current placement did not lead to a solution, so it backtracks by setting the cell value back to 0 and continues with the next number in the loop.
    If none of the numbers in the loop lead to a solution, it returns false to indicate that this placement is not valid, and the algorithm backtracks further.
    */
    // we try to fill the cell with an appropriate number
    for(let num = 1;num <= 9;num++){
        // check is num can be filled
        if(isValid(board, row, column, num, boardSize)){
            board[row][column] = num;
            let subAns = sudokuSolver(board, row, column+1,boardSize);
            if(subAns){
                return true;
            }
            // backtracking -> undo the change
            board[row][column] = 0;
        }
    }
    return false;
}