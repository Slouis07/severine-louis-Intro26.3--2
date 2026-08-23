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
