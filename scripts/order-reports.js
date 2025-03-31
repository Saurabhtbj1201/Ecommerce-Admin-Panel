const SPREADSHEET_ID = "1Gc6zOdfoo4cdhcfiySwws7Qxt6BAPMVMO66aBDvLkcA";
const API_KEY = "AIzaSyDmzg9ncuWxWSHrW_Pj9QVGxMgzagFSwTk";
const SHEET_NAME = "order_data";
const API_URL = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`;

async function fetchOrderData() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    const rows = data.values;
    if (rows && rows.length > 1) {
      processOrderData(rows.slice(1)); // Skip header row
    }
  } catch (error) {
    console.error("Error fetching order data:", error);
  }
}

function processOrderData(rows) {
  let pendingOrders = 0,
    deliveredOrders = 0,
    cancelledOrders = 0,
    totalRevenue = 0;
  const monthlyOrders = {};
  const productCounts = {};

  rows.forEach((row) => {
    const [
      orderId,
      productName,
      productPrices,
      orderDateTime,
      paymentMethod,
      paymentStatus,
      orderStatus,
      trackingNumber,
      discountApplied,
      taxAmount,
    ] = row;

    const price = parseFloat(productPrices) || 0;
    const discount = parseFloat(discountApplied) || 0;
    const tax = parseFloat(taxAmount) || 0;
    const finalPrice = price - discount + tax;
    totalRevenue += finalPrice;

    // Count order statuses
    if (orderStatus === "Pending") pendingOrders++;
    else if (orderStatus === "Delivered") deliveredOrders++;
    else if (orderStatus === "Cancelled") cancelledOrders++;

    // Count monthly orders
    const month = new Date(orderDateTime).toLocaleString("default", {
      month: "short",
    });
    monthlyOrders[month] = (monthlyOrders[month] || 0) + 1;

    // Count product occurrences
    productCounts[productName] = (productCounts[productName] || 0) + 1;
  });

  const mostBoughtItem = Object.keys(productCounts).reduce((a, b) =>
    productCounts[a] > productCounts[b] ? a : b
  );

  // Update summary
  document.getElementById("pendingOrders").textContent = pendingOrders;
  document.getElementById("deliveredOrders").textContent = deliveredOrders;
  document.getElementById("cancelledOrders").textContent = cancelledOrders;
  document.getElementById("totalRevenue").textContent = totalRevenue.toFixed(2);
  document.getElementById("mostBoughtItem").textContent = mostBoughtItem;

  // Render charts
  renderMonthlyOrdersChart(monthlyOrders);
  renderStatusDistributionChart(pendingOrders, deliveredOrders, cancelledOrders);
}

function renderMonthlyOrdersChart(monthlyOrders) {
  const ctx = document.getElementById("monthlyOrdersChart").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: Object.keys(monthlyOrders),
      datasets: [
        {
          label: "Monthly Orders",
          data: Object.values(monthlyOrders),
          backgroundColor: "rgba(75, 192, 192, 0.6)",
        },
      ],
    },
  });
}

function renderStatusDistributionChart(pending, delivered, cancelled) {
  const ctx = document.getElementById("statusDistributionChart").getContext("2d");
  new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Pending", "Delivered", "Cancelled"],
      datasets: [
        {
          data: [pending, delivered, cancelled],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        },
      ],
    },
  });
}

// Initialize
fetchOrderData();
