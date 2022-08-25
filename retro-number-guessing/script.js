'use strict';

let number = 20
let score = 20
let highScore = 0;
// number = Number(prompt('how hight you want the score to be'));
// console.log(number);
// score = number;
const genRand = (num) =>{
   return Math.trunc(Math.random() * num)+1
};
const msg = (message) =>{
    document.querySelector('.message').textContent = message
}
const currentScore = (score) => {
    document.querySelector('.score').textContent = score;
}
const numberStyle = (width) => {
    document.querySelector('.number').style.width = win
}
const bodyColor = (color) => {
    document.querySelector('body').style.backgroundColor = color
}


//** DOM

document.querySelector('.check').addEventListener('click', _event=>{
    const guess = Number(document.querySelector('.guess').value);
    // 
    if (!guess){
        msg('No Number');

        //** winning in-line style
    } else if  (guess === number){
        msg('Number is correct');
        bodyColor('#60b347');
        numberStyle('30rem');
        if ( score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
      
    } else if ( guess !== number){
        //** ternary 
        if(score > 0){
            msg( guess > number ?'Number is too high' : 'Number is too low');
        score--;
        currentScore(score);
    } else {
        msg('you lost the game');
    }}})

 document.querySelector('.again').addEventListener('click',_event=>{
    score = 20
    number = genRand(num)
    msg('Start Guessing...');
    currentScore(score);
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    bodyColor('#222');
    numberStyle('15rem');
})