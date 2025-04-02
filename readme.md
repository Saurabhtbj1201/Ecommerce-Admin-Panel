# Admin Panel

The **Admin Panel** is a web-based application designed to manage various aspects of an e-commerce platform, including products, orders, customers, and administrative profiles. This project is built with HTML, CSS, and JavaScript, and includes interactive features for managing data dynamically.

## Features

### Dashboard
- Displays key metrics such as visits, bounce rate, pageviews, and growth rate.
- Includes charts for user statistics, sales overview, and traffic analytics.
- Provides customer satisfaction and browser usage statistics.

### Product Management
- Add, update, delete, and preview products.
- Fields include product name, brand, price, discount price, shipping charges, specifications, return policy, and product image.
- Dynamically updates the product list table.

### Order Management
- View, update, and track orders.
- Categorized views for running, delivered, and cancelled orders.
- Export order data to CSV.

### Customer Management
- View and manage customer details.
- Export customer data to CSV.

### Admin Profile
- View and edit admin profile details.
- Change profile photo and update contact information.

### Authentication
- Includes a login feature with username/email and password.
- Logout functionality clears session storage and prevents navigation back to the dashboard after logout.

## File Structure

```
Admin Panel/
├── Backend/
│   ├── .env                     # Environment variables
│   ├── server.js                # Backend server for APIs
├── Frontend/
│   ├── admin-profile.html       # Admin profile page
│   ├── customer-management.html # Customer management page
│   ├── dashboard.html           # Dashboard page
│   ├── index.html               # Login page
│   ├── order-management.html    # Order management page
│   ├── order-management-all.html # All orders page
│   ├── pass-matched.html        # Password reset confirmation page
│   ├── product-management.html  # Product management page
│   ├── styles/
│   │   ├── admin-profile.css    # Admin profile-specific styles
│   │   ├── customer-management.css # Customer management-specific styles
│   │   ├── dashboard.css        # Dashboard-specific styles
│   │   ├── login.css            # Login page-specific styles
│   │   ├── order-management-all.css # All orders-specific styles
│   │   ├── order-management.css # Order management-specific styles
│   │   ├── pass-matched.css     # Password reset confirmation-specific styles
│   │   ├── product-management.css # Product management-specific styles
│   │   ├── styles.css           # Global styles
│   ├── scripts/
│   │   ├── auth.js              # Authentication-related JavaScript
│   │   ├── dashboard.js         # Dashboard-specific JavaScript
│   ├── images/                  # Image assets (e.g., logo, icons)
│   │   ├── logo-transparent.png # Transparent logo
│   │   ├── bell.png             # Notification bell icon
│   │   ├── account.png          # Account icon
│   │   ├── bg.jpg               # Background image for login
│   │   ├── bg1.jpg              # Background image for password reset
│   │   ├── Reports Admin.pdf    # Admin reports PDF
├── README.md                    # Project documentation
```

## How to Use

1. Clone the repository or download the project files.
2. Start the backend server by running `node server.js` in the `Backend` directory.
3. Open `index.html` in a browser to access the login page.
4. Use the navigation bar to switch between sections after logging in.
5. Manage products, orders, customers, and admin profile using the respective sections.

## Technologies Used

- **HTML5**: Structure of the application.
- **CSS3**: Styling and layout.
- **JavaScript**: Dynamic functionality and interactivity.
- **Node.js**: Backend server.
- **MySQL**: Database for storing admin panel data.
- **Chart.js**: For rendering charts on the dashboard.
- **Leaflet.js**: For location-based visualizations.

## Future Enhancements

- Add backend integration for persistent data storage.
- Implement user authentication and role-based access control.
- Enhance the UI/UX with modern design frameworks.
- Add more detailed analytics and reporting features.

## Author

Developed by [Saurabh](https://www.gu-saurabh.tech/).

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---
