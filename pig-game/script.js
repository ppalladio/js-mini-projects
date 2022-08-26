'use strict';
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
//**current score*/
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
//**buttons */
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores = [0,0]
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let isActive = true;

//**switch player functionality */
const playerSwithcer = () => {
    document.getElementById(`current--${player}`).textContent = 0    
    player = player === 0 ? 1 : 0 
    currentScore = 0;
    //** if the class is not there, then add it */
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}
let currentScore = 0;
let player = 0;

btnRoll,addEventListener('click',_event => {
    //** generate random roll*/
    if (isActive){
    const dice = Math.trunc(Math.random() * 6) + 1

    //** display the dice*/
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`
    //**check for value === 1 */
    if (dice !==1 ){
        currentScore += dice;
        document.getElementById(`current--${player}`).textContent = currentScore
       
    } else { 
    
        playerSwithcer()
}}
})

btnHold.addEventListener('click',_event => {
    //** add current score */
    scores[player] += currentScore
    document.getElementById(`score--${player}`).textContent = scores[player]

    //**check score >=100 */
    if(scores[player] >= 10) {
        isActive = false;
        document.querySelector(`.player--${player}`).classList.add('player--winner');
        document.querySelector(`.player--${player}`).classList.remove('player--active');
        diceEl.classList.add('hidden');
    }else{
        playerSwithcer();
    }

    //** */
    
})

btnNew.addEventListener('click',_event => {
    scores = [0,0];
    player = 0;
    isActive = true;
    currentScore = 0;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    diceEl.classList.add('hidden');
    
})