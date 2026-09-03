const today = new Date();

const thisYear = today.getFullYear();

//making <footer> element
const footer = document.querySelector("footer");

//making (<p>) element
const copyright = document.createElement("p");

//inner HTML for <p> element
copyright.innerHTML = `&copy; ${thisYear} Severine Louis. All rights reserved.`;

//append the copyright element to the footer
footer.appendChild(copyright);

//array of my skills
const skills = ["JavaScript", "HTML", "CSS", "React", "GitHub", "SQL"];

// get my skills id from my html
const skillsSection = document.getElementById("Skills");

// Query skillsSection to select its <ul> element
const skillsList = skillsSection.querySelector("ul");

// loop over the skills array
for (let i = 0; i < skills.length; i++) {
  //Create a new list item element <li>
  const skill = document.createElement("li");

  // Set the inner text to the current array element
  skill.innerText = skills[i];

  // append the skill element to skillsList
  skillsList.appendChild(skill);
}

// Select the leave_message form by name attribute
const messageForm = document.querySelector('form[name="leave_message"]');

// Add submit event listener to the form
messageForm.addEventListener("submit", function (event) {
  // Prevent default page refresh behavior
  event.preventDefault();

  // Retrieve input field values from the form event
  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;

  // Log the values to the browser console
  console.log("Name:", usersName);
  console.log("Email:", usersEmail);
  console.log("Message:", usersMessage);

  // Reset the form fields after submission
  messageForm.reset();
});