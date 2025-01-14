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
    <p class="data"> <b> Name: </b> <span contenteditable="true"> ${name} </span> </p>
    <p class="data"> <b> Father-Name: </b> <span contenteditable="true"> ${fatherName} </span> </p>
    <p class="data"> <b> Age: </b> <span contenteditable="true"> ${age} </span> </p>
    <p class="data"> <b> Contact: </b> <span contenteditable="true"> ${contact} </span> </p>
    <p class="data"> <b> Email: </b> <span contenteditable="true"> ${email} </span> </p>
    <p class="data"> <b> Address: </b> <span contenteditable="true"> ${address} </span> </p>
    <h3  class="heading-section"> Education </h3>
    <p class="data"> <b> Education: </b> <span contenteditable="true"> ${education} </span> </p>
    <h3 class="heading-section"> Skills </h3>
    <p class="data"> <b> Skills: </b> <span contenteditable="true"> ${skills} </span> </p>
    <h3 class="heading-section"> Work Experience </h3>
    <p class="data"> <b> Experience: </b> <span contenteditable="true"> ${experience} </span> </p>  
    `
}

form.addEventListener('submit', generateResume);