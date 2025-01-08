const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeOutput = document.getElementById("resume-output") as HTMLDivElement;
const formContainer1 = document.querySelector(".form-container") as HTMLDivElement;
const resumeContainer = document.querySelector(".resume-container") as HTMLDivElement;
const editButton = document.getElementById("edit-button") as HTMLButtonElement;

resumeContainer.style.display = "none";  

let storedFormData: { [key: string]: string } = {};

const handleFormSubmit = (event: Event) => {
  event.preventDefault();

  const name = (document.getElementById("name") as HTMLInputElement).value;
  const title = (document.getElementById("title") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const skills = (document.getElementById("skills") as HTMLInputElement).value;
  const experience = (document.getElementById("experience") as HTMLInputElement).value;
  const company = (document.getElementById("company") as HTMLInputElement).value;
  const position = (document.getElementById("position") as HTMLInputElement).value;
  const degree = (document.getElementById("degree") as HTMLInputElement).value;
  const school = (document.getElementById("school") as HTMLInputElement).value;
  const graduationYear = (document.getElementById("graduation-year") as HTMLInputElement).value;


  if (
    !name || !title || !email || !phone || !degree || !school || !graduationYear ||
    !skills || !experience || !company || !position
  ) {
    alert("Please fill in all fields.");
    return;
  }

  storedFormData = {
    name,
    title,
    email,
    phone,
    skills,
    experience,
    company,
    position,
    degree,
    school,
    graduationYear
  };

  const resumeContent = `
    <div class="div">
      <h2>Personal Information</h2>   
    </div>
    <h2><strong>. Name:</strong></h2>
    <p>${name}</p>
    <h3><strong>. Title:</strong></h3>
    <p>${title}</p>
    <h3><strong>. Email:</strong></h3> 
    <p>${email}</p>
    <h3><strong>. Phone:</strong></h3> 
    <p>${phone}</p>
    <div class="div">
      <h2>Education</h2>
    </div>
    <h3><strong>. Degree:</strong></h3>
    <p>${degree}</p>
    <h3><strong>. School/University:</strong></h3>
    <p>${school}</p>
    <h3><strong>. Graduation Year:</strong></h3> 
    <p>${graduationYear}</p>
    <div class="div">
      <h2>Skills</h2>
    </div>
    <ul>
      ${skills.split(",").map((skill) => `<li>${skill.trim()}</li>`).join("")}
    </ul>
    <div class="div">
      <h2>Experience</h2>
    </div>
    <h3><strong>. Company:</strong></h3>
    <p>${company}</p>
    <h3><strong>. Position:</strong></h3>
    <p>${position}</p>
    <h3><strong>. Experience:</strong></h3>
    <p>${experience} years of experience.</p>
  `;

  resumeOutput.innerHTML = resumeContent;

  formContainer1.style.display = "none";
  resumeContainer.style.display = "block";
  editButton.style.display = "inline-block";  
};


const handleEditButtonClick = () => {
  
  (document.getElementById('name') as HTMLInputElement).value = storedFormData.name || '';
  (document.getElementById('title') as HTMLInputElement).value = storedFormData.title || '';
  (document.getElementById('email') as HTMLInputElement).value = storedFormData.email || '';
  (document.getElementById('phone') as HTMLInputElement).value = storedFormData.phone || '';
  (document.getElementById('skills') as HTMLInputElement).value = storedFormData.skills || '';
  (document.getElementById('degree') as HTMLInputElement).value = storedFormData.degree || '';
  (document.getElementById('school') as HTMLInputElement).value = storedFormData.school || '';
  (document.getElementById('graduation-year') as HTMLInputElement).value = storedFormData.graduationYear || '';
  (document.getElementById('experience') as HTMLInputElement).value = storedFormData.experience || '';
  (document.getElementById('company') as HTMLInputElement).value = storedFormData.company || '';
  (document.getElementById('position') as HTMLInputElement).value = storedFormData.position || '';

  
  formContainer1.style.display = "block";
  resumeContainer.style.display = "none";
  editButton.style.display = "none"; 
};


form.addEventListener("submit", handleFormSubmit);
editButton.addEventListener("click", handleEditButtonClick);
