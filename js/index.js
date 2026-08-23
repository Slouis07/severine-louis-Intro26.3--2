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
