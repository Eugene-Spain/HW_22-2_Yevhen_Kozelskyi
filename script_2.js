const RED = 1;
const BLACK = 2;

let black = "black"
let red = "red"

let requestBalance = + prompt("Welcome to casino 'R U Lucky?' How much money do you have? (Minimum '200' and Maximum '1000')")
let requestSafety = + prompt("How safe do you want to play? '1' - Just crazy risks , '2' - Risky, '3' - Safe, '4' - Super safe")
let currentBid = requestBalance / (requestSafety * 2)

function turnRoulette(color) {
    const CASINO = Math.floor(Math.random() * 2) + 1;
    if (CASINO === color) {
        requestBalance += currentBid
        alert(`You have won ${currentBid} ! Your balance now is ${requestBalance} $. `)
    } else {
        requestBalance -= currentBid
        if (requestBalance > 200) {
            alert(`You have lost ${currentBid} ! Your balance now is ${requestBalance} $. `)
            let requestIncreaseBid = prompt(`Would you like to put more money in a bid? Option 0. You may increase it on 50%. Option 1. Don't increase anything. Insert '0' or '1' `) // ну под 0 и 1 не забивал переменные)
            if (requestIncreaseBid) {
                currentBid *= 1.5
                alert(`Your bid was increased and now is ${currentBid} $`)
            } else if (!requestIncreaseBid) {
                alert(`Your bid was not increased and still ${currentBid} $`)
            }
        } else if (requestBalance <= 200 && requestBalance > 0) {
            alert(`${requestBalance} is all what you left. Be careful. You can't increase your bid now.`)
            
        } else if (requestBalance <= 0) {
            alert(`You have lost all your money... We are sorry. Your balance is 0$.`)
        }
    }
}

while (requestBalance >= 0) {
    if (requestBalance >= 2000) {
        alert(`Congratulations!!!! You won and now you have got ${requestBalance} $ in total!`)
        break;
    } else if (requestBalance > 50) {
        let requestColor = prompt(`Make a bid. ${black} or ${red}?`)
        if (requestColor === black) {
            turnRoulette(BLACK)

        } else if (requestColor === red) {
            turnRoulette(RED)
        }
    } else {
        alert('Stop playing, or you will lose everything')
        break;
    }
}