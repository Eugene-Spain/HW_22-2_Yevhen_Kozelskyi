const RED = 1;
const BLACK = 2;

let black = "Black"
let red = "Red"

let requestBalance = prompt("Welcome to casino 'R U Lucky?' How much money do you have? (Minimum '200' and Maximum '1000')")
let requestSafety = prompt("How safe do you want to play? '1' - Just crazy risks , '2' - Risky, '3' - Safe, '4' - Super safe")
let currentBid = requestBalance / (requestSafety*2)

while (requestBalance >= 0) {
    if (requestBalance >= 2000) {
        alert(`Congratulations!!!! You won and now you have got ${requestBalance} $ in total!`)
        break;
    } else if(requestBalance > 50) {
        let requestColor = prompt("Make a bid. 'Black' or 'Red'?")
        if (requestColor === black) {
            const CASINO = Math.floor(Math.random() * 2)+1;
            console.log(CASINO)
            requestColor = BLACK
            requestBalance -= currentBid
            if (CASINO === BLACK) {  // да я понял что можно const RED и BLACK убирать, и просто выводить !CASINO либо !!CASINO , но как по мне то с переменными просто понятнее))
                currentBid *= 2;
                requestBalance += currentBid
                console.log(requestBalance)
                continue;
            } else {
                currentBid+=10
                console.log(requestBalance)
                if(requestBalance <=200){
                    alert(`${requestBalance} is all what you left. Be careful`)
                    continue;
                }
                
            }
        } else if (requestColor === red) {
            const CASINO = Math.floor(Math.random() * 2);
            console.log(CASINO)
            requestColor = RED
            requestBalance -= currentBid
            if (CASINO === RED) {
                currentBid *= 2;
                requestBalance += currentBid
                console.log(requestBalance)
                continue;
            } else {
                currentBid+=10
                console.log(requestBalance)
                if(requestBalance <=200){
                    alert(`${requestBalance} is all what you left. Be careful`)
                    continue;
                }
                
            }
        }
    } else {
        alert('Stop playing, or you will lose everything')
        break;
    }

}