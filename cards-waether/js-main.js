async function updateTemperature() {
    try {
        const temperatureData = 25; // Replace this with actual temperature data

        // Update the temperature element
        const temperatureElement = document.getElementById('temperature');
        temperatureElement.textContent = `${temperatureData}`;
    } catch (error) {
        console.error('Error fetching temperature data:', error);
    }
}

// Call the updateTemperature function when the page loads
window.addEventListener('load', updateTemperature);


const tabButtons = document.querySelectorAll('.tab-links');
const tabContents = document.querySelectorAll('.tab-content');

document.addEventListener('DOMContentLoaded', function () {
  const firstTabButton = tabButtons[0];
  firstTabButton.classList.add('active');
  const firstTabContent = document.getElementById(firstTabButton.dataset.tab);
  firstTabContent.style.display = 'block';
});

function hideTabContents() {
  tabContents.forEach(content => {
    content.style.display = 'none';
  });
}

function showTabContent(tabId) {
  const selectedTabContent = document.getElementById(tabId);
  selectedTabContent.style.display = 'block';
}

tabButtons.forEach(button => {
  button.addEventListener('click', function () {
    const tabId = this.dataset.tab;
    hideTabContents(); // Hide all tab contents
    showTabContent(tabId); // Show the selected tab content

    // Remove the 'active' class from all buttons and add it to the clicked button
    tabButtons.forEach(btn => {
      btn.classList.remove('active');
    });
    this.classList.add('active');
  });
});


//date input

        // Get a reference to the date input element
        const dateInput = document.getElementById('autoDate');
      
        // Get the current date in the format yyyy-mm-dd
        const currentDate = new Date().toISOString().split('T')[0];
      
        // Set the value of the date input to the current date
        dateInput.value = currentDate;


// Search bar
const locations = ["Multan", "Lahore", "Kot Addu", "DG Khan", "Kan Ghar", "Gujrat"];

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