'use strict';
let score = 20;
let scoreElement = document.querySelector('.score');
let messageElement = document.querySelector('.message');
let guessElement = document.querySelector('.guess');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let bodyElement = document.querySelector('body');
let numberElement = document.querySelector('.number');
let highScore = 0;
let displayMessage = (message)=>{
    messageElement = document.querySelector('.message');
    messageElement.textContent = message;
}
//implementing again button!
document.querySelector('.again').addEventListener('click', ()=>{
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    numberElement.textContent = '?';
    scoreElement.textContent = score;
    displayMessage('Start guessing...');
    guessElement.value = '';
    bodyElement.style.backgroundColor = '#222';
    numberElement.style.width = '15rem';

});

secretNumber = Math.trunc(Math.random() * 20) + 1;

score = 20;


    let buttonElement = document.querySelector('.check').addEventListener('click',()=>{
    let guess = Number(guessElement.value);
        
        if(score > 1){
            if(guess === secretNumber){
                displayMessage('Correct number!');
                bodyElement.style.backgroundColor = '#60b347';
                numberElement.style.width = '30rem';
                numberElement.textContent = secretNumber;
                if(score > highScore){
                    highScore = score;
                    let highsScoreElement = document.querySelector('.highscore');
                    highsScoreElement.textContent = highScore;
                }
            }else{
                if(!guess){
                    displayMessage('No number has been input!');
                    
                }else if(guess > secretNumber){
                    displayMessage('Too high');
                }else if(guess < secretNumber){
                    displayMessage('Too low');
                }
                score--;
                scoreElement.textContent = score;
            }
        }else{
            displayMessage('You lost!');
            scoreElement.textContent = 0;
        }


        
        
});

//document.querySelector('.number').textContent = secretNumber;
