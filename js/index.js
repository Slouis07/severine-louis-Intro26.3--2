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

  // Log the three variables in one statement to match requirement
  console.log(usersName, usersEmail, usersMessage);

  // Select the #messages section by id
  const messageSection = document.getElementById("messages");

  // Query messageSection to find its <ul> element
  const messageList = messageSection.querySelector("ul");

  // Create a new list item element <li>
  const newMessage = document.createElement("li");

  // Set inner HTML with clickable mailto link and message content
  newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a> <span>wrote: ${usersMessage} </span>`;

  // Create remove button
  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.setAttribute("type", "button");

  // Event listener to remove entry on click
  removeButton.addEventListener("click", function () {
    const entry = removeButton.parentNode;
    entry.remove();
  });

  // Append remove button to message entry
  newMessage.appendChild(removeButton);

  // Append message entry to the list
  messageList.appendChild(newMessage);

  // Reset the form fields after submission
  messageForm.reset();
});

// Fetch repositories from GitHub API
fetch("https://api.github.com/users/Slouis07/repos")
  .then((response) => response.json())
  .then((data) => {
    const repositories = data;
    console.log(repositories);

    // Select the Projects section by id
    const projectSection = document.getElementById("Projects");

    // Query projectSection to find its <ul> element
    const projectList = projectSection.querySelector("ul");

    // Loop through the repositories array and add each to the list
    for (let i = 0; i < repositories.length; i++) {
      const project = document.createElement("li");
      project.innerText = repositories[i].name;
      projectList.appendChild(project);
    }
  })
  .catch((error) => {
    console.error("Error fetching repositories:", error);
  });