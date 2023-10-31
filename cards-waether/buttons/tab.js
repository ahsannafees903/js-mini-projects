// JavaScript code for tab functionality
const tabButtons = document.querySelectorAll('.tab-links');
const tabContents = document.querySelectorAll('.tab-content');

// Add a JavaScript code to make sure that the first tab is always active when the page loads.
document.addEventListener('DOMContentLoaded', function () {
  const firstTabButton = tabButtons[0];
  firstTabButton.classList.add('active');
  const firstTabContent = document.getElementById(firstTabButton.dataset.tab);
  firstTabContent.style.display = 'block';
});

// Function to hide all tab contents
function hideTabContents() {
  tabContents.forEach(content => {
    content.style.display = 'none';
  });
}

// Function to show the selected tab content
function showTabContent(tabId) {
  const selectedTabContent = document.getElementById(tabId);
  selectedTabContent.style.display = 'block';
}

// Event listener for tab button clicks
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
