'use strict';

const number = Math.trunc(Math.random() * 20)+1
let score = 20
addEventListener('click', _event=>{
    const guess = Number(document.querySelector('.guess').value);
    if (!guess){
        document.querySelector('.message').textContent = 'No Number';
    } else if  (guess === number){
        document.querySelector('.message').textContent = 'Number is correct';
    } else if ( guess > number){
        if(score > 0){
        document.querySelector('.message').textContent = 'Number is too high'
        score--;
        document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message').textContent = 'you lost the game';
    }}
    else if (guess < number){
        document.querySelector('.message').textContent = 'Number is too low'
        score--;
        document.querySelector('.score').textContent = score;
 }})