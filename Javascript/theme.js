// Function to toggle the theme
function toggleTheme() {
    const contentContainer = document.getElementById("contentContainer");
    
    // Toggle the theme class
    contentContainer.classList.toggle("theme-dark");
}

// Event listener for the button click
document.getElementById("changeThemeButton").addEventListener("click", toggleTheme);
