#include <iostream>
#include <math.h>
using namespace std;

void print(int board[][9], int boardSize){
    for(int row = 0;row < boardSize;row++){
        for(int column = 0;column < boardSize;column++){
            cout << board[row][column] << " ";
        }
        cout << endl;
    }
    cout << endl;
}

bool isValid(int board[][9], int row, int column, int num, int boardSize){
    // row check and column check
    for(int var = 0; var < boardSize; var++){
        if((board[row][var] == num) || (board[var][column] == num)){
            return false;
        }
    }

    // submatrix check
    int squareRootValue = sqrt(boardSize);  // The sqrt function returns a floating-point result, but you need an integer value to calculate the starting row and column indices.
    int startingRowIndexOfSubMatrix = row - (row % squareRootValue);
    int startingcolumnIndexOfSubMatrix = column - (column % squareRootValue);
    for(int var1 = startingRowIndexOfSubMatrix; var1 < startingRowIndexOfSubMatrix + squareRootValue; var1++){
        for(int var2 = startingcolumnIndexOfSubMatrix; var2 < startingcolumnIndexOfSubMatrix + squareRootValue; var2++){
            if(board[var1][var2] == num){
                return false;
            }
        }
    }
    return true;
}

bool sudokuSolver(int board[][9], int row, int column, int boardSize){
    // base case
    if(row == boardSize){
        print(board, boardSize);
        return true;
    }

    // if we are not inside the board
    if(column == boardSize){
        return sudokuSolver(board, row+1, 0, boardSize);
    }

    // if cell is already filled -> just move ahead
    if(board[row][column] != 0){
        return sudokuSolver(board, row, column+1, boardSize);
    }

    // we try to fill the cell with an appropriate number
    for(int num = 1;num <= 9;num++){
        // check is num can be filled
        if(isValid(board, row, column, num, boardSize)){
            board[row][column] = num;
            bool subAns = sudokuSolver(board, row, column+1,boardSize);
            if(subAns){
                return true;
            }
            // backtracking -> undo the change
            board[row][column] = 0;
        }
    }
    return false;
}

int main(){
    int boardSize = 9;
    int board[9][9] = {
        {0, 0, 7, 1, 0, 0, 0, 6, 0},
        {1, 0, 5, 2, 0, 8, 0, 0, 0},
        {6, 0, 0, 0, 0, 7, 1, 2, 0},
        {3, 1, 2, 4, 0, 5, 0, 0, 8},
        {0, 0, 6, 0, 9, 0, 2, 0, 0},
        {0, 0, 0, 0, 0, 3, 0, 0, 1},
        {0, 0, 1, 0, 0, 4, 9, 8, 6},
        {8, 0, 3, 9, 0, 6, 0, 0, 0},
        {0, 6, 0, 0, 8, 2, 7, 0, 3}
    };
    sudokuSolver(board, 0, 0, boardSize);
    return 0;
}
