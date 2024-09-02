Here's the updated README including the dependencies, installation, and usage sections:

---

# Ecom_brainium_final_proj

This project is an e-commerce web application built with React, featuring real-time data fetching from the FakeStore API, design implementations based on a provided Figma, and user authentication using Firebase.

## Key Features

### Navigation
- **Multiple Pages**: Includes Home, Contact, About, and dynamic pages such as Signup (if not logged in) or Orders (if logged in).
- **Product Search**: Allows users to search for products.
- **User Actions**: Icons for storing favorite products (heart-shaped) and adding to the cart; user profile icon displayed if logged in.

### Home Page (Hero Section)
- **Categories Links (Left)**: Links to products categorized by type.
- **Carousel (Right/Middle)**: Dynamic image carousel fetching data from Unsplash.

### Home Page - Section 2
- **Flash Sale Timer**: Implemented using the "react-countdown-circle-timer" npm package.
- **Product Cards**: Displays product details with an option to view all products.

### Home Page - Section 3
- **Search by Category**: Allows searching products by category via card clicks.
- **Best Selling Products**: Displays the best-selling products of the month.
- **Promotional Image**: Static image showcasing products.

### Home Page - Section 4
- **Product Display**: Two rows of product cards displayed simultaneously.
- **Footer**: Concludes the page with essential information.

### Add to Cart Page
- **Login Redirection**: Redirects to the login page if the user is not logged in, with a signup link for new users. After signup, users are redirected to the login page.
- **Cart Features**: Displays product name, price, quantity, subtotal, and includes a checkout button.

### Checkout Page
- **Billing Details**: Input form for user billing information.
- **Payment Options**: Choice between card payment and cash on delivery.
  - **Card Payment**: Redirects to a secure card entry page using the "react-credit-card-input" package, leading to a thank-you page.

### Orders Page
- **Orders History**: Appears in the navigation after login, showing all previously ordered products with details like quantity, address, and payment information.

### Thank You Page
- **Post-Purchase Actions**: Provides options to return to the home page.

## Dependencies

- `@testing-library/jest-dom`: ^5.17.0
- `@testing-library/react`: ^13.4.0
- `@testing-library/user-event`: ^13.5.0
- `axios`: ^1.7.2
- `bootstrap`: ^5.3.3
- `firebase`: ^10.12.5
- `react`: ^18.3.1
- `react-countdown-circle-timer`: ^3.2.1
- `react-credit-card-input`: ^1.1.5
- `react-credit-cards`: ^0.8.3
- `react-dom`: ^18.3.1
- `react-icons`: ^5.2.1
- `react-router-dom`: ^6.23.1
- `react-scripts`: 5.0.1
- `react-toastify`: ^10.0.5
- `sass`: ^1.77.6
- `styled-components`: ^6.1.11
- `swiper`: ^11.1.4
- `web-vitals`: ^2.1.4
- `zustand`: ^4.5.3

## Node version
- `Node`: ^20.9.0    

## Installation

To get started with this project, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd <project-directory>
npm install
```

## Usage

Run the app in development mode:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Contribution Guidelines

To contribute to this project:
- Fork the repository
- Create a new branch (`git checkout -b feature/YourFeature`)
- Make your changes and commit them (`git commit -am 'Add new feature'`)
- Push to the branch (`git push origin feature/YourFeature`)
- Open a Pull Request

## License

This project is licensed under the MIT License.

## Contact Information

For any issues or questions, please contact: [sayandas.brainium@gmail.com](mailto:sayandas.brainium@gmail.com)

## Acknowledgments

Special thanks to:
- Tutorials and resources used to build this project.

## Additional Information

- Known Issues: [List any known issues or bugs]
- Future Improvements: [List any planned features or enhancements]
- Related Projects: [Mention any related projects or work]

---

Feel free to add screenshots and any additional details as needed!