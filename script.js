document.addEventListener("DOMContentLoaded", function() {
    // Function to open add listing page
    function openAddListingPage() {
        window.open("add_listing.html", "_blank", "width=600,height=600");
    }

    // Event listener for add listing button
    document.getElementById("addListingButton").addEventListener("click", openAddListingPage);

    // Event delegation for claim buttons
    document.querySelector('.container').addEventListener('click', function(event) {
        if (event.target && event.target.classList.contains('claim-button')) {
            // Handle claiming the spot here
            const spotTitle = event.target.parentNode.querySelector('h2').textContent;
            alert(`Spot claimed for ${spotTitle}`);
            event.target.textContent = "Claimed";
            event.target.disabled = true;
        }
    });
});
