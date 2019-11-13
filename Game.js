const HumanPlayer = require("./HumanPlayer.js")
const Board = require("./Board.js")
class Game{
    constructor(player1, player2){
        this.player1 = player1
        this.player2 = player2
        this.currentPlayer = player1
        this.board = new Board()
    }
    switchPlayer(){
    if (this.currentPlayer === this.player1) {
        this.currentPlayer = this.player2   

    } else {
        this.currentPlayer=this.player1
    }
}
    gameOver() {
        return this.board.findWinner()
        }
    play(){
        while(!this.gameOver()){
            console.clear()
            this.board.displayBoard()
            let move = false
            while(!this.board.isValidMove(move)){
                move = this.currentPlayer.getMove()
            }
            this.board.placeMark(this.currentPlayer.sym, move)
            this.switchPlayer()
        }
        if (this.board.winner === this.player1.sym){
            console.log(this.player1.name + " wins!!!")
        } else if (this.board.winner === this.player2.sym) {
            console.log(this.player2 + "wins!!!")

        }else{
            console.log("TIE GAME!!!!!!!!!")
        }
    }
}
let game = new Game(new HumanPlayer("Sunny2", "X") , new HumanPlayer("Rafid", "O"))
console.log(game.play())
