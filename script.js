document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const body = document.body;

  // Check if dark mode is enabled in local storage
  if (localStorage.getItem("darkMode") === "enabled") {
      body.classList.add("dark-mode");
  }

  darkModeToggle.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
      
      // Save preference in local storage
      if (body.classList.contains("dark-mode")) {
          localStorage.setItem("darkMode", "enabled");
      } else {
          localStorage.removeItem("darkMode");
      }
  });
});