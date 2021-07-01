export function didUserWin(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'draw';
    } else if (userChoice === 0 && computerChoice === 1) {
        return 'loss';
    } 
    else if (userChoice === 1 && computerChoice === 0) {
        return 'win';
    } 
    else if (userChoice === 1 && computerChoice === 2) {
        return 'loss'; 
    } 
    else if (userChoice === 2 && computerChoice === 1) {
        return 'win';
    } 
    else if (userChoice === 2 && computerChoice === 0) {
        return 'loss';
    } 
    else  
        return 'win';
    
}