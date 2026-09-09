// footer copyright logic (matching index.js structure)
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerHTML = `&copy; ${thisYear} Severine Louis. All rights reserved.`;
footer.appendChild(copyright);

// Select interactive DOM elements
const fetchArtworksBtn = document.getElementById("fetch-artworks-btn");
const fetchAgentsBtn = document.getElementById("fetch-agents-btn");
const displayTitle = document.getElementById("display-title");
const apiContent = document.getElementById("api-content");

// Helper function to render loading state to user
function showLoading(categoryName) {
  apiContent.innerHTML = `<p class="placeholder-text">Loading ${categoryName} from Art Institute of Chicago...</p>`;
}

// Endpoint 1 GET Request for Artworks
function fetchArtworks() {
  showLoading("artworks");
  displayTitle.innerText = "Featured Artworks";

  // Issue a fresh GET request specifically for artworks endpoint
  fetch("https://api.artic.edu/api/v1/artworks?limit=6&fields=id,title,artist_display,date_display")
    .then((response) => {
      // Check if network response is healthy
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const artworks = data.data;

      // Clear loading message
      apiContent.innerHTML = "";

      // Create a list container for artwork items
      const list = document.createElement("ul");
      list.className = "api-data-list";

      // Loop through returned artwork data and create list items
      artworks.forEach((art) => {
        const item = document.createElement("li");
        item.className = "api-card";
        item.innerHTML = `
          <h3>${art.title || "Untitled"}</h3>
          <p><strong>Artist:</strong> ${art.artist_display || "Unknown"}</p>
          <p><strong>Date:</strong> ${art.date_display || "N/A"}</p>
        `;
        list.appendChild(item);
      });

      apiContent.appendChild(list);
    })
    .catch((error) => {
      console.error("Error fetching artworks:", error);
      apiContent.innerHTML = `<p class="error-text">Failed to load artworks. Please try again later.</p>`;
    });
}

// Endpoint 2 GET Request for Artists/Agents
function fetchAgents() {
  showLoading("artists");
  displayTitle.innerText = "Featured Artists & Entities";

  // Issue a GET request specifically for agents (artists) endpoint
  fetch("https://api.artic.edu/api/v1/agents?limit=6&fields=id,title,type,birth_date,death_date")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const agents = data.data;

      // Clear loading message
      apiContent.innerHTML = "";

      // Create a list container for artist items
      const list = document.createElement("ul");
      list.className = "api-data-list";

      // Loop through returned artist data and create list items
      agents.forEach((agent) => {
        const item = document.createElement("li");
        item.className = "api-card";
        const lifespan = agent.birth_date ? `${agent.birth_date} - ${agent.death_date || "Present"}` : "N/A";
        item.innerHTML = `
          <h3>${agent.title}</h3>
          <p><strong>Type:</strong> ${agent.type || "Artist"}</p>
          <p><strong>Lifespan:</strong> ${lifespan}</p>
        `;
        list.appendChild(item);
      });

      apiContent.appendChild(list);
    })
    .catch((error) => {
      console.error("Error fetching artists:", error);
      apiContent.innerHTML = `<p class="error-text">Failed to load artists. Please try again later.</p>`;
    });
}

// Attach event listeners to navigation buttons to perform separate GET requests on click
fetchArtworksBtn.addEventListener("click", fetchArtworks);
fetchAgentsBtn.addEventListener("click", fetchAgents);