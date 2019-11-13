const readline = require('readline-sync')


class HumanPlayer {
    constructor(name, sym){
        this.name = name
        this.sym = sym
    }
    getMove(){
        return readline.question("what is your move? " + this.name)
    
    }

}
module.exports = HumanPlayer


// let sonic = new HumanPlayer("sonic", "X") 
// console.log(sonic)
// console.log(sonic.getMove())

// CLASS TYPES FOR TIC TAC TOE
// 1) Board - placeMark (will take in a symbol and a location), 
//            - isValid move function
//             - findWinner
//                -  isGameOver
//              - displayBoard

// 2) Rules
// 3) Human player (getmove)

// 4) Game 
// - take turn
// - swtich CurrentPlayer
// - playMethod (while a game is not over, we can have currentPlayer take turn)
