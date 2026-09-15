const today = new Date();
const thisYear = today.getFullYear();

// Selecting <footer> element
const footer = document.querySelector("footer");

// Creating (<p>) element for copyright
const copyright = document.createElement("p");
copyright.innerHTML = `&copy; ${thisYear} Severine Louis. All rights reserved.`;

// Append copyright to footer (before or after links)
footer.appendChild(copyright);

// Array of skills
const skills = ["JavaScript", "HTML", "CSS", "React", "GitHub", "SQL"];

// Select Skills section and its <ul> element
const skillsSection = document.getElementById("Skills");
const skillsList = skillsSection.querySelector("ul");

// Loop over skills array to build list
for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}

// Select message section & list for conditional rendering and handling
const messageSection = document.getElementById("messages");
const messageList = messageSection.querySelector("ul");

// Helper function to handle conditional display of Messages section
function toggleMessageSection() {
  if (messageList.children.length === 0) {
    messageSection.style.display = "none";
  } else {
    messageSection.style.display = "block";
  }
}

// Select the leave_message form by name attribute
const messageForm = document.querySelector('form[name="leave_message"]');

// Submit event listener for message form
messageForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;

  console.log(usersName, usersEmail, usersMessage);

  const newMessage = document.createElement("li");
  
  // Wrapper for text content
  const messageTextWrapper = document.createElement("span");
  messageTextWrapper.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a> wrote: <span class="msg-content">${usersMessage}</span>`;
  newMessage.appendChild(messageTextWrapper);

  // Button container for alignment
  const buttonGroup = document.createElement("div");
  buttonGroup.className = "message-buttons";

  // Edit Button 
  const editButton = document.createElement("button");
  editButton.innerText = "edit";
  editButton.setAttribute("type", "button");
  editButton.className = "btn-edit";

  editButton.addEventListener("click", function () {
    const msgSpan = messageTextWrapper.querySelector(".msg-content");
    const newMsg = prompt("Edit your message:", msgSpan.innerText);
    if (newMsg !== null && newMsg.trim() !== "") {
      msgSpan.innerText = newMsg.trim();
    }
  });

  // Remove Button
  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.setAttribute("type", "button");
  removeButton.className = "btn-remove";

  removeButton.addEventListener("click", function () {
    const entry = removeButton.closest("li");
    entry.remove();
    toggleMessageSection();
  });

  buttonGroup.appendChild(editButton);
  buttonGroup.appendChild(removeButton);
  newMessage.appendChild(buttonGroup);

  messageList.appendChild(newMessage);

  // Update visibility of messages section
  toggleMessageSection();

  messageForm.reset();
});

// Fetch repositories from GitHub API and display as clickable links
fetch("https://api.github.com/users/Slouis07/repos")
  .then((response) => response.json())
  .then((data) => {
    const repositories = data;
    console.log(repositories);

    const projectSection = document.getElementById("Projects");
    const projectList = projectSection.querySelector("ul");

    for (let i = 0; i < repositories.length; i++) {
      const project = document.createElement("li");

      // Clickable link for each repository
      const repoLink = document.createElement("a");
      repoLink.href = repositories[i].html_url;
      repoLink.innerText = repositories[i].name;
      repoLink.target = "_blank";
      repoLink.rel = "noopener noreferrer";

      project.appendChild(repoLink);
      projectList.appendChild(project);
    }
  })
  .catch((error) => {
    console.error("Error fetching repositories:", error);
  });