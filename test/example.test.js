// IMPORT MODULES under test here:
import { didUserWin } from '../utils.js';

const test = QUnit.test;

test('didUserWin should return win1 if the userChoice is 1 and the computerChoice is 0 ', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const userChoice = 1;
    const computerChoice = 0;
    const expected = 'win1';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin(userChoice, computerChoice);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
