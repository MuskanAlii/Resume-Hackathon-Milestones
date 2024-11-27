const skills = document.querySelector("ul") as HTMLElement;
const button = document.getElementById("toggle-skill") as HTMLButtonElement;

button.addEventListener('click', () => {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
          button.innerHTML = '<i class="fa-solid fa-caret-up"></i>'
    } else {
        skills.style.display = 'none';
        button.innerHTML ='<i class="fa-solid fa-caret-down" id="down"></i>'
    }
});