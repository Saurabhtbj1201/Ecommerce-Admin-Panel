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

### Navigation
- Links to different sections: Dashboard, Product Management, Order Management, Customer Management, and Admin Profile.

### Authentication
- Includes a logout feature that clears session storage and prevents navigation back to the dashboard after logout.

## File Structure

```
Admin Panel/
├── dashboard.html               # Dashboard page
├── product-management.html       # Product management page
├── styles/
│   ├── styles.css               # Global styles
│   ├── dashboard.css            # Dashboard-specific styles
│   ├── product-management.css   # Product management-specific styles
├── scripts/
│   ├── dashboard.js             # Dashboard-specific JavaScript
├── images/                      # Image assets (e.g., logo, icons)
└── README.md                    # Project documentation
```

## How to Use

1. Clone the repository or download the project files.
2. Open `dashboard.html` or `product-management.html` in a browser to view the application.
3. Use the navigation bar to switch between sections.
4. Add, update, or delete products in the Product Management section.
5. View analytics and metrics on the Dashboard.

## Technologies Used

- **HTML5**: Structure of the application.
- **CSS3**: Styling and layout.
- **JavaScript**: Dynamic functionality and interactivity.
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