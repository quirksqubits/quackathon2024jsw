// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Sample data (replace with dynamic data fetched from server)
    const listingsData = [
        { id: 1, title: "Fresh Vegetables", quantity: "10 lbs", description: "Assorted vegetables", location: "123 Main St", userEmail: "user1@example.com" },
        { id: 2, title: "Canned Soup", quantity: "20 cans", description: "Various flavors", location: "456 Elm St", userEmail: "user2@example.com" }
    ];

    // Function to display listings
    function displayListings() {
        const listingsContainer = document.getElementById("listings-container");
        listingsContainer.innerHTML = "";

        listingsData.forEach(listing => {
            const listingElement = document.createElement("div");
            listingElement.classList.add("spot");

            const titleElement = document.createElement("h2");
            titleElement.textContent = listing.title;

            const detailsElement = document.createElement("p");
            detailsElement.innerHTML = `<strong>Location:</strong> ${listing.location}<br><strong>Available:</strong> ${listing.availability}<br><strong>Description:</strong> ${listing.description}`;

            const claimButton = document.createElement("button");
            claimButton.classList.add("claim-button");
            claimButton.textContent = "Claim Spot";
            claimButton.dataset.listingId = listing.id;
            claimButton.dataset.userEmail = listing.userEmail;

            listingElement.appendChild(titleElement);
            listingElement.appendChild(detailsElement);
            listingElement.appendChild(claimButton);

            listingsContainer.appendChild(listingElement);
        });
    }

    // Display initial listings
    displayListings();

    // Add event listener to claim buttons
    document.addEventListener("click", function(event) {
        if (event.target && event.target.classList.contains("claim-button")) {
            const listingId = event.target.dataset.listingId;
            const userEmail = event.target.dataset.userEmail;

            fetch('/claim-spot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ listingId, userEmail })
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                alert(data.message);
                // You can update UI or perform other actions here
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
                alert("Failed to claim spot. Please try again later.");
            });
        }
    });
});
