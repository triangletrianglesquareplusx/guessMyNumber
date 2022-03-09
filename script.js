'use strict';
/*let messageElement = document.querySelector('.message');
messageElement.textContent = 'you did it';*/
let buttonElement = document.querySelector('.check').addEventListener('click',()=>{
    let guessElement = document.querySelector('.guess');
    if(guessElement.value == 3){
        let messageElement = document.querySelector('.message');
        messageElement.textContent = 'yes!';
    }
});