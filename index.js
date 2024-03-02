// script.js

// Sample data (replace with dynamic data fetched from server)
const listingsData = [
    { title: "Fresh Vegetables", quantity: "10 lbs", description: "Assorted vegetables", location: "123 Main St" },
    { title: "Canned Soup", quantity: "20 cans", description: "Various flavors", location: "456 Elm St" }
  ];
  
  // Function to display listings
  function displayListings() {
    const listingsContainer = document.getElementById("listings-container");
    listingsContainer.innerHTML = "";
  
    listingsData.forEach(listing => {
      const listingElement = document.createElement("div");
      listingElement.classList.add("listing");
  
      const titleElement = document.createElement("h3");
      titleElement.textContent = listing.title;
  
      const detailsElement = document.createElement("p");
      detailsElement.innerHTML = `<strong>Quantity:</strong> ${listing.quantity}<br><strong>Description:</strong> ${listing.description}<br><strong>Location:</strong> ${listing.location}`;
  
      listingElement.appendChild(titleElement);
      listingElement.appendChild(detailsElement);
  
      listingsContainer.appendChild(listingElement);
    });
  }
  
  // Display initial listings
  displayListings();

  