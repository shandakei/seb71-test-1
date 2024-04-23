//game state globals
let secretNumber = Math.floor(Math.random() * 9) +1
let guessCounter = 0

const choicesElems = document.querySelectorAll(".choices button")
const messageElem = document.querySelector('.message')
const replayBtn = document.querySelector('.replay-btn')
const guessCounterElem = document.querySelector('.guess-counter')

for (let choiceElement of choicesElems) {
    choiceElement.addEventListener('click', handleGuess)
}

function handleGuess(event) {
    const elem = event.target
    // const userGuess = Number(elem.innerText)
    const userGuess = Number(elem.dataset.num) //for <button data-" -type- "=" -data- " ></button>
    
    elem.disabled = true


    if (userGuess === secretNumber) {
        messageElem.innerText = `You got it! It was ${userGuess}! Winning!`
        // let replayBtn = document.createElement('button')
        // replayBtn.innerText = "Play Again"
        replayBtn.style.visibility = 'visible'
        replayBtn.addEventListener('click', resetGame)
    }else {
        messageElem.innerText = `Nah, it wasn't ${userGuess}. You suck lol! Try again`
        // Number('.triesCount.innerText') = Number('.triesCount.innerText') + Number(1)
        // triesCount.innerText = Number(`triesCount.innerText`)++
    }
    guessCounter++
    guessCounterElem.innerText = guessCounter
}



const resetGame = () => {

    replayBtn.style.visibility = 'hidden';
    messageElem.innerText = "";
    secretNumber = Math.floor(Math.random() * 9) + 1;
    
    guessCounter = 0                                        //set variable first
    guessCounterElem.innerText = guessCounter               //before defining it in the DOM and sending it over

    let numBtns = document.querySelectorAll('.choices button')      //that's fine but..
    numBtns.forEach(button => {                                     //you need to cycle through each target, thus forEach()
        button.disabled = false;

    // DT                                                           //literally meant for cycling
    // for let elem of choicesElems) {
    //     elem.disabled - false;
    // }
    }) 
}



//find way to restart game. You can refresh page using js 
//method but try find another way

//get better at using forEach()
