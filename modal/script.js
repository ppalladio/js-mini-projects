'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
// **!!typeof btnOpenModal = object .map does not work

for (let i = 0; i < btnOpenModal.length; i++) {
    btnOpenModal[i].addEventListener('click', _event => {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    }
    )}    

const closeModal= _event => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');

}
btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click',closeModal)

document.addEventListener('keydown', e => {
    if (e.key === 'Escape'){
        !modal.classList.contains('hidden') ? closeModal() :''
    } 
})