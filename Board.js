class Board{
    constructor(){
    this.board = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    this.movesRemaining = 9 
    this.winner = undefined
    this.MOVES = {
        1: [0, 0],
        2: [0, 1],
        3: [0, 2],
        4: [1, 0],
        5: [1, 1],
        6: [1, 2],
        7: [2, 0],
        8: [2, 1],
        9: [2, 2]
        }
     }
     isValidMove(move){ // we'll get move from the user as a string number
         if(!this.MOVES[move]) return false // this is saying if the move is not a possible move, then return false. 
         let [row,col] = this.MOVES[move]
            // let row = this.MOVES[move][0]
            // let col = this.MOVES[move][1]
            return typeof this.board[row][col] !== "string"
         }

        placeMark(sym, move){
            // should place symbol on board and decrement moves remaining
            let [row, col] = this.MOVES[move]
            this.board[row][col] = sym
            this.movesRemaining -- 
        
        }
        findWinner() {
            this.isHorizontal()
            this.isVertical()
            this.isDiagonal()
            if (this.movesRemaining === 0 && !this.winner){
                this.winner = "tie"
            }
            return this.winner
            

        }
        isHorizontal(board = this.board){ // take in a board but default to this.board if none is given
            // return the sym of winner if there is one else return undefined. 
            board.forEach(row => {
                if(row.every(el => el === row[0])){
                    this.winner = row[0]
                }
            })
            return this.winner
        }
        isVertical(){
            let transposed = this.transpose()
            return this.isHorizontal(transposed)
        }
        isDiagonal(){
           // if(this.board[0][0] === this.board[1][1] === this.board [2][2])
           let leftDown = []
           let rightDown = []
            for (let i = 0; i< this.board.length; i++){
                leftDown.push(this.board[i][i])
                rightDown.push(this.board[this.board.length-i-1][i])
            }
            if(leftDown.every(el=>el===leftDown[0])){
                this.winner = leftDown[0]
            }
            if(rightDown.every(el=>el===rightDown[0])){
                this.winner = rightDown[0]
            }
            return this.winner


        }
        transpose() {
            let dup = [];
            this.board.forEach((row, i) => {
              dup[i] = [];
              row.forEach((_, j) => {
                dup[i][j] = this.board[j][i]
              })
            })
            return dup
          }
            displayBoard(){
                this.board.forEach((row, i) => {
                    console.log(row.join("|"))
                    console.log("-----")
                    if(i !== this.board.length-1){
                        console.log("-----")
                    }
                })
            }
          
        }
        module.exports = Board
        // let Board2 = new Board()
        // console.log(Board2.displayBoard())



