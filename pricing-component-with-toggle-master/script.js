'use strict'

let toggleBtnContainer = document.querySelector('.toggle-btn-container');
let toggleBtn = document.querySelectorAll('.toggle-btn');
let price = document.querySelectorAll('.price');

toggleBtnContainer.addEventListener('click', function(){
    toggleBtn.forEach(btn => btn.classList.toggle('hidden'));
    price.forEach(elem => elem.classList.toggle('hidden'));
})
