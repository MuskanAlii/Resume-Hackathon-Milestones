"use strict";
const skills = document.querySelector("ul");
const button = document.getElementById("toggle-skill");
button.addEventListener('click', () => {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
        button.innerHTML = '<i class="fa-solid fa-caret-up"></i>';
    }
    else {
        skills.style.display = 'none';
        button.innerHTML = '<i class="fa-solid fa-caret-down" id="down"></i>';
    }
});
