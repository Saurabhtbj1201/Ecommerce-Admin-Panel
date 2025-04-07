function logout() {
  // Clear all session and local storage
  sessionStorage.clear();
  localStorage.clear();

  // Redirect to login page
  window.location.href = "index.html";
}

// Prevent navigating back to the dashboard after logout
window.addEventListener("pageshow", function (event) {
  if (event.persisted || window.performance.navigation.type === 2) {
    sessionStorage.clear();
    localStorage.clear();
    window.location.href = "index.html";
  }
});

// Initialize the charts
document.addEventListener("DOMContentLoaded", () => {
  // User Statistics Chart
  const userStatisticsCtx = document.getElementById("userStatisticsChart").getContext("2d");
  new Chart(userStatisticsCtx, {
    type: "line",
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October"],
      datasets: [
        {
          label: "Visits",
          data: [120, 4000, 6125, 6000, 7254, 9123, 6600, 9515, 10557, 12300],
          borderColor: "rgb(255, 0, 0)", // Changed color
          backgroundColor: "rgba(255, 0, 0, 0.14)", // Changed color
          fill: true,
          tension: 0.2, // Adjusted tension for smoother lines
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: true },
      },
      scales: {
        x: { title: { display: true, text: "Month" } },
        y: { title: { display: true, text: "Visits" },},
      },
    },
  });

  // Sales Overview Chart
  const salesOverviewCtx = document.getElementById("salesOverviewChart").getContext("2d");
  new Chart(salesOverviewCtx, {
    type: "bar",
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October"],
      datasets: [
        {
          label: "Sales",
          data: [8354, 6542, 2899, 9590, 4800, 9850, 6820, 7000, 5200, 11000],
          backgroundColor: "rgba(46, 204, 113, 0.7)",
          borderColor: "rgba(46, 204, 113, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: true },
      },
      scales: {
        x: { title: { display: true, text: "Month" } },
        y: { 
          title: { display: true, text: "Sales" },
          suggestedMin: 0, // Set minimum value for Y-axis
          suggestedMax: 12000 // Set maximum value for Y-axis
        },
      },
    },
  });

  // Visit By Traffic Types and Analytics Charts (Combined)
  const trafficChartCtx = document.getElementById("trafficChart").getContext("2d");
  new Chart(trafficChartCtx, {
    type: "doughnut",
    data: {
      labels: ["Desktop", "Mobile", "Tablet", "Others"],
      datasets: [
        {
          label: "Traffic Types",
          data: [60, 30, 10 , 5],
          backgroundColor: ["#9b59b6", "#1abc9c", "#34495e" , "#e67e22"],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: true },
      },
    },
  });

  const analyticsCtx = document.getElementById("analyticsChart").getContext("2d");
  new Chart(analyticsCtx, {
    type: "pie",
    data: {
      labels: ["Organic", "Direct", "Referral", "Social"],
      datasets: [
        {
          label: "Traffic Sources",
          data: [40, 30, 20, 10],
          backgroundColor: ["#3498db", "#e74c3c", "#f1c40f", "#2ecc71"],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: true },
      },
    },
  });

  // Sales Reports Charts
  const salesReportsCtx = document.getElementById("salesReportsChart").getContext("2d");
  new Chart(salesReportsCtx, {
    type: "line",
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Revenue",
          data: [10000, 12000, 15000, 14000, 16000, 17000, 18000],
          borderColor: "rgb(231, 60, 211)",
          backgroundColor: "rgba(214, 60, 231, 0.2)",
          fill: true,
          tension: 0.4,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: true },
      },
      scales: {
        x: { title: { display: true, text: "Month" } },
        y: { title: { display: true, text: "Revenue" } },
      },
    },
  });

  // Most Users by Location Chart (Geographic Map using Leaflet.js)
  const locationChartContainer = document.getElementById("locationChart");

  // Initialize the map
  const map = L.map(locationChartContainer).setView([20, 0], 1); // Centered globally

  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Add markers for user locations
const locations = [
    { coords: [40.7128, -74.006], label: "New York, USA (25 Users)" },
    { coords: [51.5074, -0.1276], label: "London, UK (20 Users)" },
    { coords: [35.6895, 139.6917], label: "Tokyo, Japan (18 Users)" },
    { coords: [28.6139, 77.209], label: "Delhi, India (30 Users)" },
    { coords: [19.076, 72.8777], label: "Mumbai, India (25 Users)" },
    { coords: [12.9716, 77.5946], label: "Bangalore, India (20 Users)" },
    { coords: [39.9042, 116.4074], label: "Beijing, China (22 Users)" },
    { coords: [34.5553, 69.2075], label: "Kabul, Afghanistan (15 Users)" },
    { coords: [6.9271, 79.8612], label: "Colombo, Sri Lanka (12 Users)" }
];

  locations.forEach(location => {
    L.marker(location.coords).addTo(map).bindPopup(location.label);
  });
});