// const form = document.getElementById("resume-form") as HTMLFormElement;
// const resumeOutput = document.getElementById("resume-output") as HTMLDivElement;
// const formContainer1 = document.querySelector(
//   ".form-container"
// ) as HTMLDivElement;
// const resumeContainer = document.querySelector(
//   ".resume-container"
// ) as HTMLDivElement; 
// const editButton = document.getElementById("edit-button") as HTMLButtonElement;
// resumeContainer.style.display = "none";
// const handleFormSubmit = (event: Event) => {
//   event.preventDefault();
//   const name = (document.getElementById("name") as HTMLInputElement).value;
//   const title = (document.getElementById("title") as HTMLInputElement).value;
//   const email = (document.getElementById("email") as HTMLInputElement).value;
//   const phone = (document.getElementById("phone") as HTMLInputElement).value;
//   const skills = (document.getElementById("skills") as HTMLInputElement).value;
//   const experience = (document.getElementById("experience") as HTMLInputElement)
//     .value;
//   const company = (document.getElementById("company") as HTMLInputElement)
//     .value;
//   const position = (document.getElementById("position") as HTMLInputElement)
//     .value;
//   const degree = (document.getElementById("degree") as HTMLInputElement).value;
//   const school = (document.getElementById("school") as HTMLInputElement).value;
//   const graduationYear = (
//     document.getElementById("graduation-year") as HTMLInputElement
//   ).value;
//   if (
//     !name ||
//     !title ||
//     !email ||
//     !phone ||
//     !degree ||
//     !school ||
//     !graduationYear ||
//     !skills ||
//     !experience ||
//     !company ||
//     !position
//   ) {
//     alert("Please fill in all fields.");
//     return;
//   }
//   const resumeContent = `
//      <br/>
//     <div class="div">
//         <h2>Personal Information</h2>   
//     </div>
//         <h2><strong>. Name:</strong></h2>
//         <p>${name}</p>
//         <h3><strong>. Title:</strong></h3>
//         <p>${title}</p>
//         <h3><strong>. Email:</strong></h3> 
//         <p>${email}</p>
//         <h3><strong>Phone:</strong></h3> 
//         <p>${phone}</p>
//     <br/>
//     <div class="div">
//         <h2>Education</h2>
//     </div>
//         <h3><strong>. Degree:</strong> </h3>
//         <p>${degree}</p>
//         <h3><strong>. School/University:</strong> </h3>
//         <p> ${school}</p>
//         <h3><strong>. Graduation Year:</strong></h3> 
//         <p> ${graduationYear}</p>
//     <br/>
//     <div class="div">
//         <h2>Skills</h2>
//         </div>
//         <ul>
//             ${skills
//               .split(",")
//               .map((skill) => `<li>${skill.trim()}</li>`)
//               .join("")}
//         </ul>
//         <br>
// <div class="div">
//         <h2>Experience</h2>
// </div>
//         <h3><strong>. Company:</strong> </h3> 
//         <p> ${company}</p>
//         <h3><strong>. Postion:</strong> </h3> 
//         <p> ${position}</p>
//         <h3><strong>. Year:</strong></h3>
//         <p>${experience} years of experience.</p>
//         `;
//   resumeOutput.innerHTML = resumeContent;
//   formContainer1.style.display = "none";
//   resumeContainer.style.display = "block";
//   editButton.style.display = "inline-block";
// };
// const handleEditButtonClick = () => {
//   (document.getElementById("name") as HTMLInputElement).value =
//     (resumeOutput.querySelector("p") as HTMLParagraphElement).textContent
//       ?.split(":")[1]
//       .trim() || "";
//   (document.getElementById("title") as HTMLInputElement).value =
//     (resumeOutput.querySelectorAll("p")[1] as HTMLParagraphElement).textContent
//       ?.split(":")[1]
//       .trim() || "";
//   (document.getElementById("email") as HTMLInputElement).value =
//     (resumeOutput.querySelectorAll("p")[2] as HTMLParagraphElement).textContent
//       ?.split(":")[1]
//       .trim() || "";
//   (document.getElementById("phone") as HTMLInputElement).value =
//     (resumeOutput.querySelectorAll("p")[3] as HTMLParagraphElement).textContent
//       ?.split(":")[1]
//       .trim() || "";
//   (document.getElementById("skills") as HTMLInputElement).value =
//     (
//       resumeOutput.querySelectorAll("ul li")[0] as HTMLLIElement
//     ).textContent?.trim() || "";
//   (document.getElementById("degree") as HTMLInputElement).value =
//     (resumeOutput.querySelectorAll("p")[4] as HTMLParagraphElement).textContent
//       ?.split(":")[1]
//       .trim() || "";
//   (document.getElementById("school") as HTMLInputElement).value =
//     (resumeOutput.querySelectorAll("p")[5] as HTMLParagraphElement).textContent
//       ?.split(":")[1]
//       .trim() || "";
//   (document.getElementById("graduation-year") as HTMLInputElement).value =
//     (resumeOutput.querySelectorAll("p")[6] as HTMLParagraphElement).textContent
//       ?.split(":")[1]
//       .trim() || "";
//   (document.getElementById("experience") as HTMLInputElement).value =
//     (resumeOutput.querySelectorAll("p")[7] as HTMLParagraphElement).textContent
//       ?.split(":")[1]
//       .trim() || "";
//   (document.getElementById("company") as HTMLInputElement).value =
//     (resumeOutput.querySelectorAll("p")[8] as HTMLParagraphElement).textContent
//       ?.split(":")[1]
//       .trim() || "";
//   (document.getElementById("position") as HTMLInputElement).value =
//     (resumeOutput.querySelectorAll("p")[9] as HTMLParagraphElement).textContent
//       ?.split(":")[1]
//       .trim() || "";
//   formContainer1.style.display = "block";
//   resumeContainer.style.display = "none";
//   editButton.style.display = "block";
// };
// form.addEventListener("submit", handleFormSubmit);
// editButton.addEventListener("click", handleEditButtonClick);
// const form = document.getElementById("resume-form") as HTMLFormElement;
// const resumeOutput = document.getElementById("resume-output") as HTMLDivElement;
// const formContainer1 = document.querySelector(".form-container") as HTMLDivElement;
// const resumeContainer = document.querySelector(".resume-container") as HTMLDivElement;
// const editButton = document.getElementById("edit-button") as HTMLButtonElement;
// resumeContainer.style.display = "none";  // Hide resume initially
// let storedFormData: { [key: string]: string } = {};
// //  Store form data in the object
//     storedFormData = {
//         name,
//         title,
//         email,
//         phone,
//         skills,
//         degree,
//         school,
//         graduationYear,
//         experience,
//         company,
//         position
//     };
//     generateResume(storedFormData);
// // Handle form submission (Generate Resume)
// const handleFormSubmit = (event: Event) => {
//   event.preventDefault();
//   const name = (document.getElementById("name") as HTMLInputElement).value;
//   const title = (document.getElementById("title") as HTMLInputElement).value;
//   const email = (document.getElementById("email") as HTMLInputElement).value;
//   const phone = (document.getElementById("phone") as HTMLInputElement).value;
//   const skills = (document.getElementById("skills") as HTMLInputElement).value;
//   const experience = (document.getElementById("experience") as HTMLInputElement).value;
//   const company = (document.getElementById("company") as HTMLInputElement).value;
//   const position = (document.getElementById("position") as HTMLInputElement).value;
//   const degree = (document.getElementById("degree") as HTMLInputElement).value;
//   const school = (document.getElementById("school") as HTMLInputElement).value;
//   const graduationYear = (document.getElementById("graduation-year") as HTMLInputElement).value;
//   if (
//     !name ||
//     !title ||
//     !email ||
//     !phone ||
//     !degree ||
//     !school ||
//     !graduationYear ||
//     !skills ||
//     !experience ||
//     !company ||
//     !position
//   ) {
//     alert("Please fill in all fields.");
//     return;
//   }
//   const resumeContent = `
//     <div class="div">
//       <h2>Personal Information</h2>   
//     </div>
//     <h2><strong>. Name:</strong></h2>
//     <p>${name}</p>
//     <h3><strong>. Title:</strong></h3>
//     <p>${title}</p>
//     <h3><strong>. Email:</strong></h3> 
//     <p>${email}</p>
//     <h3><strong>. Phone:</strong></h3> 
//     <p>${phone}</p>
//     <div class="div">
//       <h2>Education</h2>
//     </div>
//     <h3><strong>. Degree:</strong></h3>
//     <p>${degree}</p>
//     <h3><strong>. School/University:</strong></h3>
//     <p>${school}</p>
//     <h3><strong>. Graduation Year:</strong></h3> 
//     <p>${graduationYear}</p>
//     <div class="div">
//       <h2>Skills</h2>
//     </div>
//     <ul>
//       ${skills.split(",").map((skill) => `<li>${skill.trim()}</li>`).join("")}
//     </ul>
//     <div class="div">
//       <h2>Experience</h2>
//     </div>
//     <h3><strong>. Company:</strong></h3>
//     <p>${company}</p>
//     <h3><strong>. Position:</strong></h3>
//     <p>${position}</p>
//     <h3><strong>. Experience:</strong></h3>
//     <p>${experience} years of experience.</p>
//   `;
//   resumeOutput.innerHTML = resumeContent;
//   // Hide form and show resume
//   formContainer1.style.display = "none";
//   resumeContainer.style.display = "block";
//   editButton.style.display = "inline-block";  // Show the edit button
// };
// // Handle the Edit button functionality
// const handleEditButtonClick = (data: { [key: string]: string }) => {
//   // Pre-fill the form fields with the resume content data
//   (document.getElementById('name') as HTMLInputElement).value = storedFormData.name || '';
//     (document.getElementById('title') as HTMLInputElement).value = storedFormData.title || '';
//     (document.getElementById('email') as HTMLInputElement).value = storedFormData.email || '';
//     (document.getElementById('phone') as HTMLInputElement).value = storedFormData.phone || '';
//     (document.getElementById('skills') as HTMLInputElement).value = storedFormData.skills || '';
//     (document.getElementById('degree') as HTMLInputElement).value = storedFormData.degree || '';
//     (document.getElementById('school') as HTMLInputElement).value = storedFormData.school || '';
//     (document.getElementById('graduation-year') as HTMLInputElement).value = storedFormData.graduationYear || '';
//     (document.getElementById('experience') as HTMLInputElement).value = storedFormData.experience || '';
//     (document.getElementById('company') as HTMLInputElement).value = storedFormData.company || '';
//     (document.getElementById('position') as HTMLInputElement).value = storedFormData.position || '';
//   // Show the form again and hide the resume
//   formContainer1.style.display = "block";
//   resumeContainer.style.display = "none";
//   editButton.style.display = "none";  // Hide the edit button after editing
// };
// // Add event listeners
// form.addEventListener("submit", handleFormSubmit);
// editButton.addEventListener("click", handleEditButtonClick);
// Get references to the DOM elements
var form = document.getElementById("resume-form");
var resumeOutput = document.getElementById("resume-output");
var formContainer1 = document.querySelector(".form-container");
var resumeContainer = document.querySelector(".resume-container");
var editButton = document.getElementById("edit-button");
// Hide resume initially
resumeContainer.style.display = "none";
// Object to store form data
var storedFormData = {};
// Handle form submission to generate resume
var handleFormSubmit = function (event) {
    event.preventDefault();
    // Grab input values from the form
    var name = document.getElementById("name").value;
    var title = document.getElementById("title").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var skills = document.getElementById("skills").value;
    var experience = document.getElementById("experience").value;
    var company = document.getElementById("company").value;
    var position = document.getElementById("position").value;
    var degree = document.getElementById("degree").value;
    var school = document.getElementById("school").value;
    var graduationYear = document.getElementById("graduation-year").value;
    // Check if all fields are filled
    if (!name || !title || !email || !phone || !degree || !school || !graduationYear ||
        !skills || !experience || !company || !position) {
        alert("Please fill in all fields.");
        return;
    }
    // Store form data in the object for later pre-filling
    storedFormData = {
        name: name,
        title: title,
        email: email,
        phone: phone,
        skills: skills,
        experience: experience,
        company: company,
        position: position,
        degree: degree,
        school: school,
        graduationYear: graduationYear
    };
    // Generate resume content
    var resumeContent = "\n    <div class=\"div\">\n      <h2>Personal Information</h2>   \n    </div>\n    <h2><strong>. Name:</strong></h2>\n    <p>".concat(name, "</p>\n    <h3><strong>. Title:</strong></h3>\n    <p>").concat(title, "</p>\n    <h3><strong>. Email:</strong></h3> \n    <p>").concat(email, "</p>\n    <h3><strong>. Phone:</strong></h3> \n    <p>").concat(phone, "</p>\n    <div class=\"div\">\n      <h2>Education</h2>\n    </div>\n    <h3><strong>. Degree:</strong></h3>\n    <p>").concat(degree, "</p>\n    <h3><strong>. School/University:</strong></h3>\n    <p>").concat(school, "</p>\n    <h3><strong>. Graduation Year:</strong></h3> \n    <p>").concat(graduationYear, "</p>\n    <div class=\"div\">\n      <h2>Skills</h2>\n    </div>\n    <ul>\n      ").concat(skills.split(",").map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(""), "\n    </ul>\n    <div class=\"div\">\n      <h2>Experience</h2>\n    </div>\n    <h3><strong>. Company:</strong></h3>\n    <p>").concat(company, "</p>\n    <h3><strong>. Position:</strong></h3>\n    <p>").concat(position, "</p>\n    <h3><strong>. Experience:</strong></h3>\n    <p>").concat(experience, " years of experience.</p>\n  ");
    // Update the resume output with the generated content
    resumeOutput.innerHTML = resumeContent;
    // Hide form and show resume
    formContainer1.style.display = "none";
    resumeContainer.style.display = "block";
    editButton.style.display = "inline-block"; // Show the edit button
};
// Handle the "Edit" button click
var handleEditButtonClick = function () {
    // Pre-fill the form with the stored form data
    document.getElementById('name').value = storedFormData.name || '';
    document.getElementById('title').value = storedFormData.title || '';
    document.getElementById('email').value = storedFormData.email || '';
    document.getElementById('phone').value = storedFormData.phone || '';
    document.getElementById('skills').value = storedFormData.skills || '';
    document.getElementById('degree').value = storedFormData.degree || '';
    document.getElementById('school').value = storedFormData.school || '';
    document.getElementById('graduation-year').value = storedFormData.graduationYear || '';
    document.getElementById('experience').value = storedFormData.experience || '';
    document.getElementById('company').value = storedFormData.company || '';
    document.getElementById('position').value = storedFormData.position || '';
    // Show the form again and hide the resume
    formContainer1.style.display = "block";
    resumeContainer.style.display = "none";
    editButton.style.display = "none"; // Hide the edit button after editing
};
// Add event listeners for form submission and edit button click
form.addEventListener("submit", handleFormSubmit);
editButton.addEventListener("click", handleEditButtonClick);
