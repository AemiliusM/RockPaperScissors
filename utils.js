export function didUserWin(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'draw';
    } else if (userChoice === 0 && computerChoice === 1) {
        return 'loss0';
    } 
    else if (userChoice === 1 && computerChoice === 0) {
        return 'win1';
    } 
    else if (userChoice === 1 && computerChoice === 2) {
        return 'loss1'; 
    } 
    else if (userChoice === 2 && computerChoice === 1) {
        return 'win2';
    } 
    else if (userChoice === 2 && computerChoice === 0) {
        return 'loss2';
    } 
    else  
        return 'win0';
    
}