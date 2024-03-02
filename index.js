document.addEventListener("DOMContentLoaded", function() {
    // Function to display listings
    function displayListings() {
        const listingsContainer = document.getElementById("listings-container");
        listingsContainer.innerHTML = ""; // Clear previous listings before displaying new ones

        // Sample data (replace with dynamic data fetched from server)
        const listingsData = [
            { id: 1, title: "Fresh Vegetables", quantity: "10 lbs", description: "Assorted vegetables", location: "123 Main St", userEmail: "user1@example.com" },
            { id: 2, title: "Canned Soup", quantity: "20 cans", description: "Various flavors", location: "456 Elm St", userEmail: "user2@example.com" }
        ];

        // Loop through each listing and create HTML elements to display them
        listingsData.forEach(listing => {
            const listingElement = document.createElement("div");
            listingElement.classList.add("spot");

            // Create elements for title, details, and claim button
            const titleElement = document.createElement("h2");
            titleElement.textContent = listing.title;

            const detailsElement = document.createElement("p");
            detailsElement.innerHTML = `<strong>Location:</strong> ${listing.location}<br><strong>Available:</strong> ${listing.availability}<br><strong>Description:</strong> ${listing.description}`;

            const claimButton = document.createElement("button");
            claimButton.classList.add("claim-button");
            claimButton.textContent = "Claim Spot";
            claimButton.dataset.listingId = listing.id;
            claimButton.dataset.userEmail = listing.userEmail;

            // Add event listener to claim button
            claimButton.addEventListener("click", function() {
                // Update the UI to indicate that the spot has been claimed
                const claimedMessage = document.createElement("p");
                claimedMessage.textContent = "Spot claimed!";
                listingElement.appendChild(claimedMessage);
                // Disable the claim button after it's been clicked
                claimButton.disabled = true;
            });

            // Append elements to the listing container
            listingElement.appendChild(titleElement);
            listingElement.appendChild(detailsElement);
            listingElement.appendChild(claimButton);

            listingsContainer.appendChild(listingElement);
        });
    }

    // Display initial listings
    displayListings();
});
