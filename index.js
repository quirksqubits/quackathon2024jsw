// script.js

// Sample data (replace with dynamic data fetched from server)
const listingsData = [
    { title: "Fresh Vegetables", quantity: "10 lbs", description: "Assorted vegetables", location: "123 Main St" },
    { title: "Canned Soup", quantity: "20 cans", description: "Various flavors", location: "456 Elm St" }
];

// Function to display listings
function displayListings() {
    // Get the container element where listings will be displayed
    const listingsContainer = document.getElementById("listings-container");
    // Clear any existing content within the container
    listingsContainer.innerHTML = "";

    // Iterate over each listing in the data array
    listingsData.forEach(listing => {
        // Create a new div element to represent the listing
        const listingElement = document.createElement("div");
        // Add the 'listing' class to the div
        listingElement.classList.add("listing");

        // Create an h3 element to display the title of the listing
        const titleElement = document.createElement("h3");
        // Set the text content of the title element to the listing's title
        titleElement.textContent = listing.title;

        // Create a p element to display details of the listing (quantity, description, location)
        const detailsElement = document.createElement("p");
        // Set the HTML content of the details element to include the listing's details
        detailsElement.innerHTML = `<strong>Quantity:</strong> ${listing.quantity}<br><strong>Description:</strong> ${listing.description}<br><strong>Location:</strong> ${listing.location}`;

        // Append the title and details elements to the listing element
        listingElement.appendChild(titleElement);
        listingElement.appendChild(detailsElement);

        // Append the listing element to the container
        listingsContainer.appendChild(listingElement);
    });
}

// Display initial listings
displayListings();
