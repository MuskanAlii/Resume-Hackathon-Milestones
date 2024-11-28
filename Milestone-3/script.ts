const form = document.getElementById("resume-form") as HTMLFormElement;
const resume = document.getElementById("generated-resume") as HTMLDivElement;

function generateResume (event : Event){
    event.preventDefault();

    let name = (document.getElementById("name") as HTMLInputElement).value;
    let fatherName = (document.getElementById("father-name") as HTMLInputElement).value;
    let age = (document.getElementById("age") as HTMLInputElement).value;
    let contact = (document.getElementById('contact') as HTMLInputElement).value;
    let email = (document.getElementById('email') as HTMLInputElement).value;
    let address = (document.getElementById('address') as HTMLInputElement).value;
    let education = (document.getElementById('education') as HTMLTextAreaElement).value;
    let skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    let experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    
    resume.innerHTML = `
    <h1 class="main-heading"> ${name} <h1/>
    <h3 id="personal-heading" class="heading-section"> Personal Information </h3>
    <p class="data"> <b> Name: </b> ${name} </p>
    <p class="data"> <b> Father-Name: </b> ${fatherName} </p>
    <p class="data"> <b> Age: </b> ${age} </p>
    <p class="data"> <b> Contact: </b> ${contact} </p>
    <p class="data"> <b> Email: </b> ${email} </p>
    <p class="data"> <b> Address: </b> ${address} </p>
    <h3  class="heading-section"> Education </h3>
    <p class="data"> <b> Education: </b> ${education} </p>
    <h3 class="heading-section"> Skills </h3>
    <p class="data"> <b> Skills: </b> ${skills} </p>
    <h3 class="heading-section"> Work Experience </h3>
    <p class="data"> <b> Experience: </b> ${experience} </p>  
    `
}

form.addEventListener('submit', generateResume);