// import functions and grab DOM elements
import { didUserWin } from './utils.js';
const battleButton = document.getElementById('Battle-btn');
const winSpan = document.getElementById('wins');
const lossesSpan = document.getElementById('losses');
const drawSpan = document.getElementById('draws');
// initialize state
let wins = 0;
let losses = 0;
let draws = 0;
// set event listeners 
battleButton.addEventListener('click', () => {
    const selected = document.querySelector('input[type=radio]:checked');
  
    const userChoice = Number(selected.value);
    let computerChoice = 0;
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 1) {
        computerChoice = 1;
    } if (randomNum === 2) { 
        computerChoice = 2;
    } console.log(typeof computerChoice);
    console.log(randomNum);
    console.log(typeof userChoice);
    console.log(selected);
    const isWinner = didUserWin(userChoice, computerChoice);
    console.log(isWinner);
    if (isWinner === 'win'){
        wins++;
    } else if (isWinner === 'loss'){
        losses++;
    } else 
        draws++;
    winSpan.textContent = wins;
    lossesSpan.textContent = losses;
    drawSpan.textContent = draws;
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
