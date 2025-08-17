let allButtons = document.querySelectorAll('.buttons')[0].children
const getChoice = (e) =>{
                getHumanChoice(e.target.value)
            }
const getHumanChoice = (choice) => {
    startGame(choice,getCPUChoice())
}

const getCPUChoice = ()  => {
    let choices = ['rock','paper','scissors']
    let randNum = Math.floor(Math.random() * 3)
    return choices[randNum]
}

const startGame = (human,cpu) => {
    let gameContainer = document.querySelector(".gameContainer")
    let cpuText = document.createElement('p')
    let winnerText = document.createElement('p')
    let playAgainButton = document.createElement('button')
    buttons('disable')
    cpuText.textContent = `Your opponent has chosen ${cpu}`
    gameContainer.appendChild(cpuText)

    winnerText.textContent = getWinner(human,cpu)
    gameContainer.appendChild(winnerText)

    playAgainButton.textContent ='Play Again!'
    gameContainer.appendChild(playAgainButton)
    playAgainButton.addEventListener('click', () => {
        playAgain()
    })
}

const getWinner = (human,cpu) => {
    
    if(human === cpu){
        return "It's a tie!!!!"
    }

    if(human === 'rock'){
        if(cpu == 'paper'){
            return 'You lose!!'
        }else{
            return 'You win!!'
        }
    }else if(human === 'paper'){
        if(cpu == 'scissor'){
            return 'You lose!!'
        }else{
            return 'You win!!'
        }
    }else if(human === 'scissors'){
        if(cpu == 'rock'){
            return 'You lose!!'
        }else{
            return 'You win!!'
        }
    }
}

const buttons = (str) => {

    if(str === 'start'){
        for(let i =0; i< allButtons.length; i++ ){
            allButtons[i].addEventListener('click',getChoice,true)
            allButtons[i].disabled = false
        }
    }else if(str === 'disable'){
       for(let i =0; i< allButtons.length; i++ ){
        allButtons[i].removeEventListener('click',getChoice,true)
        allButtons[i].disabled = true
        }  
    }
}

const playAgain = () => {
    buttons('start')
    document.querySelector('.gameContainer').replaceChildren([])

}

buttons('start')



