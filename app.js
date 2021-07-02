// import functions and grab DOM elements
import { didUserWin } from './utils.js';
const battleButton = document.getElementById('Battle-btn');
const rockWinSpan = document.getElementById('rock-wins');
const rockLossesSpan = document.getElementById('rock-losses');
const paperWinSpan = document.getElementById('paper-wins');
const paperLossesSpan = document.getElementById('paper-losses');
const scissorsWinSpan = document.getElementById('scissors-wins');
const scissorsLossesSpan = document.getElementById('scissors-losses');
const drawSpan = document.getElementById('draws');
const resetBtn = document.getElementById('reset');
// initialize state
let wins0 = 0;
let losses0 = 0;
let wins1 = 0;
let losses1 = 0;
let wins2 = 0;
let losses2 = 0;
let draws = 0;
// set event listeners 
resetBtn.addEventListener('click', () => {
    location.reload();
});
battleButton.addEventListener('click', () => {
    const selected = document.querySelector('input[type=radio]:checked');
  
    const userChoice = Number(selected.value);
    let computerChoice = 0;
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 1) {
        computerChoice = 1;
    } if (randomNum === 2) { 
        computerChoice = 2;
    } 
    const isWinner = didUserWin(userChoice, computerChoice);
    
    if (isWinner === 'win0'){
        wins0++;
    } else if (isWinner === 'loss0'){
        losses0++;
    } if (isWinner === 'win1'){
        wins1++;
    } else if (isWinner === 'loss1'){
        losses1++;
    } if (isWinner === 'win2'){
        wins2++;
    } else if (isWinner === 'loss2'){
        losses2++;
    }  
    else 
        draws++;

    rockWinSpan.textContent = wins0;
    rockLossesSpan.textContent = losses0;
    paperWinSpan.textContent = wins1;
    paperLossesSpan.textContent = losses1;
    scissorsWinSpan.textContent = wins2;
    scissorsLossesSpan.textContent = losses2;
    drawSpan.textContent = draws;
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
