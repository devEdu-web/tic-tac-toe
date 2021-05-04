let score1 = 0   // o
let score2 = 0   // x
document.addEventListener('DOMContentLoaded', ()=>{
    let squares = document.querySelectorAll('.square')
    let player1 = document.getElementById('score1')
    let player2 = document.getElementById('score2')
    squares.forEach((square)=>{
        square.addEventListener("click", (event)=>{
            // console.log(event.target)

            let square = event.target
            let position = square.id

            if(Move(position)){
                let squares = document.querySelectorAll('.square')
                setTimeout(()=>{
                    // alert("O jogo acabou - O vencedor foi " + playerTime)
                    

                    
                    
                    if(playerTime == 0) { //player 1 ganha (x)
                        alert("O jogador 1 venceu")
                        score2+= 1
                        player2.innerHTML = score2
                    } else{
                        alert("O jogador 2 venceu")
                        score1+=1
                        player1.innerHTML = score1
                    }
                    

                    for(let i = 0; i < board.length; i++) {
                        board[i] = ''
                        squares.forEach((square)=>{
                            square.innerHTML = ''
                        })
                    }
                    
                    gameOver = false

                }, 10)

                
            }  else if(chequeDraw()){
                setTimeout(()=>{
                    alert("Empatou!")
                    for(let i = 0; i < board.length; i++) {
                        board[i] = ''
                    }
                
                    squares.forEach((square)=>{
                        square.innerHTML = ''
                    })
                
                }, 10)
            }

            update()
            
        })
    })

})


function update() {
    let squares = document.querySelectorAll('.square')

    squares.forEach((square) => {
        let position = square.id
        let symbol = board[position]

        if(symbol != '') {
            square.innerHTML = `<div class="${symbol}"></div>`
        }

    })

}


function reset() {
    let player1 = document.getElementById('score1')
    let player2 = document.getElementById('score2')
    let squares = document.querySelectorAll('.square')


    for(let i = 0; i < board.length; i++) {
        board[i] = ''
    }

    squares.forEach((square)=>{
        square.innerHTML = ''
    })
    score1 = 0;
    score2 = 0;
    player1.innerHTML = score1
    player2.innerHTML = score2

    playerTime = 0;
    gameOver = false

    // console.log(score1, score2)
    // update()

}