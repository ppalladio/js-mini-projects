'use strict';

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

const scores = [0,0]
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;
let player = 0

btnRoll,addEventListener('click',_event => {
    //** generate random roll*/
    const dice = Math.trunc(Math.random() * 6) + 1

    //** display the dice*/
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`
    //**check for value === 1 */
    if (dice !==1 ){
        currentScore += dice;
        current0El.textContent = currentScore;
    } else {

    }
})