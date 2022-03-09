'use strict';
/*let messageElement = document.querySelector('.message');
messageElement.textContent = 'you did it';*/
document.querySelector('.again').addEventListener('click', ()=>{
    let score = 20;
});

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let scoreElement = document.querySelector('.score');

    let buttonElement = document.querySelector('.check').addEventListener('click',()=>{
        let guess = Number(document.querySelector('.guess').value);
        
        if(score > 1){
            if(guess === secretNumber){
                document.querySelector('.message').textContent = 'Correct number!';
                document.querySelector('body').style.backgroundColor = 'green';
                document.querySelector('.number').style.width = '30rem';
            }else{
                if(!guess){
                    document.querySelector('.message').textContent = 'No number has been input!';
                    
                }else if(guess > secretNumber){
                    document.querySelector('.message').textContent = 'Too high';
                }else if(guess < secretNumber){
                    document.querySelector('.message').textContent = 'Too low';
                }
                score--;
                scoreElement.textContent = score;
            }
        }else{
            document.querySelector('.message').textContent = 'You lost!';
            scoreElement.textContent = 0;
        }


        
        
});

//document.querySelector('.number').textContent = secretNumber;
