// Predefined location suggestions (you can replace with your own)
const locations = ["New York", "Los Angeles", "Chicago", "San Francisco", "Miami", "Boston"];

const searchInput = document.getElementById("search-input");
const suggestionsList = document.getElementById("suggestions-list");

// Function to show suggestions
function showSuggestions(input) {
    suggestionsList.innerHTML = "";
    const filteredLocations = locations.filter(location => location.toLowerCase().includes(input.toLowerCase()));
    filteredLocations.forEach(location => {
        const listItem = document.createElement("li");
        listItem.textContent = location;
        listItem.addEventListener("click", () => {
            searchInput.value = location;
            suggestionsList.style.display = "none";
        });
        suggestionsList.appendChild(listItem);
    });
    if (filteredLocations.length > 0) {
        suggestionsList.style.display = "block";
    } else {
        suggestionsList.style.display = "none";
    }
}

// Event listener for input changes
searchInput.addEventListener("input", () => {
    const inputValue = searchInput.value.trim();
    showSuggestions(inputValue);
});

// Event listener to hide suggestions when clicking outside
document.addEventListener("click", (event) => {
    if (event.target !== searchInput && event.target !== suggestionsList) {
        suggestionsList.style.display = "none";
    }
});
