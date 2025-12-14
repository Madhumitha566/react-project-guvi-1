# react-project-guvi-1
# 🛍️ React E-commerce Cart Application

This project is a single-page application (SPA) built with React and styled using Tailwind CSS. It simulates a basic e-commerce functionality by fetching product data from the Fake Store API and managing a user's shopping cart state.

## ✨ Features

* **API Integration:** Fetches product data using the standard JavaScript `fetch()` API.
* **State Management:** Uses React `useState` and `useEffect` hooks for managing application data (products, cart, loading status, modal visibility).
* **Responsive Product Grid:** Displays products in a responsive grid layout using Tailwind CSS utilities.
* **Cart Logic:** Allows adding and removing products from the cart. Includes logic to prevent adding duplicate items.
* **Modal View:** A dedicated modal displays all cart items, calculates the total value, and allows item removal.
* **Accessibility:** Uses `aria-label` for improved screen reader compatibility on the cart button.

## 🛠️ Tech Stack

* **Framework:** React v18+
* **Styling:** Tailwind CSS 
* **Iconography:** Lucide-React ( SVG icon library)
* **link:** Fake Store API (https://fakestoreapi.com/products)

## 📦 Components Structure

| Component | Responsibility|
| :--- | :--- |
| **`App.jsx`** | This is a main component works as Parent component.
| **`Navbar.jsx`** | Displays the cart product and the cart product count
| **`ProductCard.jsx`**| Renders a products which is display in the UI
| **`CartItems.jsx`** | Displays cart contents, total value, and handles item removal. 

## ⚙️ Setup and Installation

1.  Clone the repository.
2.  Install dependencies: `npm install`
3.  Run the development server: `npm run dev`
