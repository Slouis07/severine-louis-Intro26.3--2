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

  // Fetch artworks that are in the public domain and contain valid images
  fetch("https://api.artic.edu/api/v1/artworks/search?query[term][is_public_domain]=true&limit=15&fields=id,title,artist_display,date_display,image_id")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      // Filter out records without an image_id
      const artworks = data.data
        .filter((art) => art.image_id !== null && art.image_id !== undefined)
        .slice(0, 6);

      const iiifBaseUrl = (data.config && data.config.iiif_url) 
        ? data.config.iiif_url 
        : "https://www.artic.edu/iiif/2";

      apiContent.innerHTML = "";

      const list = document.createElement("ul");
      list.className = "api-data-list";

      artworks.forEach((art) => {
        const item = document.createElement("li");
        item.className = "api-card";

        // Construct standard IIIF image URL
        const fullImageUrl = `${iiifBaseUrl}/${art.image_id}/full/843,/0/default.jpg`;

        // IMPORTANT, adding referrerpolicy="no-referrer" prevents local dev referrer blocking
        const imageHtml = `
          <img 
            src="${fullImageUrl}" 
            alt="${art.title || "Artwork"}" 
            class="artwork-image" 
            referrerpolicy="no-referrer"
            style="width: 100%; height: 200px; object-fit: cover; border-radius: 4px; margin-bottom: 0.5rem;"
            onerror="this.onerror=null; this.src='https://via.placeholder.com/400x200?text=Image+Unavailable';"
          />`;

        item.innerHTML = `
          ${imageHtml}
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
  displayTitle.innerText = "Featured Artists";

  // Requesting fields such as birth_date, death_date, and filter for actual artists
  fetch("https://api.artic.edu/api/v1/agents?limit=12&fields=id,title,type,birth_date,death_date,is_artist")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      // Filter out funds/donors to show only actual creators, taking the top 6
      const artists = data.data
        .filter((agent) => agent.is_artist === true)
        .slice(0, 6);

      apiContent.innerHTML = "";

      const list = document.createElement("ul");
      list.className = "api-data-list";

      artists.forEach((artist) => {
        const item = document.createElement("li");
        item.className = "api-card";

        // format lifespan string 
        let lifespan = "Dates Unknown";
        if (artist.birth_date && artist.death_date) {
          lifespan = `${artist.birth_date} – ${artist.death_date}`;
        } else if (artist.birth_date) {
          lifespan = `b. ${artist.birth_date}`;
        }

        item.innerHTML = `
          <div class="artist-badge" style="display:inline-block; padding: 2px 8px; background: #e0e0e0; font-size: 0.75rem; border-radius: 4px; margin-bottom: 0.5rem; text-transform: uppercase;">
            ${artist.type || "Creator"}
          </div>
          <h3 style="margin: 0.25rem 0;">${artist.title}</h3>
          <p><strong>Lifespan:</strong> ${lifespan}</p>
          <p><strong>Catalog Ref:</strong> #${artist.id}</p>
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

// Attach event listeners
fetchArtworksBtn.addEventListener("click", fetchArtworks);
fetchAgentsBtn.addEventListener("click", fetchAgents);