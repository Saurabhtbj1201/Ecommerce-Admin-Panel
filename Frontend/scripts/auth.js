document.addEventListener("DOMContentLoaded", function () {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (!isLoggedIn) {
      window.location.href = "index.html";
  }
});

// Logout function with backend logout request
document.getElementById("logout-button").addEventListener("click", function () {
  fetch("http://localhost:3000/logout", {
      method: "POST",
      credentials: "include", // Ensure cookies are sent if used
  })
  .then(response => response.json())
  .then(data => {
      if (data.success) {
          // Clear all session and local storage
          sessionStorage.clear();
          localStorage.clear();

          // Redirect to login page
          window.location.href = "index.html";
      }
  })
  .catch(error => console.error("Logout failed:", error));
});

// Prevent navigating back after logout
window.addEventListener("pageshow", function (event) {
  if (event.persisted || window.performance.navigation.type === 2) {
      sessionStorage.clear();
      localStorage.removeItem("authToken");
      localStorage.removeItem("isLoggedIn");
      window.location.href = "index.html";
  }
});

// Ensure authentication check runs AFTER logout
setTimeout(() => {
  if (!localStorage.getItem("isLoggedIn")) {
      window.location.href = "index.html";
  }
}, 1000);
