require("dotenv").config();
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// ✅ Connect to MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err.code, err.message);
  } else {
    console.log("✅ Connected to MySQL database successfully!");
  }
});

// Test the connection
db.query("SELECT 1", (err, results) => {
  if (err) {
    console.error("❌ Query failed:", err);
  } else {
    console.log("✅ Query successful:", results);
  }
});

// ✅ Login API (Using Plain Text Password)
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const query = `
    SELECT * FROM admins 
    WHERE username = ? OR email = ? OR mobile = ?`; // Include mobile no in the query
  db.query(query, [username, username, username], (err, results) => {
    if (err) {
      return res.status(500).json({ success: false, message: "Database error" });
    }

    if (results.length === 0) {
      return res.status(401).json({ success: false, message: "User not found" });
    }

    const user = results[0];

    // ✅ Compare plain text password
    if (password === user.password) {
      res.json({ success: true, message: "Login successful" });
    } else {
      res.status(401).json({ success: false, message: "Invalid password" });
    }
  });
});

// ✅ Verify User API (for password reset)
app.post("/verify-user", (req, res) => {
  const { firstName, lastName, identifier } = req.body; // Use 'identifier' for username, email, or mobile

  const query = `
    SELECT * FROM admins 
    WHERE first_name = ? AND last_name = ? 
    AND (username = ? OR email = ? OR mobile = ?)`;
  db.query(query, [firstName, lastName, identifier, identifier, identifier], (err, results) => {
    if (err) {
      console.error("Database error:", err); // Log the error
      return res.status(500).json({ success: false, message: "Database error" });
    }

    if (results.length === 0) {
      console.warn("No user found with the provided details."); // Log no user found
      return res.status(404).json({ success: false, message: "User not found or details do not match" });
    }

    res.json({ success: true, message: "User verified successfully. You can now reset your password." });
  });
});

// ✅ Update Password API (Using Plain Text)
app.post("/update-password", (req, res) => {
  const { email, newPassword } = req.body;

  if (!email || !newPassword) {
    return res.status(400).json({ success: false, message: "Missing email or new password" });
  }

  const updateQuery = "UPDATE admins SET password = ? WHERE email = ? OR username = ?";
  db.query(updateQuery, [newPassword, email, email], (err, result) => {
    if (err) return res.status(500).json({ success: false, message: "Database error" });

    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json({ success: true, message: "Password updated successfully. Please log in with your new password." });
  });
});

// ✅ Logout API (Clear auth token or cookie)
app.post("/logout", (req, res) => {
  res.clearCookie("authToken"); // Clear auth cookie if used
  res.status(200).json({ success: true, message: "Logged out successfully" });
});

// ✅ Start the server
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});

const corsOptions = {
  origin: "http://localhost:3000", // Replace with your frontend domain
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
};
app.use(cors(corsOptions));